import React, { useState, useEffect } from "react";

import FetchTarget from "./FetchTarget";


import Prompts from "./Prompts";
import Message from "./Message";
import { Tooltip, Button } from "@mui/material";
import { BtnStyleSmall } from "../../MUIStyles";

const Campaign = ({ campaign, stage, setStage}) => {

	const [postcode, setPostcode] = useState("");

	const [adminDivisions, setAdminDivisions] = useState({
		ward: "",
		constituency: "",
		scotConstituency: "",
	});

	const [prompts, setPrompts] = useState([]);

	useEffect(() => {
		// Load prompts with initial answers from campaign data
		if (campaign) {
			setPrompts(
				campaign.prompts.map((prompt) => ({
					...prompt,
					answer: prompt.answer || "",
				}))
			);
		}
	}, [campaign]);

	const [tooltipOpen, setTooltipOpen] = useState(false);
	const handleButtonClick = () => {
		if (
			!adminDivisions.ward ||
			prompts.some(
				(prompt) =>
					prompt.required &&
					(prompt.answer === null ||
						prompt.answer === undefined ||
						prompt.answer === "")
			)
		) {
			setTooltipOpen(true);
			// Automatically close tooltip after 3 seconds
			setTimeout(() => {
				setTooltipOpen(false);
			}, 3000);
		}
	};




	return (
		<div>
			{stage == 0 && (
				<>
					
					<h3 style={{margin: '0 0 10px 0', }}>A few quick questions...</h3>
					<FetchTarget
						postcode={postcode}
						setPostcode={setPostcode}
						campaign={campaign}
						adminDivisions={adminDivisions}
						setAdminDivisions={setAdminDivisions}
					/>
					<Prompts
						campaign={campaign}
						prompts={prompts}
						setPrompts={setPrompts}
					/>

					<div
						style={{
							display: "flex",
							width: "100%",
							justifyContent: "flex-end",
						}}
					>
						<Tooltip
							title="Make sure you have filled out all the required fields marked with *"
							open={tooltipOpen}
							disableHoverListener
							disableFocusListener
							disableTouchListener
							placement="left"
						>
							<span onClick={handleButtonClick}>
								<Button
									sx={BtnStyleSmall}
									disabled={
										!adminDivisions.ward ||
										prompts.some(
											(prompt) =>
												prompt.required &&
												(prompt.answer === null ||
													prompt.answer === undefined ||
													prompt.answer === "")
										)
									}
									onClick={() => setStage((old) => old + 1)}
								>
									Next
								</Button>{" "}
							</span>
						</Tooltip>
					</div>
				</>
			)}

			{stage == 1 && (
				<>
					<Message
						adminDivisions={adminDivisions}
						campaign={campaign}
						prompts={prompts}
						postcode={postcode}
						setStage={setStage}
					/>
				</>
			)}
		</div>
	);
};

export default Campaign;
