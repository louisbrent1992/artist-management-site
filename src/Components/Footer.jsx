import React from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const FooterContainer = styled.footer`
	width: 100%;
	background: linear-gradient(180deg, #0a0a0f 0%, #08080c 100%);
	border-top: 1px solid rgba(255, 255, 255, 0.05);
	padding: 4rem 2rem 2rem;
	position: relative;
`;

const ContentWrapper = styled.div`
	max-width: 1400px;
	margin: 0 auto;
`;

const TopSection = styled.div`
	display: grid;
	grid-template-columns: 2fr 1fr 1fr 1fr;
	gap: 3rem;
	padding-bottom: 3rem;
	border-bottom: 1px solid rgba(255, 255, 255, 0.08);

	@media only screen and (max-width: 900px) {
		grid-template-columns: 1fr 1fr;
		gap: 2rem;
	}

	@media only screen and (max-width: 600px) {
		grid-template-columns: 1fr;
		text-align: center;
	}
`;

const BrandColumn = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.5rem;

	@media only screen and (max-width: 600px) {
		align-items: center;
	}
`;

const LogoContainer = styled(Link)`
	display: flex;
	align-items: center;
	gap: 0.75rem;
	text-decoration: none;
`;

const LogoIcon = styled.div`
	width: 48px;
	height: 48px;
	background: linear-gradient(135deg, #a855f7 0%, #06b6d4 100%);
	border-radius: 14px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-weight: 900;
	font-size: 1.5rem;
	color: white;
	box-shadow: 0 4px 20px rgba(168, 85, 247, 0.3);
`;

const LogoText = styled.span`
	font-family: 'Outfit', sans-serif;
	color: white;
	font-size: 1.5rem;
	font-weight: 800;
	letter-spacing: -0.5px;
`;

const BrandDescription = styled.p`
	font-size: 0.95rem;
	color: rgba(255, 255, 255, 0.6);
	line-height: 1.7;
	max-width: 320px;

	@media only screen and (max-width: 600px) {
		max-width: none;
	}
`;

const SocialLinks = styled.div`
	display: flex;
	gap: 0.75rem;

	@media only screen and (max-width: 600px) {
		justify-content: center;
	}
`;

const SocialLink = styled.a`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 42px;
	height: 42px;
	border-radius: 12px;
	background: rgba(255, 255, 255, 0.05);
	border: 1px solid rgba(255, 255, 255, 0.08);
	color: rgba(255, 255, 255, 0.7);
	transition: all 0.3s ease;

	&:hover {
		background: rgba(168, 85, 247, 0.2);
		border-color: rgba(168, 85, 247, 0.5);
		color: #a855f7;
		transform: translateY(-3px);
	}

	svg {
		width: 20px;
		height: 20px;
	}
`;

const LinkColumn = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.25rem;
`;

const ColumnTitle = styled.h4`
	font-family: 'Outfit', sans-serif;
	font-size: 1rem;
	font-weight: 700;
	color: white;
	margin-bottom: 0.5rem;
`;

const FooterLink = styled(Link)`
	font-size: 0.9rem;
	color: rgba(255, 255, 255, 0.6);
	text-decoration: none;
	transition: all 0.3s ease;
	display: flex;
	align-items: center;
	gap: 0.5rem;

	&:hover {
		color: #a855f7;
		transform: translateX(4px);
	}

	@media only screen and (max-width: 600px) {
		justify-content: center;
	}
`;

const FooterAnchor = styled.a`
	font-size: 0.9rem;
	color: rgba(255, 255, 255, 0.6);
	text-decoration: none;
	transition: all 0.3s ease;
	display: flex;
	align-items: center;
	gap: 0.5rem;
	cursor: pointer;

	&:hover {
		color: #a855f7;
		transform: translateX(4px);
	}

	@media only screen and (max-width: 600px) {
		justify-content: center;
	}
`;

const BottomSection = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-top: 2rem;
	flex-wrap: wrap;
	gap: 1rem;

	@media only screen and (max-width: 600px) {
		flex-direction: column;
		text-align: center;
	}
`;

const Copyright = styled.p`
	font-size: 0.85rem;
	color: rgba(255, 255, 255, 0.4);
`;

const LegalLinks = styled.div`
	display: flex;
	gap: 2rem;
	flex-wrap: wrap;

	@media only screen and (max-width: 600px) {
		justify-content: center;
		gap: 1.5rem;
	}
`;

const LegalLink = styled.a`
	font-size: 0.85rem;
	color: rgba(255, 255, 255, 0.4);
	text-decoration: none;
	transition: color 0.3s ease;

	&:hover {
		color: #a855f7;
	}
`;

const BackToTop = styled.button`
	position: fixed;
	bottom: 2rem;
	right: 2rem;
	width: 48px;
	height: 48px;
	border-radius: 50%;
	background: linear-gradient(135deg, #a855f7 0%, #06b6d4 100%);
	border: none;
	color: white;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	box-shadow: 0 8px 30px rgba(168, 85, 247, 0.4);
	transition: all 0.3s ease;
	z-index: 50;

	&:hover {
		transform: translateY(-3px);
		box-shadow: 0 12px 40px rgba(168, 85, 247, 0.6);
	}

	svg {
		width: 24px;
		height: 24px;
	}
`;

export default function Footer({ social }) {
	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<>
			<FooterContainer>
				<ContentWrapper>
					<TopSection>
						<BrandColumn>
							<LogoContainer to="/">
								<LogoIcon>P</LogoIcon>
								<LogoText>Pulse Records</LogoText>
							</LogoContainer>
							<BrandDescription>
								Home of tomorrow's sound. We discover, develop, and
								amplify visionary artists who are shaping the future of music.
							</BrandDescription>
							<SocialLinks>
								{social?.Spotify?.url && (
									<SocialLink href={social.Spotify.url} target="_blank" rel="noopener noreferrer" aria-label="Spotify">
										<Icon icon="mdi:spotify" />
									</SocialLink>
								)}
								{social?.Instagram?.url && (
									<SocialLink href={social.Instagram.url} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
										<Icon icon="mdi:instagram" />
									</SocialLink>
								)}
								{social?.Youtube?.url && (
									<SocialLink href={social.Youtube.url} target="_blank" rel="noopener noreferrer" aria-label="YouTube">
										<Icon icon="mdi:youtube" />
									</SocialLink>
								)}
								{social?.Twitter?.url && (
									<SocialLink href={social.Twitter.url} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
										<Icon icon="mdi:twitter" />
									</SocialLink>
								)}
								{social?.Facebook?.url && (
									<SocialLink href={social.Facebook.url} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
										<Icon icon="mdi:facebook" />
									</SocialLink>
								)}
							</SocialLinks>
						</BrandColumn>

						<LinkColumn>
							<ColumnTitle>Explore</ColumnTitle>
							<FooterAnchor href="#artists">Artists</FooterAnchor>
							<FooterAnchor href="#releases">Releases</FooterAnchor>
							<FooterAnchor href="#videos">Videos</FooterAnchor>
							<FooterLink to="/store">Merch Store</FooterLink>
						</LinkColumn>

						<LinkColumn>
							<ColumnTitle>Company</ColumnTitle>
							<FooterLink to="/about">About Us</FooterLink>
							<FooterLink to="/careers">Careers</FooterLink>
							<FooterLink to="/press">Press</FooterLink>
							<FooterLink to="/contact">Contact</FooterLink>
						</LinkColumn>

						<LinkColumn>
							<ColumnTitle>Support</ColumnTitle>
							<FooterLink to="/demos">Submit Demo</FooterLink>
							<FooterLink to="/faq">FAQ</FooterLink>
							<FooterLink to="/licensing">Licensing</FooterLink>
							<FooterLink to="/help">Help Center</FooterLink>
						</LinkColumn>
					</TopSection>

					<BottomSection>
						<Copyright>
							© {new Date().getFullYear()} Pulse Records. All rights reserved.
						</Copyright>
						<LegalLinks>
							<LegalLink href="/privacy">Privacy Policy</LegalLink>
							<LegalLink href="/terms">Terms of Service</LegalLink>
							<LegalLink href="/cookies">Cookie Policy</LegalLink>
						</LegalLinks>
					</BottomSection>
				</ContentWrapper>
			</FooterContainer>

			<BackToTop onClick={scrollToTop} aria-label="Back to top">
				<Icon icon="mdi:chevron-up" />
			</BackToTop>
		</>
	);
}
