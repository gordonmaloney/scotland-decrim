import React from "react";

import { Link } from "react-router-dom";

const Header = () => {
	return (
		<div className="header">
			<h2 style={{ paddingLeft: "1.5%" }}>
				<Link to="../" style={{ textDecoration: "none", color: "inherit" }}>
					
					<img
						height="50px"
						style={{marginTop: '10px'}}
						src="https://scotlandfordecrim.org/wp-content/uploads/2024/11/Scotland-For-Decrim-Header-Logo.svg" />
				</Link>
			</h2>
		</div>
	);
};

export default Header;
