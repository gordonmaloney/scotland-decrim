import React from "react";
import { useParams } from "react-router-dom";
import Campaign from "./Campaign";
import { ALL_CAMPAIGNS } from "../../Data/CampaignData";
import CampaignBlurbs from "./CampaignBlurbs";

import { Box, Paper } from "@mui/material";
import Grid from "@mui/material/Grid2";



const CampaignTopLevel = () => {
	const { campaignId } = useParams();
	const { campaign } = {
		...ALL_CAMPAIGNS.find((campaign) => campaign.campaignId == campaignId),
	};


	const GridStyle = {
		//border: "1px solid grey",
		padding: "1px 8px 12px 8px",
		backgroundColor: "rgba(255,255,255,0.5)",
		margin: "0",
	};

	if (!campaign) {
		return <div>Campaign not found</div>;
	}


	return (
		<Box
			sx={{
				flexGrow: 1,
				margin: "20px auto 0 auto",
				width: { xs: "100%", sm: "90%" },
				maxWidth: "1200px",
			}}
		>
			<h1>{campaign.title}</h1>
			<Grid container spacing={2}>
				<Grid size={{ xs: 12, sm: 6, md: 4 }}>
					<Paper sx={GridStyle}>
						<CampaignBlurbs campaign={campaign} />
					</Paper>
				</Grid>
				<Grid size={{ xs: 12, sm: 6, md: 8 }}>
					<Paper sx={GridStyle}>
						<Campaign campaign={campaign} />
					</Paper>
				</Grid>
			</Grid>
		</Box>
	);
};

export default CampaignTopLevel;
