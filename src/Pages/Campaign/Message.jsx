import React, { useState, useEffect } from "react";
import {
	TextField,
	Chip,
	Paper,
	Accordion,
	AccordionSummary,
	AccordionDetails,
	Box,
	Button,
	useMediaQuery,
} from "@mui/material";
import Grid from "@mui/material/Grid2";

import { SendModal } from "./SendModal";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { BtnStyleSmall, BtnStyle } from "../../MUIStyles";
import { TextFieldStyle } from "../../MUIStyles";
import EditableDiv from "../../Components/EditableDiv";

import { EDINBURGHCLLRS } from "../../Data/EDINBURGHCLLRS";





const Message = ({ campaign, prompts, adminDivisions, postcode, setStage }) => {
	//TEMP HERE - FOR TIME TO DIVEST ONLY:

	const PensionsCttee = [
		"Mandy Watt",
		"Adam Nols-McVey",
		"Iain Whyte",
		"Steve Burgess",
		"Neil Ross",
	];
	const [messaging, setMessaging] = useState([
		...EDINBURGHCLLRS.filter(
			(cllr) =>
				cllr.ward == adminDivisions.ward || PensionsCttee.includes(cllr.name)
		),
	]);
	const [notMessaging, setNotMessaging] = useState([]);

	const promptsChanged = true;
	const { template } = campaign;
	const [newTemplate, setNewTemplate] = useState(
		campaign.template + `\n${postcode}`
	);

	const createPromptAnswers = (prompts) => {
		return prompts.reduce((acc, prompt) => {
			acc[prompt.id] = prompt.answer;
			return acc;
		}, {});
	};
	const promptAnswers = createPromptAnswers(prompts);

	//PROMPT LOGIC
	const addPrompt = (prompt) => {
		if (promptAnswers[prompt.id] !== undefined) {
			setNewTemplate((old) =>
				old.replace(`<<${prompt.id}>>`, promptAnswers[prompt.id])
			);
		} else {
			setNewTemplate((old) => old.replace(`<<${prompt.id}>>`, ""));
		}
	};

	const [extractedStringArray, setExtractedStringArray] = useState([]);

	const addCondition = (prompt) => {
		console.log("Processing condition: " + prompt.id);

		const promptId = prompt.id;

		// Case for undefined (no answer)
		if (typeof promptAnswers[promptId] == "string") {
			console.log("No answer, removing all placeholders for this prompt.");

			// Remove all "no" and "yes" placeholders
			let frameExtractionRegexNo = new RegExp(
				String.raw`<<${promptId}=no:.*?>>`,
				"gs"
			);
			let frameExtractionRegexYes = new RegExp(
				String.raw`<<${promptId}=yes:.*?>>`,
				"gs"
			);

			setNewTemplate((old) => old.replace(frameExtractionRegexNo, ""));
			setNewTemplate((old) => old.replace(frameExtractionRegexYes, ""));
			return;
		}

		// Case for "yes" condition
		if (promptAnswers[promptId]) {
			try {
				console.log("Processing positive answer (yes)...");

				// Get all matches for "yes" and replace each individually
				const yesMatches = Array.from(
					template.matchAll(new RegExp(`<<${promptId}=yes:(.*?)>>`, "gs"))
				);

				yesMatches.forEach((match) => {
					const extractedString = match[1]; // The captured text in the placeholder
					const fullMatch = match[0]; // The full placeholder (e.g., "<<promptId=yes:...>>")

					setNewTemplate((old) => old.replace(fullMatch, extractedString));
					setExtractedStringArray((old) => [...old, extractedString]);
				});

				// Remove all "no" placeholders for this prompt ID
				let frameExtractionRegexNo = new RegExp(
					String.raw`<<${promptId}=no:.*?>>`,
					"gs"
				);
				setNewTemplate((old) => old.replace(frameExtractionRegexNo, ""));
			} catch {
				// Remove all "no" placeholders if there's an error in processing
				let frameExtractionRegexNo = new RegExp(
					String.raw`<<${promptId}=no:.*?>>`,
					"gs"
				);
				setNewTemplate((old) => old.replace(frameExtractionRegexNo, ""));
			}
		}

		// Case for "no" condition
		if (!promptAnswers[promptId]) {
			console.log("Processing negative answer (no)...");

			try {
				// Get all matches for "no" and replace each individually
				const noMatches = Array.from(
					template.matchAll(new RegExp(`<<${promptId}=no:(.*?)>>`, "gs"))
				);

				noMatches.forEach((match) => {
					const extractedString = match[1]; // The captured text in the placeholder
					const fullMatch = match[0]; // The full placeholder (e.g., "<<promptId=no:...>>")

					setNewTemplate((old) => old.replace(fullMatch, extractedString));
					setExtractedStringArray((old) => [...old, extractedString]);
				});

				// Remove all "yes" placeholders for this prompt ID
				let frameExtractionRegexYes = new RegExp(
					String.raw`<<${promptId}=yes:.*?>>`,
					"gs"
				);
				setNewTemplate((old) => old.replace(frameExtractionRegexYes, ""));
			} catch {
				// Remove all "yes" placeholders if there's an error in processing
				let frameExtractionRegexYes = new RegExp(
					String.raw`<<${promptId}=yes:.*?>>`,
					"gs"
				);
				setNewTemplate((old) => old.replace(frameExtractionRegexYes, ""));
			}
		}
	};

	//OTHER EMAIL LOGIC
	const [newSubject, setNewSubject] = useState(campaign.subject);

	useEffect(() => {
		if (1 == 1) {
			campaign.prompts
				.filter((prompt) => prompt.answerType == "text")
				.map((prompt) => {
					addPrompt(prompt);
				});
			campaign.prompts
				.filter((prompt) => prompt.answerType == "yesno")
				.map((prompt) => {
					addCondition(prompt);
				});
		}
	}, []);

	const [sent, setSent] = useState(false);
	const [noClient, setNoClient] = useState(false);
	//modals
	const [isSendOpen, setIsSendOpen] = useState(false);
	const onSendClose = () => {
		setIsSendOpen(false);
		setSent(false);
    };
    const Mobile = useMediaQuery("(max-width:900px)");

    


    

    const handleSend = (prop) => {
    
        const bcc = campaign.bcc
	//check for channel, compile everything

	if (campaign.channel == "email" && prop !== "gmail" && prop !== "yahoo") {
		let sendLink = `mailto:${messaging.map(
			(targ) => targ.email + `,`
		)}?subject=${encodeURIComponent(newSubject)}&bcc=${
			bcc ? bcc : ""
		}&body=${encodeURIComponent(newTemplate)}`;

		window.open(sendLink);
	}

	if (campaign.channel == "email" && prop == "gmail") {
		let sendLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${messaging.map(
			(targ) => targ.email + `,`
		)}&su=${encodeURIComponent(newSubject)}&bcc=${
			bcc ? bcc : ""
		}&body=${encodeURIComponent(newTemplate)}`;
		window.open(sendLink);
	}

	if (campaign.channel == "email" && prop == "yahoo") {
		let sendLink = `http://compose.mail.yahoo.com/?To=${messaging.map(
			(targ) => targ.email + `,`
		)}&Subject=${encodeURIComponent(newSubject)}&bcc=${
			bcc ? bcc : ""
		}&Body=${encodeURIComponent(
			newTemplate.replace("%", "%25").replace(/\n/g, "%0A") + "%0A%0A"
		)}`;
		window.open(sendLink);
	}

	setTimeout(() => {
		//setSent(true);
	}, [2000]);

	//onSendClose();

	//setIsShareOpen(true);
};
    
	return (
		<div>
			{campaign.channel == "email" && (
				<>
					<Box
						sx={{
							position: "relative",
							marginTop: 2,

							width: "100%",
							"&:focus-within .paperBorder": {
								outline: "2px solid #3f51b5", // Color for focus state
								outlineOffset: "-2px",
							},
						}}
					>
						<label
							style={{
								fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',

								position: "absolute",
								top: "-8px",
								left: "8px",
								fontSize: "0.78rem",
								fontWeight: "320",
								color: "rgba(0,0,0,0.6)",
								backgroundColor: "#fff",
								padding: "0 5px",
								transition: "top 0.2s, font-size 0.2s, color 0.2s",
							}}
						>
							To:
						</label>

						<Paper
							sx={{
								...TextFieldStyle,
								margin: "1px 0 7px 0",
								padding: "5px",
								paddingY: "15px",
								border: "1px solid lightgray",
							}}
						>
							{messaging.map((msp) => (
								<Chip
									label={msp.name + " - " + msp.party}
									variant="outlined"
									sx={{ backgroundColor: "white", margin: "2px" }}
									onClick={() => {
										setMessaging((prev) =>
											prev.filter((prevTarget) => prevTarget.name !== msp.name)
										);
										setNotMessaging((prev) => [...prev, msp]);
									}}
									onDelete={() => {
										setMessaging((prev) =>
											prev.filter((prevTarget) => prevTarget.name !== msp.name)
										);
										setNotMessaging((prev) => [...prev, msp]);
									}}
								></Chip>
							))}

							{messaging.length == 0 && (
								<div style={{ color: "red", marginLeft: "10px" }}>
									You need to pick at least one recipient!
								</div>
							)}
						</Paper>

						{notMessaging.length > 0 && (
							<>
								<div
									style={{
										marginBottom: "5px",
									}}
								>
									<Accordion
										className="notMessaging"
										sx={{
											backgroundColor: "rgba(0, 66, 25, 0.9)",
											borderRadius: "5px !important",
										}}
									>
										<AccordionSummary
											expandIcon={<ExpandMoreIcon />}
											aria-controls="panel1a-content"
											id="details"
											sx={{
												backgroundColor: "white",
												borderRadius: "5px 5px 0 0",
												border: "1px solid lightgray",
												borderBottom: "0",
											}}
										>
											<div
												style={{
													color: "black",
												}}
											>
												You aren't messaging:
											</div>
										</AccordionSummary>
										<AccordionDetails
											sx={{
												paddingY: "10px",
												paddingX: "10px",
												marginTop: "-10px",
												backgroundColor: "white",
												borderRadius: "0 0 5px 5px",
												border: "1px solid lightgray",
											}}
										>
											<div style={{ marginLeft: "5px" }}>
												These are the recipients not included in your message.
												If you'd like to include them, just tap their name.
											</div>
											<br />
											{notMessaging.map((msp) => (
												<Chip
													size="small"
													label={msp.name + " - " + msp.party}
													variant="outlined"
													sx={{ backgroundColor: "white", margin: "2px" }}
													deleteIcon={
														<AddCircleIcon style={{ fontSize: "large" }} />
													}
													onDelete={() => {
														setNotMessaging((prev) =>
															prev.filter(
																(prevTarget) => prevTarget.name !== msp.name
															)
														);
														setMessaging((prev) => [...prev, msp]);
													}}
													onClick={() => {
														setNotMessaging((prev) =>
															prev.filter(
																(prevTarget) => prevTarget.name !== msp.name
															)
														);
														setMessaging((prev) => [...prev, msp]);
													}}
												></Chip>
											))}
										</AccordionDetails>
									</Accordion>
								</div>
							</>
						)}
					</Box>
					<TextField
						label="Subject Line"
						id="subject"
						fullWidth
						value={newSubject}
						sx={TextFieldStyle}
						onChange={(e) => setNewSubject(e.target.value)}
					/>
				</>
			)}
			{Object.values(promptAnswers).filter((str) => str !== "noOptionSelected")
				.length > 0 && (
				<span style={{ marginTop: "6px" }}>
					Make sure to check that your answers to the questions don't look odd!
				</span>
			)}

			<div style={{ position: "relative" }}>
				<div style={{}}>
					<EditableDiv
						label={campaign.channel == "email" ? "Body" : "Your Tweet"}
						body={newTemplate}
						onBodyChange={(e) => {
							//setPromptsChanged(false);
							setNewTemplate(e);
						}}
						substrings={[
							...extractedStringArray,
							...Object.values(promptAnswers),
						].filter((obj) => obj !== String)}
						promptsChanged={promptsChanged}
					/>
				</div>
			</div>

			<TextField
				id="template"
				fullWidth
				label={campaign.channel == "email" ? "Body" : "Your Tweet"}
				value={newTemplate || ""}
				multiline
				sx={{ ...TextFieldStyle, opacity: 1, display: "none" }}
				rows={10}
				onChange={(e) => setNewTemplate(e.target.value)}
				inputProps={
					campaign.channel == "twitter" && {
						maxLength: campaign.channel == "twitter" && 280,
					}
				}
			/>

			<div
				style={{
					display: "flex",
					width: "100%",
					justifyContent: "space-between",
				}}
			>
				<Button onClick={() => setStage((old) => old - 1)}>Back</Button>

				<Button
					sx={{ ...BtnStyleSmall, float: "right" }}
					onClick={() => setIsSendOpen(true)}
				>
					SEND
				</Button>
			</div>

			<SendModal
				isOpen={isSendOpen}
				onClose={() => {
					onSendClose();
					setNoClient(false);
				}}
				title={!sent ? "Send your message" : "What now?"}
				body={
					noClient ? (
						<p>
							If you don't use an email app, or the buttons on the last page
							didn't work, you can use these buttons to copy and paste the
							recipients, subject, and body of your email to whatever client you
							use:
							<br />
							<br />
							<Grid
								container
								spacing={1}
								justifyContent={"center"}
								alignContent={"center"}
							>
								<Grid item sm={4} xs={12}>
									<center>
										<Button
											sx={BtnStyleSmall}
											onClick={() =>
												navigator.clipboard.writeText(
													`${messaging.map((targ) => targ.email + `,`)}  ${
														campaign.bcc
													} `
												)
											}
										>
											Copy recipients
										</Button>
									</center>
								</Grid>

								<Grid item sm={4} xs={12}>
									<center>
										{" "}
										<Button
											sx={BtnStyleSmall}
											onClick={() => navigator.clipboard.writeText(newSubject)}
										>
											Copy subject
										</Button>
									</center>
								</Grid>
								<Grid item sm={4} xs={12}>
									<center>
										{" "}
										<Button
											sx={BtnStyleSmall}
											onClick={() => navigator.clipboard.writeText(newTemplate)}
										>
											Copy email body
										</Button>
									</center>
								</Grid>
							</Grid>
						</p>
					) : !sent ? (
						<p>
							You're almost there. Press the button below to open your{" "}
							{campaign.channel == "Email" ? "email" : "Twitter"} client, and
							the message will be pre-filled in there for you. Then just hit
							send in there to fire it off.
							<br />{" "}
							<center>
								<Button
									onClick={() => handleSend()}
									style={{ ...BtnStyle, marginTop: "5px" }}
								>
									Send {campaign.channel == "email" ? "email" : "tweet"}
								</Button>
							</center>
							{!Mobile && campaign.channel == "email" && (
								<>
									<br />
									If you use Gmail or Yahoo Mail, you can use these button to
									send the message from your browser:
									<br />
									<div
										style={{ display: "flex", justifyContent: "space-around" }}
									>
										<Button
											onClick={() => handleSend("gmail")}
											style={{ ...BtnStyle, marginTop: "5px" }}
										>
											Send via Gmail
										</Button>
										<Button
											onClick={() => handleSend("yahoo")}
											style={{ ...BtnStyle, marginTop: "5px" }}
										>
											Send via Yahoo
										</Button>
									</div>{" "}
								</>
							)}
							<br />
							<span style={{ fontSize: "12px" }}>
								<em>
									Not working?{" "}
									<span onClick={() => setNoClient(true)}>
										<u>Copy & paste instead.</u>
									</span>
								</em>
							</span>
						</p>
					) : (
						<></>
					)
				}
			/>
		</div>
	);
};

export default Message;
