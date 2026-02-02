import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavbarLinkContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 0.25rem;

	@media only screen and (max-width: 64rem) {
		display: none;
	}
`;

const NavbarLink = styled(Link)`
	color: rgba(255, 255, 255, 0.7);
	font-family: 'Inter', sans-serif;
	font-size: 0.95rem;
	font-weight: 500;
	text-decoration: none;
	padding: 0.5rem 1rem;
	border-radius: 8px;
	transition: all 0.3s ease;
	position: relative;

	&::after {
		content: '';
		position: absolute;
		bottom: 4px;
		left: 50%;
		transform: translateX(-50%);
		width: 0;
		height: 2px;
		background: linear-gradient(90deg, #a855f7, #06b6d4);
		border-radius: 1px;
		transition: width 0.3s ease;
	}

	&:hover {
		color: white;
		background: rgba(255, 255, 255, 0.05);

		&::after {
			width: 60%;
		}
	}
`;

const NavbarAnchor = styled.a`
	color: rgba(255, 255, 255, 0.7);
	font-family: 'Inter', sans-serif;
	font-size: 0.95rem;
	font-weight: 500;
	text-decoration: none;
	padding: 0.5rem 1rem;
	border-radius: 8px;
	transition: all 0.3s ease;
	position: relative;
	cursor: pointer;

	&::after {
		content: '';
		position: absolute;
		bottom: 4px;
		left: 50%;
		transform: translateX(-50%);
		width: 0;
		height: 2px;
		background: linear-gradient(90deg, #a855f7, #06b6d4);
		border-radius: 1px;
		transition: width 0.3s ease;
	}

	&:hover {
		color: white;
		background: rgba(255, 255, 255, 0.05);

		&::after {
			width: 60%;
		}
	}
`;

const NavbarLinks = () => (
	<NavbarLinkContainer>
		<NavbarLink to="/">Home</NavbarLink>
		<NavbarAnchor href="#artists">Artists</NavbarAnchor>
		<NavbarAnchor href="#videos">Videos</NavbarAnchor>
		<NavbarAnchor href="#releases">Releases</NavbarAnchor>
		<NavbarLink to="/store">Store</NavbarLink>
	</NavbarLinkContainer>
);

export default NavbarLinks;
