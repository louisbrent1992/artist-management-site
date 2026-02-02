import React from "react";
import styled, { keyframes } from "styled-components";
import { Icon } from "@iconify/react";
import OptimizedImage from "./OptimizedImage";

const cardEntrance = keyframes`
	from {
		opacity: 0;
		transform: translateY(30px);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
`;

const ArtistCard = styled.article`
	position: relative;
	width: 100%;
	max-width: 380px;
	height: 420px;
	border-radius: 24px;
	overflow: hidden;
	background: rgba(255, 255, 255, 0.03);
	border: 1px solid rgba(255, 255, 255, 0.08);
	cursor: pointer;
	animation: ${cardEntrance} 0.6s ease forwards;
	animation-delay: ${(props) => props.index * 0.1}s;
	opacity: 0;
	transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

	&:hover {
		transform: translateY(-8px) scale(1.02);
		border-color: rgba(168, 85, 247, 0.4);
		box-shadow: 
			0 20px 60px rgba(0, 0, 0, 0.4),
			0 0 40px rgba(168, 85, 247, 0.15);
	}
`;

const ImageContainer = styled.div`
	position: absolute;
	inset: 0;
	overflow: hidden;

	&::after {
		content: '';
		position: absolute;
		inset: 0;
		background: linear-gradient(
			180deg,
			transparent 0%,
			rgba(10, 10, 15, 0.3) 40%,
			rgba(10, 10, 15, 0.95) 100%
		);
		transition: background 0.4s ease;
	}

	${ArtistCard}:hover &::after {
		background: linear-gradient(
			180deg,
			rgba(168, 85, 247, 0.1) 0%,
			rgba(10, 10, 15, 0.4) 40%,
			rgba(10, 10, 15, 0.98) 100%
		);
	}
`;

const Image = styled(OptimizedImage)`
	width: 100%;
	height: 100%;
	object-fit: cover;
	transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);

	${ArtistCard}:hover & {
		transform: scale(1.08);
	}
`;

const Content = styled.div`
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	padding: 1.5rem;
	display: flex;
	flex-direction: column;
	gap: 0.75rem;
	z-index: 2;
`;

const GenreTag = styled.span`
	display: inline-flex;
	align-items: center;
	align-self: flex-start;
	gap: 0.4rem;
	background: rgba(168, 85, 247, 0.2);
	border: 1px solid rgba(168, 85, 247, 0.3);
	color: #a855f7;
	padding: 0.35rem 0.85rem;
	border-radius: 50px;
	font-size: 0.75rem;
	font-weight: 600;
	text-transform: uppercase;
	letter-spacing: 0.5px;
`;

const Name = styled.h3`
	font-family: 'Outfit', sans-serif;
	font-size: 1.75rem;
	font-weight: 700;
	color: white;
	margin: 0;
	line-height: 1.2;
`;

const Bio = styled.p`
	font-size: 0.9rem;
	color: rgba(255, 255, 255, 0.6);
	line-height: 1.5;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	overflow: hidden;
	margin: 0;
	opacity: 0;
	transform: translateY(10px);
	transition: all 0.3s ease;

	${ArtistCard}:hover & {
		opacity: 1;
		transform: translateY(0);
	}
`;

const ActionRow = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-top: 0.5rem;
	opacity: 0;
	transform: translateY(10px);
	transition: all 0.3s ease 0.1s;

	${ArtistCard}:hover & {
		opacity: 1;
		transform: translateY(0);
	}
`;

const SocialLinks = styled.div`
	display: flex;
	gap: 0.5rem;
`;

const SocialLink = styled.a`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 36px;
	height: 36px;
	border-radius: 10px;
	background: rgba(255, 255, 255, 0.1);
	border: 1px solid rgba(255, 255, 255, 0.1);
	color: rgba(255, 255, 255, 0.8);
	transition: all 0.3s ease;

	&:hover {
		background: rgba(168, 85, 247, 0.3);
		border-color: rgba(168, 85, 247, 0.5);
		color: white;
		transform: translateY(-2px);
	}

	svg {
		width: 18px;
		height: 18px;
	}
`;

const ViewButton = styled.a`
	display: inline-flex;
	align-items: center;
	gap: 0.5rem;
	padding: 0.6rem 1.25rem;
	background: linear-gradient(135deg, #a855f7 0%, #06b6d4 100%);
	color: white;
	border-radius: 50px;
	font-size: 0.85rem;
	font-weight: 600;
	text-decoration: none;
	transition: all 0.3s ease;

	&:hover {
		transform: translateY(-2px);
		box-shadow: 0 8px 25px rgba(168, 85, 247, 0.4);
	}
`;

const PlayBadge = styled.div`
	position: absolute;
	top: 1rem;
	right: 1rem;
	width: 48px;
	height: 48px;
	border-radius: 50%;
	background: rgba(0, 0, 0, 0.5);
	backdrop-filter: blur(10px);
	border: 1px solid rgba(255, 255, 255, 0.2);
	display: flex;
	align-items: center;
	justify-content: center;
	color: white;
	opacity: 0;
	transform: scale(0.8);
	transition: all 0.3s ease;
	z-index: 3;

	${ArtistCard}:hover & {
		opacity: 1;
		transform: scale(1);
	}

	&:hover {
		background: rgba(168, 85, 247, 0.8);
		transform: scale(1.1);
	}

	svg {
		width: 22px;
		height: 22px;
		margin-left: 2px;
	}
`;

export default function Artist({ name, genre, bio, website, img, store, social, index }) {
	return (
		<ArtistCard index={index || 0}>
			<ImageContainer>
				<Image src={img} alt={name} />
			</ImageContainer>

			<PlayBadge>
				<Icon icon="mdi:play" />
			</PlayBadge>

			<Content>
				{genre && <GenreTag>🎵 {genre}</GenreTag>}
				<Name>{name}</Name>
				{bio && <Bio>{bio}</Bio>}

				<ActionRow>
					<SocialLinks>
						{social?.Spotify?.url && (
							<SocialLink href={social.Spotify.url} target="_blank" rel="noopener noreferrer">
								<Icon icon="mdi:spotify" />
							</SocialLink>
						)}
						{social?.Instagram?.url && (
							<SocialLink href={social.Instagram.url} target="_blank" rel="noopener noreferrer">
								<Icon icon="mdi:instagram" />
							</SocialLink>
						)}
						{social?.Youtube?.url && (
							<SocialLink href={social.Youtube.url} target="_blank" rel="noopener noreferrer">
								<Icon icon="mdi:youtube" />
							</SocialLink>
						)}
					</SocialLinks>

					<ViewButton href={website} target="_blank" rel="noopener noreferrer">
						Explore
						<Icon icon="mdi:arrow-right" />
					</ViewButton>
				</ActionRow>
			</Content>
		</ArtistCard>
	);
}
