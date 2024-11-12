import React, { useState, useEffect, useRef } from "react";

//LOOK I KNOW THIS WHOLE COMPONENT IS BANANAS BUT IT WORKS SO DON'T CHANGE IT WITHOUT BEING VERY CAREFUL

const EditableDiv = ({
	substrings,
	label,
	body,
	onBodyChange,
	promptsChanged,
}) => {
	const textFieldRef = useRef();

	useEffect(() => {
		const textField = textFieldRef.current;
		let textContent = textField.innerHTML;

		// Find and highlight prompt answers
		const highlightedContent = substrings.reduce((content, answer) => {
			// Skip highlighting for certain terms or short answers
			if (
				answer === "span" ||
				answer === "class" ||
				answer === "name" ||
				answer.length < 1
			) {
				return content;
			}

			const regex = new RegExp(`(?<!\\w)${answer}(?!\\w)`, "gis");
			return content.replaceAll(
				regex,
				`<span class="fadeHighlight">${answer}</span>`
			);
		}, textContent);

		textField.innerHTML = highlightedContent;
	}, [substrings, promptsChanged]); // Include promptsChanged in dependencies

	const [length, setLength] = useState(body?.length);
	useEffect(() => {
		setLength(body?.length);
	}, [body]);

	return (
		<div style={{ width: "100%" }}>
			<div
				style={{
					marginTop: "10px",
					border: "1px solid rgba(0, 0, 0, 0.3)",
					padding: "10px",
					position: "relative",
					borderRadius: "4px",
				}}
				className="editableDivBox"
			>
				<label
					htmlFor="editableDiv"
					style={{
						position: "absolute",
						top: "-10px",
						left: "10px",
						background: "#fff",
						paddingLeft: "5px",
						paddingRight: "5px",
						fontSize: "0.75rem",
						fontFamily: "Roboto",
						color: "rgba(0, 0, 0, 0.54)",
						letterSpacing: "0.00938em",
					}}
				>
					{label}
				</label>
				<div
					style={{
						outline: "0px solid transparent",
						color: "black",
						fontFamily: "Roboto",
						padding: "5px",
						minHeight: "200px",
						height: "auto",
						whiteSpace: "pre-wrap",
					}}
					contentEditable
					ref={textFieldRef}
					suppressContentEditableWarning={true}
					autoFocus
					onInput={(e) => setLength(e.target?.innerText.length)}
					onBlur={() => onBodyChange(textFieldRef.current.innerText)}
				>
					{body}
				</div>
			</div>

			{label === "Your Tweet" && (
				<span
					style={{
						width: "100%",
						float: "right",
						textAlign: "right",
						margin: "0 0 0 auto",
						textDecoration: length >= 280 ? "underline" : "none",
						color:
							length < 250
								? "black"
								: length < 270
								? "darkred"
								: "rgba(221,28,26,1)",
					}}
				>
					{length} / 280
				</span>
			)}
		</div>
	);
};

export default React.memo(EditableDiv);
