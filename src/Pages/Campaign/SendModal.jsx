import React, {useState} from "react";
import { Modal, Button, Box, Tooltip } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { BtnStyle, BtnStyleSmall } from "../../MUIStyles";
import Grid from "@mui/material/Grid2";

const ModalStyle = {
	position: "absolute",
	fontFamily: "var(--font)",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: "500px",
	height: "auto",
	maxWidth: "90vw",
	margin: "0 auto",
	padding: "15px",
	backgroundColor: "#F6F3F6",
	borderRadius: "15px",
	backdropFilter: "blur(5px)",
};

export const SendModal = ({
	isOpen,
	onClose,
	title,
	body,
	campaign,
	messaging,
	newTemplate,
	newSubject,
	Mobile,
	noClient,
	setNoClient,
	setSent,
	sent,
	copyIn,
}) => {
	const handleSend = (prop) => {
		const bcc = campaign.bcc;
		//check for channel, compile everything

		if (campaign.channel == "email" && prop !== "gmail" && prop !== "yahoo") {
			let sendLink = `mailto:${messaging.map(
				(targ) => targ.email + `,`
			)}?subject=${encodeURIComponent(newSubject)}&bcc=${
				bcc && copyIn ? bcc : ""
			}&body=${encodeURIComponent(newTemplate)}`;

			window.open(sendLink);
		}

		if (campaign.channel == "email" && prop == "gmail") {
			let sendLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${messaging.map(
				(targ) => targ.email + `,`
			)}&su=${encodeURIComponent(newSubject)}&bcc=${
				bcc && copyIn ? bcc : ""
			}&body=${encodeURIComponent(newTemplate)}`;
			window.open(sendLink);
		}

		if (campaign.channel == "email" && prop == "yahoo") {
			let sendLink = `http://compose.mail.yahoo.com/?To=${messaging.map(
				(targ) => targ.email + `,`
			)}&Subject=${encodeURIComponent(newSubject)}&bcc=${
				bcc && copyIn ? bcc : ""
			}&Body=${encodeURIComponent(
				newTemplate.replace("%", "%25").replace(/\n/g, "%0A") + "%0A%0A"
			)}`;
			window.open(sendLink);
		}

		setTimeout(() => {
			setSent(true);
		}, [2000]);

		//onSendClose();

		//setIsShareOpen(true);
	};

	const [copied, setCopied] = useState(false);

	const handleCopy = async () => {
		try {
			// Copy the current page URL to the clipboard
			await navigator.clipboard.writeText(window.location.href);
			// Show the tooltip with "Copied" message
			setCopied(true);
			// Hide the tooltip after 3 seconds
			setTimeout(() => {
				setCopied(false);
			}, 2000);
		} catch (err) {
			console.error("Failed to copy: ", err);
		}
	};
	return (
		<Modal open={isOpen} onClose={onClose}>
			<Box style={ModalStyle}>
				<span style={{ float: "right", cursor: "pointer" }} onClick={onClose}>
					<CloseIcon />
				</span>

				<h1 style={{ margin: "0 0 12px 0" }}>
					{sent ? "What now?" : "Send your message"}
				</h1>

				{noClient ? (
					<>
						<p>
							If you don't use an email app, or the buttons on the last page
							didn't work, you can use these buttons to copy and paste the
							recipients, subject, and body of your email to whatever client you
							use:
						</p>
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
												}`
											)
										}
									>
										Copy recipients
									</Button>
								</center>
							</Grid>

							<Grid item sm={4} xs={12}>
								<center>
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
									<Button
										sx={BtnStyleSmall}
										onClick={() => navigator.clipboard.writeText(newTemplate)}
									>
										Copy email body
									</Button>
								</center>
							</Grid>
						</Grid>
					</>
				) : !sent ? (
					<>
						<p>
							You're almost there. Press the button below to open your{" "}
							{campaign.channel === "email" ? "email" : "Twitter"} client, and
							the message will be pre-filled in there for you. Then just hit
							send in there to fire it off.
						</p>
						<center>
							<Button
								onClick={() => handleSend()}
								style={{ ...BtnStyle, marginTop: "5px" }}
							>
								Send {campaign.channel === "email" ? "email" : "tweet"}
							</Button>
						</center>
						{!Mobile && campaign.channel === "email" && (
							<>
								<br />
								<p>
									If you use Gmail or Yahoo Mail, you can use these buttons to
									send the message from your browser:
								</p>
								<div
									style={{ display: "flex", justifyContent: "space-around" }}
								>
									<Button
										onClick={() => handleSend("gmail")}
										style={{ ...BtnStyleSmall, marginTop: "5px" }}
									>
										Send via Gmail
									</Button>
									<Button
										onClick={() => handleSend("yahoo")}
										style={{ ...BtnStyleSmall, marginTop: "5px" }}
									>
										Send via Yahoo
									</Button>
								</div>
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
					</>
				) : (
					<>
						<p>
							Nice one! Will you now{" "}
							<b>take a moment to share the campaign with a few friends?</b> You
							can use the buttons below:
						</p>
						<div style={{ display: "flex", justifyContent: "space-around" }}>
							<Button
								sx={BtnStyle}
								target="_blank"
								href={`http://wa.me/?text=${encodeURI(
									"Hey! I've just taken part in this campaign - check it out here: " +
										campaign.title +
										" " +
										window.location.href
								)}`}
							>
								Share on WhatsApp
							</Button>
							<Button
								sx={BtnStyle}
								target="_blank"
								href={`https://bsky.app/intent/compose?text=${encodeURI(
									campaign.title + " " + window.location.href
								)}`}
							>
								Share on BlueSky
							</Button>
						</div>

						<p>
							You can also just{" "}
							<Tooltip
								open={copied}
								title="Copied"
								disableHoverListener
								disableFocusListener
								disableTouchListener
								placement="top"
								PopperProps={{
									modifiers: [
										{
											name: "offset",
											options: {
												offset: [0, -14], // Adjust the second value to move tooltip closer/further
											},
										},
									],
								}}
							>
								<span
									onClick={handleCopy}
									style={{
										cursor: "pointer",
										color: "inherit",
										textDecoration: "underline",
									}}
								>
									click here
								</span>
							</Tooltip>{" "}
							to copy the link and share it with your friends!
						</p>

						<span style={{ fontSize: "12px" }}>
							<em>
								Didn't work? If your email client didn't open, you can use{" "}
								<span onClick={() => setNoClient(true)}>
									<u>copy & paste instead.</u>
								</span>
							</em>
						</span>
					</>
				)}

				<center>
					<Button
						sx={{ ...BtnStyle, transform: "scale(0.8)", marginTop: "5px" }}
						onClick={onClose}
					>
						Close
					</Button>
				</center>
			</Box>
		</Modal>
	);
};