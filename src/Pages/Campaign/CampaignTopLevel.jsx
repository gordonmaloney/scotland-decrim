import React from "react";
import { useParams } from "react-router-dom";
import Campaign from "./Campaign";
import { ALL_CAMPAIGNS } from "../../Data/CampaignData";
import CampaignBlurbs from "./CampaignBlurbs";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";

const CampaignTopLevel = () => {
	const { campaignId } = useParams();
	const { campaign } = {
		...ALL_CAMPAIGNS.find((campaign) => campaign.campaignId == campaignId),
	};

	if (!campaign) {
		return <div>Campaign not found</div>;
	}
	return (
		<Box sx={{ flexGrow: 1, margin: "0 auto", width: {xs: "100%", sm: "90%"}, maxWidth: "1200px" }}>
			<h1>{campaign.title}</h1>
			<Grid container spacing={2}>
				<Grid size={{ xs: 12, sm: 6, md: 4 }}>
					<CampaignBlurbs campaign={campaign} />
				</Grid>
				<Grid size={{ xs: 12, sm: 6, md: 8 }}>
					<Campaign campaign={campaign} />
				</Grid>
			</Grid>
		</Box>
	);
};

export default CampaignTopLevel;
