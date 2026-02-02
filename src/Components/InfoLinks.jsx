import React from "react";
import styled from "styled-components";
import { Copyright } from "@material-ui/icons";

const InfoContainer = styled.div`
	display: flex;
	align-items: center;
`;

const Info = styled.h5`
	font-size: 11px;
	margin-right: 1rem;

	@media only screen and (max-width: 55rem) {
		font-size: 9px;
	}
`;

const Link = styled.a`
	font-weight: 900;
	cursor: pointer;
	text-decoration: none;
	color: whitesmoke;

	&:hover {
		transition: color 0.2s ease-in-out;
		color: #f5cb5c;
	}
`;

const CopyrightContainer = styled.div`
	display: flex;
	font-size: 11px;
	margin-right: 1rem;

	@media only screen and (max-width: 55rem) {
		font-size: 9px;
	}

	&:hover {
		transition: color 0.2s ease-in-out;
		color: #f5cb5c;
	}
`;

const CopyrightIcon = styled(Copyright)``;

const InfoLinks = () => {
	return (
		<InfoContainer>
			<CopyrightContainer>
				<CopyrightIcon style={{ fontSize: "small" }} />
				<Link href="" style={{ fontSize: "11px" }}>
					2022 Your-site-brand
				</Link>
			</CopyrightContainer>
			<Info>
				<Link href="#">Privacy Policy</Link>
			</Info>
			<Info>
				<Link href="#">Terms & Conditions</Link>
			</Info>
			<Info>
				<Link href="#">Cookie Consent</Link>
			</Info>
			<Info>
				<Link href="#">Do Not Sell My Personal Information</Link>
			</Info>
		</InfoContainer>
	);
};

export default InfoLinks;
