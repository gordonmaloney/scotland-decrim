import React from "react";
import LinkIcon from "@mui/icons-material/Link";

const CampaignBlurbs = ({ campaign }) => {
	return (
		<>
			<p>{campaign.blurb}</p>
			<a href={campaign.link} target="_blank">
				<LinkIcon fontSize="small" />
				See more
			</a>
		</>
	);
};

export default CampaignBlurbs;
