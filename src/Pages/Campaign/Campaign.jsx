import React, { useState, useEffect } from "react";

import FetchTarget from "./FetchTarget";


import Prompts from "./Prompts";
import Message from "./Message";
import { Button } from "@mui/material";

const Campaign = ({campaign}) => {

	const [stage, setStage] = useState(0);
	//STAGES: 0) target/prompts | 1) message

	const [postcode, setPostcode] = useState('')

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



	return (
		<div>
			{stage == 0 && (
				<>
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
						<Button
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
						</Button>
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
