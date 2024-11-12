import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { BtnStyle, TextFieldStyle } from "../../MUIStyles";



const FetchTarget = ({ campaign, postcode, setPostcode, adminDivisions, setAdminDivisions }) => {
	
	const [invalidPC, setInvalidPC] = useState(false);
	const [searching, setSearching] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");

	// Utility function to validate UK postcode format
	const isValidPostcode = (postcode) =>
		/^[A-Z0-9]{2,4}\s?[A-Z0-9]{3}$/i.test(postcode);

	// Fetch UK postcode data
	const fetchUKData = async (postcode) => {
		const response = await fetch(
			`https://api.postcodes.io/postcodes/${postcode}`
		);
		return response.json();
	};

	// Fetch Scotland-specific data
	const fetchScotlandData = async (postcode) => {
		const response = await fetch(
			`https://api.postcodes.io/scotland/postcodes/${postcode}`
		);
		return response.json();
	};

	// Main function to fetch postcode data
	const fetchPostcodeData = async () => {
		// Early validation for postcode format
		if (!isValidPostcode(postcode)) {
			setInvalidPC(true);
			setErrorMessage(
				"Invalid postcode format. Please enter a valid UK postcode."
			);
			return;
		}

		setSearching(true);
		setInvalidPC(false);
		setErrorMessage("");

		try {
			const uk_data = await fetchUKData(postcode);

			if (uk_data.result.country === "Scotland") {
				const scotland_data = await fetchScotlandData(postcode);
				setAdminDivisions({
					constituency: uk_data.result.parliamentary_constituency,
					ward: uk_data.result.admin_ward,
					scotConstituency:
						scotland_data.result.scottish_parliamentary_constituency,
				});
			} else {
				setAdminDivisions({
					constituency: uk_data.result.parliamentary_constituency,
					ward: uk_data.result.admin_ward,
					scotConstituency: "",
				});
			}
		} catch {
			setInvalidPC(true);
			setErrorMessage(
				"Looks like there's something wrong with your postcode. Please check or try again later."
			);
			setAdminDivisions({ ward: "", constituency: "", scotConstituency: "" });
		} finally {
			setSearching(false);
		}
	};


	return (
		<div>
			<div>
				<span style={{ fontFamily: "Fjalla One" }}>
					Enter your postcode to find your representatives:
				</span>
				<TextField
					label="Your postcode"
					style={{ ...TextFieldStyle, margin: "10px 0" }}
					fullWidth
					value={postcode}
					onChange={(e) => setPostcode(e.target.value)}
					onBlur={fetchPostcodeData}
				/>

				{/* Display error message if invalid postcode or fetch error */}
				{errorMessage && (
					<div
						style={{
							textAlign: "center",
							color: "rgba(221,28,26,1)",
						}}
					>
						{errorMessage}
						<br />
						<br />
					</div>
				)}

		
			</div>
		</div>
	);
};

export default FetchTarget;
