import React from "react";
import styled, { keyframes } from "styled-components";
import { Icon } from "@iconify/react";
import { newReleases } from "../data/data";
import OptimizedImage from "./OptimizedImage";

const fadeInUp = keyframes`
	from {
		opacity: 0;
		transform: translateY(30px);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
`;

const Container = styled.section`
	width: 100%;
	min-height: 100vh;
	background: linear-gradient(180deg, #12121a 0%, #0a0a0f 100%);
	padding: 6rem 2rem;
	position: relative;
	overflow: hidden;

	&::before {
		content: '';
		position: absolute;
		top: 20%;
		left: -10%;
		width: 500px;
		height: 500px;
		background: radial-gradient(circle, rgba(244, 63, 94, 0.08) 0%, transparent 70%);
		pointer-events: none;
	}
`;

const ContentWrapper = styled.div`
	max-width: 1400px;
	margin: 0 auto;
`;

const Header = styled.div`
	text-align: center;
	margin-bottom: 4rem;
	animation: ${fadeInUp} 0.8s ease forwards;
`;

const Eyebrow = styled.span`
	display: inline-flex;
	align-items: center;
	gap: 0.5rem;
	background: rgba(244, 63, 94, 0.15);
	border: 1px solid rgba(244, 63, 94, 0.3);
	color: #f43f5e;
	padding: 0.5rem 1.25rem;
	border-radius: 50px;
	font-size: 0.85rem;
	font-weight: 600;
	text-transform: uppercase;
	letter-spacing: 1.5px;
	margin-bottom: 1.5rem;
`;

const Title = styled.h2`
	font-family: 'Outfit', sans-serif;
	font-size: clamp(2.5rem, 5vw, 4rem);
	font-weight: 800;
	background: linear-gradient(135deg, #ffffff 0%, rgba(255, 255, 255, 0.7) 100%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	background-clip: text;
	margin-bottom: 1rem;
`;

const Subtitle = styled.p`
	font-size: 1.15rem;
	color: rgba(255, 255, 255, 0.6);
	max-width: 600px;
	margin: 0 auto;
	line-height: 1.7;
`;

const ReleasesGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
	gap: 2rem;

	@media only screen and (max-width: 768px) {
		grid-template-columns: 1fr;
		gap: 1.5rem;
	}
`;

const ReleaseCard = styled.article`
	position: relative;
	background: rgba(255, 255, 255, 0.03);
	border: 1px solid rgba(255, 255, 255, 0.08);
	border-radius: 24px;
	overflow: hidden;
	transition: all 0.4s ease;
	cursor: pointer;

	&:hover {
		transform: translateY(-8px);
		border-color: rgba(244, 63, 94, 0.4);
		box-shadow: 
			0 20px 50px rgba(0, 0, 0, 0.4),
			0 0 30px rgba(244, 63, 94, 0.1);
	}
`;

const ImageContainer = styled.div`
	position: relative;
	aspect-ratio: 1;
	overflow: hidden;

	&::after {
		content: '';
		position: absolute;
		inset: 0;
		background: linear-gradient(
			180deg,
			transparent 60%,
			rgba(10, 10, 15, 0.9) 100%
		);
	}
`;

const Image = styled(OptimizedImage)`
	width: 100%;
	height: 100%;
	object-fit: cover;
	transition: transform 0.6s ease;

	${ReleaseCard}:hover & {
		transform: scale(1.08);
	}
`;

const TypeBadge = styled.span`
	position: absolute;
	top: 1rem;
	left: 1rem;
	background: ${(props) => {
		switch (props.type) {
			case "Album":
				return "rgba(168, 85, 247, 0.9)";
			case "Single":
				return "rgba(6, 182, 212, 0.9)";
			case "Merch":
				return "rgba(251, 191, 36, 0.9)";
			default:
				return "rgba(244, 63, 94, 0.9)";
		}
	}};
	color: white;
	padding: 0.4rem 0.85rem;
	border-radius: 50px;
	font-size: 0.75rem;
	font-weight: 700;
	text-transform: uppercase;
	letter-spacing: 0.5px;
	z-index: 2;
`;

const PlayOverlay = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%) scale(0.8);
	width: 70px;
	height: 70px;
	border-radius: 50%;
	background: rgba(244, 63, 94, 0.9);
	display: flex;
	align-items: center;
	justify-content: center;
	color: white;
	opacity: 0;
	transition: all 0.3s ease;
	z-index: 2;
	box-shadow: 0 8px 30px rgba(244, 63, 94, 0.4);

	svg {
		width: 28px;
		height: 28px;
		margin-left: 3px;
	}

	${ReleaseCard}:hover & {
		opacity: 1;
		transform: translate(-50%, -50%) scale(1);
	}
`;

const Content = styled.div`
	padding: 1.5rem;
`;

const ReleaseTitle = styled.h3`
	font-family: 'Outfit', sans-serif;
	font-size: 1.25rem;
	font-weight: 700;
	color: white;
	margin: 0 0 0.25rem 0;
`;

const ArtistName = styled.p`
	font-size: 0.95rem;
	color: rgba(255, 255, 255, 0.6);
	margin: 0 0 1rem 0;
`;

const GenreTag = styled.span`
	display: inline-block;
	background: rgba(255, 255, 255, 0.05);
	border: 1px solid rgba(255, 255, 255, 0.1);
	color: rgba(255, 255, 255, 0.7);
	padding: 0.3rem 0.75rem;
	border-radius: 50px;
	font-size: 0.75rem;
	margin-right: 0.5rem;
	margin-bottom: 1rem;
`;

const StreamingLinks = styled.div`
	display: flex;
	gap: 0.5rem;
	margin-top: 1rem;
	padding-top: 1rem;
	border-top: 1px solid rgba(255, 255, 255, 0.08);
`;

const StreamLink = styled.a`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 40px;
	height: 40px;
	border-radius: 10px;
	background: rgba(255, 255, 255, 0.05);
	border: 1px solid rgba(255, 255, 255, 0.1);
	color: rgba(255, 255, 255, 0.7);
	transition: all 0.3s ease;

	&:hover {
		background: ${(props) => props.color || "rgba(244, 63, 94, 0.3)"};
		border-color: ${(props) => props.borderColor || "rgba(244, 63, 94, 0.5)"};
		color: white;
		transform: translateY(-2px);
	}

	svg {
		width: 20px;
		height: 20px;
	}
`;

const Price = styled.div`
	font-family: 'Outfit', sans-serif;
	font-size: 1.5rem;
	font-weight: 700;
	color: #fbbf24;
	margin-top: 0.5rem;
`;

const ButtonWrapper = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 3rem;
`;

const ViewAllButton = styled.a`
	display: inline-flex;
	align-items: center;
	gap: 0.75rem;
	padding: 1rem 2.5rem;
	background: transparent;
	border: 2px solid rgba(244, 63, 94, 0.5);
	color: #f43f5e;
	border-radius: 50px;
	font-weight: 600;
	font-size: 1rem;
	text-decoration: none;
	transition: all 0.3s ease;
	cursor: pointer;

	&:hover {
		background: rgba(244, 63, 94, 0.15);
		border-color: #f43f5e;
		transform: translateY(-2px);
		box-shadow: 0 8px 30px rgba(244, 63, 94, 0.3);
	}
`;

export default function NewReleases() {
	return (
		<Container id="releases">
			<ContentWrapper>
				<Header>
					<Eyebrow>🔥 Fresh Drops</Eyebrow>
					<Title>New Releases</Title>
					<Subtitle>
						The latest albums, singles, and exclusive merchandise
						from our roster of incredible artists.
					</Subtitle>
				</Header>

				<ReleasesGrid>
					{newReleases.map((release) => (
						<ReleaseCard key={release.id}>
							<ImageContainer>
								<Image src={release.img} alt={release.title} />
								<TypeBadge type={release.type}>{release.type}</TypeBadge>
								{release.type !== "Merch" && (
									<PlayOverlay>
										<Icon icon="mdi:play" />
									</PlayOverlay>
								)}
							</ImageContainer>

							<Content>
								<ReleaseTitle>{release.title}</ReleaseTitle>
								<ArtistName>{release.artist}</ArtistName>

								{release.genre && <GenreTag>{release.genre}</GenreTag>}

								{release.price && (
									<Price>${release.price.toFixed(2)}</Price>
								)}

								{release.streamingLinks && (
									<StreamingLinks>
										{release.streamingLinks.spotify && (
											<StreamLink
												href={release.streamingLinks.spotify}
												target="_blank"
												color="rgba(30, 215, 96, 0.3)"
												borderColor="rgba(30, 215, 96, 0.5)"
											>
												<Icon icon="mdi:spotify" />
											</StreamLink>
										)}
										{release.streamingLinks.appleMusic && (
											<StreamLink
												href={release.streamingLinks.appleMusic}
												target="_blank"
												color="rgba(252, 60, 68, 0.3)"
												borderColor="rgba(252, 60, 68, 0.5)"
											>
												<Icon icon="simple-icons:applemusic" />
											</StreamLink>
										)}
										{release.streamingLinks.youtube && (
											<StreamLink
												href={release.streamingLinks.youtube}
												target="_blank"
												color="rgba(255, 0, 0, 0.3)"
												borderColor="rgba(255, 0, 0, 0.5)"
											>
												<Icon icon="mdi:youtube" />
											</StreamLink>
										)}
									</StreamingLinks>
								)}
							</Content>
						</ReleaseCard>
					))}
				</ReleasesGrid>

				<ButtonWrapper>
					<ViewAllButton href="/releases">
						View All Releases
						<Icon icon="mdi:arrow-right" />
					</ViewAllButton>
				</ButtonWrapper>
			</ContentWrapper>
		</Container>
	);
}
