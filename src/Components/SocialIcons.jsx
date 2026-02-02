import React from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react";

const SocialContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;

	@media only screen and (max-width: 64rem) {
		display: none;
	}
`;

const SocialIconWrapper = styled.a`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 36px;
	height: 36px;
	border-radius: 10px;
	background: rgba(255, 255, 255, 0.05);
	border: 1px solid rgba(255, 255, 255, 0.08);
	color: rgba(255, 255, 255, 0.7);
	text-decoration: none;
	transition: all 0.3s ease;
	cursor: pointer;

	&:hover {
		background: rgba(168, 85, 247, 0.2);
		border-color: rgba(168, 85, 247, 0.5);
		color: #a855f7;
		transform: translateY(-2px);
	}

	svg {
		width: 18px;
		height: 18px;
	}
`;

const SocialIcons = ({ social }) => {
	if (!social) return null;

	const {
		Youtube,
		Instagram: instagram,
		Facebook: facebook,
		Twitter: twitter,
		Spotify: spotify,
	} = social;

	return (
		<SocialContainer>
			{spotify?.url && (
				<SocialIconWrapper href={spotify.url} target="_blank" rel="noopener noreferrer" aria-label="Spotify">
					<Icon icon="mdi:spotify" />
				</SocialIconWrapper>
			)}
			{instagram?.url && (
				<SocialIconWrapper href={instagram.url} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
					<Icon icon="mdi:instagram" />
				</SocialIconWrapper>
			)}
			{Youtube?.url && (
				<SocialIconWrapper href={Youtube.url} target="_blank" rel="noopener noreferrer" aria-label="YouTube">
					<Icon icon="mdi:youtube" />
				</SocialIconWrapper>
			)}
			{twitter?.url && (
				<SocialIconWrapper href={twitter.url} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
					<Icon icon="mdi:twitter" />
				</SocialIconWrapper>
			)}
			{facebook?.url && (
				<SocialIconWrapper href={facebook.url} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
					<Icon icon="mdi:facebook" />
				</SocialIconWrapper>
			)}
		</SocialContainer>
	);
};

export default SocialIcons;
