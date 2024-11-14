import React from "react";

import { Paper } from "@mui/material";
import { Link } from "react-router-dom";
import {
	Card,
	CardContent,
	CardActions,
	Typography,
	Button,
} from "@mui/material";

const GridStyle = {
	//border: "1px solid grey",

	width: "100%",
	maxWidth: "600px",

	padding: "10px 8px 12px 8px",
	backgroundColor: "rgba(246, 243, 246, 0.8)",
	margin: "40px auto 0 auto",
};

const Landing = () => {
	return (
		<div>
			<Paper style={GridStyle}>
				<Card
					component="div"
					sx={{
						maxWidth: 270,
						margin: "auto",
						boxShadow: 3,
						borderRadius: 2,
						transition: "0.3s",
						"&:hover": { boxShadow: 6 },
					}}
				>
					<Link
						to="/act/timetodivest"
						style={{ textDecoration: "none", color: "inherit" }}
					>
						<CardContent>
							<h4 style={{ margin: 0 }}>Time to Divest</h4>
							<br />
							The Lothian Pension Fund invests millions of pounds of
							council-workers' money in propping up Israeli apartheid. Will you
							write to the pensions committee and demand they vote to divest?
						</CardContent>
					</Link>
				</Card>
			</Paper>
		</div>
	);
};

export default Landing;
