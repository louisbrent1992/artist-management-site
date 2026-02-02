import React from "react";
import styled, { keyframes } from "styled-components";
import Artist from "./Artist";

const fadeInUp = keyframes`
	from {
		opacity: 0;
		transform: translateY(40px);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
`;

const Container = styled.section`
	min-height: 100vh;
	width: 100%;
	background: linear-gradient(180deg, #0a0a0f 0%, #12121a 50%, #0a0a0f 100%);
	padding: 6rem 2rem;
	position: relative;
	overflow: hidden;

	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 50%;
		transform: translateX(-50%);
		width: 100%;
		max-width: 1000px;
		height: 500px;
		background: radial-gradient(ellipse at center, rgba(168, 85, 247, 0.1) 0%, transparent 70%);
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
	background: rgba(168, 85, 247, 0.15);
	border: 1px solid rgba(168, 85, 247, 0.3);
	color: #a855f7;
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

const ArtistsGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
	gap: 2rem;
	justify-items: center;

	@media only screen and (max-width: 768px) {
		grid-template-columns: 1fr;
		gap: 1.5rem;
	}
`;

const ViewAllButton = styled.a`
	display: inline-flex;
	align-items: center;
	gap: 0.75rem;
	margin-top: 4rem;
	padding: 1rem 2.5rem;
	background: transparent;
	border: 2px solid rgba(168, 85, 247, 0.5);
	color: #a855f7;
	border-radius: 50px;
	font-weight: 600;
	font-size: 1rem;
	text-decoration: none;
	transition: all 0.3s ease;
	cursor: pointer;

	&:hover {
		background: rgba(168, 85, 247, 0.15);
		border-color: #a855f7;
		transform: translateY(-2px);
		box-shadow: 0 8px 30px rgba(168, 85, 247, 0.3);
	}
`;

const ButtonWrapper = styled.div`
	display: flex;
	justify-content: center;
`;

export default function ArtistsCollage({ labelArtists }) {
	return (
		<Container id="artists">
			<ContentWrapper>
				<Header>
					<Eyebrow>🎤 The Roster</Eyebrow>
					<Title>Meet Our Artists</Title>
					<Subtitle>
						Discover the visionary talent shaping the future of music.
						From electronic pioneers to indie sensations.
					</Subtitle>
				</Header>

				<ArtistsGrid>
					{labelArtists.map((artist, index) => (
						<Artist
							key={artist.id}
							name={artist.name}
							genre={artist.genre}
							bio={artist.bio}
							website={artist.website}
							img={artist.img}
							store={artist.store}
							social={artist.social}
							index={index}
						/>
					))}
				</ArtistsGrid>

				<ButtonWrapper>
					<ViewAllButton href="/artists">
						View All Artists
						<span>→</span>
					</ViewAllButton>
				</ButtonWrapper>
			</ContentWrapper>
		</Container>
	);
}
