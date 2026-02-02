import React, { useState, useEffect } from "react";
import styled, { keyframes, css } from "styled-components";
import NavbarLinks from "./NavbarLinks";
import SocialIcons from "./SocialIcons";
import { Link } from "react-router-dom";



const slideDown = keyframes`
	from {
		opacity: 0;
		transform: translateY(-20px);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
`;

const NavbarContainer = styled.nav`
	width: 100%;
	height: ${(props) => (props.extendNavbar ? "100vh" : "80px")};
	background: ${(props) =>
		props.scrolled
			? "rgba(10, 10, 15, 0.85)"
			: props.extendNavbar
				? "rgba(10, 10, 15, 0.95)"
				: "transparent"};
	backdrop-filter: ${(props) => (props.scrolled || props.extendNavbar) && "blur(20px)"};
	-webkit-backdrop-filter: ${(props) => (props.scrolled || props.extendNavbar) && "blur(20px)"};
	border-bottom: ${(props) =>
		props.scrolled ? "1px solid rgba(255, 255, 255, 0.08)" : "none"};
	display: flex;
	flex-direction: column;
	align-items: center;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 100;
	transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
`;

const NavbarInnerContainer = styled.div`
	width: 100%;
	max-width: 1400px;
	height: 80px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 2rem;
	margin: 0 auto;

	@media only screen and (max-width: 64rem) {
		padding: 0 1.5rem;
	}
`;

const LogoContainer = styled(Link)`
	text-decoration: none;
	display: flex;
	align-items: center;
	gap: 0.75rem;
	position: relative;
	z-index: 10;
`;

const LogoIcon = styled.div`
	width: 42px;
	height: 42px;
	background: linear-gradient(135deg, #a855f7 0%, #06b6d4 100%);
	border-radius: 12px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-weight: 900;
	font-size: 1.25rem;
	color: white;
	box-shadow: 0 4px 20px rgba(168, 85, 247, 0.4);
	transition: transform 0.3s ease, box-shadow 0.3s ease;

	${LogoContainer}:hover & {
		transform: rotate(-5deg) scale(1.05);
		box-shadow: 0 6px 30px rgba(168, 85, 247, 0.6);
	}
`;

const LogoText = styled.span`
	font-family: 'Outfit', sans-serif;
	color: white;
	font-size: 1.5rem;
	font-weight: 800;
	letter-spacing: -0.5px;
	background: linear-gradient(135deg, #ffffff 0%, rgba(255, 255, 255, 0.8) 100%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	background-clip: text;

	@media only screen and (max-width: 480px) {
		display: none;
	}
`;

const NavCenter = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;

	@media only screen and (max-width: 64rem) {
		display: none;
	}
`;

const NavRight = styled.div`
	display: flex;
	align-items: center;
	gap: 1.5rem;

	@media only screen and (max-width: 64rem) {
		gap: 1rem;
	}
`;

const CTAButton = styled.a`
	background: linear-gradient(135deg, #a855f7 0%, #06b6d4 100%);
	color: white;
	padding: 0.65rem 1.5rem;
	border-radius: 50px;
	font-weight: 600;
	font-size: 0.9rem;
	text-decoration: none;
	transition: all 0.3s ease;
	box-shadow: 0 4px 15px rgba(168, 85, 247, 0.3);
	position: relative;
	overflow: hidden;

	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: -100%;
		width: 100%;
		height: 100%;
		background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
		transition: left 0.5s ease;
	}

	&:hover {
		transform: translateY(-2px);
		box-shadow: 0 6px 25px rgba(168, 85, 247, 0.5);

		&::before {
			left: 100%;
		}
	}

	@media only screen and (max-width: 64rem) {
		display: none;
	}
`;

const MenuButton = styled.button`
	display: none;
	background: rgba(255, 255, 255, 0.05);
	border: 1px solid rgba(255, 255, 255, 0.1);
	border-radius: 12px;
	width: 48px;
	height: 48px;
	cursor: pointer;
	position: relative;
	transition: all 0.3s ease;

	&:hover {
		background: rgba(255, 255, 255, 0.1);
		border-color: rgba(168, 85, 247, 0.5);
	}

	@media only screen and (max-width: 64rem) {
		display: flex;
		align-items: center;
		justify-content: center;
	}
`;

const MenuIcon = styled.div`
	width: 22px;
	height: 2px;
	background: white;
	border-radius: 2px;
	position: relative;
	transition: all 0.3s ease;

	${(props) =>
		props.isOpen &&
		css`
			background: transparent;
		`}

	&::before,
	&::after {
		content: '';
		position: absolute;
		width: 22px;
		height: 2px;
		background: white;
		border-radius: 2px;
		transition: all 0.3s ease;
	}

	&::before {
		top: -7px;
		${(props) =>
		props.isOpen &&
		css`
				top: 0;
				transform: rotate(45deg);
			`}
	}

	&::after {
		bottom: -7px;
		${(props) =>
		props.isOpen &&
		css`
				bottom: 0;
				transform: rotate(-45deg);
			`}
	}
`;

const MobileMenu = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 2rem;
	padding: 2rem;
	animation: ${slideDown} 0.4s ease forwards;
	width: 100%;
	flex: 1;

	@media only screen and (min-width: 64rem) {
		display: none;
	}
`;

const MobileNavLink = styled(Link)`
	font-family: 'Outfit', sans-serif;
	color: white;
	font-size: 1.75rem;
	font-weight: 600;
	text-decoration: none;
	position: relative;
	transition: all 0.3s ease;

	&::after {
		content: '';
		position: absolute;
		bottom: -4px;
		left: 0;
		width: 0;
		height: 3px;
		background: linear-gradient(90deg, #a855f7, #06b6d4);
		border-radius: 2px;
		transition: width 0.3s ease;
	}

	&:hover {
		color: #a855f7;

		&::after {
			width: 100%;
		}
	}
`;

const MobileAnchor = styled.a`
	font-family: 'Outfit', sans-serif;
	color: white;
	font-size: 1.75rem;
	font-weight: 600;
	text-decoration: none;
	position: relative;
	transition: all 0.3s ease;
	cursor: pointer;

	&::after {
		content: '';
		position: absolute;
		bottom: -4px;
		left: 0;
		width: 0;
		height: 3px;
		background: linear-gradient(90deg, #a855f7, #06b6d4);
		border-radius: 2px;
		transition: width 0.3s ease;
	}

	&:hover {
		color: #a855f7;

		&::after {
			width: 100%;
		}
	}
`;

const MobileSocialContainer = styled.div`
	margin-top: 1rem;
	padding-top: 2rem;
	border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const MobileCTA = styled.a`
	background: linear-gradient(135deg, #a855f7 0%, #06b6d4 100%);
	color: white;
	padding: 1rem 3rem;
	border-radius: 50px;
	font-weight: 600;
	font-size: 1.1rem;
	text-decoration: none;
	margin-top: 1rem;
	box-shadow: 0 4px 20px rgba(168, 85, 247, 0.4);
`;

export default function Navbar({ social }) {
	const [extendNavbar, setExtendNavbar] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 50);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const closeMenu = () => setExtendNavbar(false);

	return (
		<NavbarContainer extendNavbar={extendNavbar} scrolled={scrolled}>
			<NavbarInnerContainer>
				<LogoContainer to="/" onClick={closeMenu}>
					<LogoIcon>P</LogoIcon>
					<LogoText>Pulse Records</LogoText>
				</LogoContainer>

				<NavCenter>
					<NavbarLinks />
				</NavCenter>

				<NavRight>
					{!extendNavbar && <SocialIcons social={social} />}
					<CTAButton href="#signup">Subscribe</CTAButton>
					<MenuButton
						onClick={() => setExtendNavbar((curr) => !curr)}
						aria-label="Toggle menu"
					>
						<MenuIcon isOpen={extendNavbar} />
					</MenuButton>
				</NavRight>
			</NavbarInnerContainer>

			{extendNavbar && (
				<MobileMenu>
					<MobileNavLink to="/" onClick={closeMenu}>Home</MobileNavLink>
					<MobileAnchor href="#artists" onClick={closeMenu}>Artists</MobileAnchor>
					<MobileAnchor href="#videos" onClick={closeMenu}>Videos</MobileAnchor>
					<MobileAnchor href="#releases" onClick={closeMenu}>Releases</MobileAnchor>
					<MobileNavLink to="/store" onClick={closeMenu}>Store</MobileNavLink>
					<MobileCTA href="#signup" onClick={closeMenu}>Subscribe</MobileCTA>
					<MobileSocialContainer>
						<SocialIcons social={social} />
					</MobileSocialContainer>
				</MobileMenu>
			)}
		</NavbarContainer>
	);
}
