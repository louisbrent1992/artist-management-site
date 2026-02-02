import React from "react";
import styled, { keyframes } from "styled-components";
import { Icon } from "@iconify/react";

import { latestVideos } from "../data/data";

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
	background: linear-gradient(180deg, #0a0a0f 0%, #12121a 100%);
	padding: 6rem 2rem;
	position: relative;
	overflow: hidden;

	&::before {
		content: '';
		position: absolute;
		top: 50%;
		right: -20%;
		width: 600px;
		height: 600px;
		background: radial-gradient(circle, rgba(6, 182, 212, 0.08) 0%, transparent 70%);
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
	background: rgba(6, 182, 212, 0.15);
	border: 1px solid rgba(6, 182, 212, 0.3);
	color: #06b6d4;
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

const VideosGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 1.5rem;

	@media only screen and (max-width: 1024px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media only screen and (max-width: 640px) {
		grid-template-columns: 1fr;
	}
`;

const FeaturedVideo = styled.div`
	grid-column: span 2;
	grid-row: span 2;

	@media only screen and (max-width: 1024px) {
		grid-column: span 2;
		grid-row: span 1;
	}

	@media only screen and (max-width: 640px) {
		grid-column: span 1;
	}
`;

const VideoCard = styled.article`
	position: relative;
	border-radius: 20px;
	overflow: hidden;
	background: rgba(255, 255, 255, 0.03);
	border: 1px solid rgba(255, 255, 255, 0.08);
	aspect-ratio: ${(props) => (props.featured ? "16/9" : "16/10")};
	cursor: pointer;
	transition: all 0.4s ease;

	&:hover {
		transform: translateY(-5px);
		border-color: rgba(6, 182, 212, 0.4);
		box-shadow: 
			0 20px 50px rgba(0, 0, 0, 0.4),
			0 0 30px rgba(6, 182, 212, 0.1);
	}
`;

const VideoThumbnail = styled.div`
	position: absolute;
	inset: 0;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform 0.6s ease;
	}

	&::after {
		content: '';
		position: absolute;
		inset: 0;
		background: linear-gradient(
			180deg,
			transparent 0%,
			rgba(10, 10, 15, 0.3) 50%,
			rgba(10, 10, 15, 0.9) 100%
		);
	}

	${VideoCard}:hover & img {
		transform: scale(1.05);
	}
`;

const PlayButton = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: ${(props) => (props.featured ? "80px" : "60px")};
	height: ${(props) => (props.featured ? "80px" : "60px")};
	border-radius: 50%;
	background: rgba(6, 182, 212, 0.9);
	display: flex;
	align-items: center;
	justify-content: center;
	color: white;
	z-index: 2;
	transition: all 0.3s ease;
	box-shadow: 0 8px 30px rgba(6, 182, 212, 0.4);

	svg {
		width: ${(props) => (props.featured ? "32px" : "24px")};
		height: ${(props) => (props.featured ? "32px" : "24px")};
		margin-left: 4px;
	}

	${VideoCard}:hover & {
		transform: translate(-50%, -50%) scale(1.1);
		background: rgba(6, 182, 212, 1);
	}
`;

const VideoContent = styled.div`
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	padding: ${(props) => (props.featured ? "2rem" : "1.25rem")};
	z-index: 2;
`;

const VideoTitle = styled.h3`
	font-family: 'Outfit', sans-serif;
	font-size: ${(props) => (props.featured ? "1.5rem" : "1rem")};
	font-weight: 600;
	color: white;
	margin: 0 0 0.5rem 0;
	line-height: 1.3;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	overflow: hidden;
`;

const VideoMeta = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
	color: rgba(255, 255, 255, 0.6);
	font-size: 0.85rem;
`;

const MetaItem = styled.span`
	display: flex;
	align-items: center;
	gap: 0.35rem;

	svg {
		width: 16px;
		height: 16px;
	}
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
	border: 2px solid rgba(6, 182, 212, 0.5);
	color: #06b6d4;
	border-radius: 50px;
	font-weight: 600;
	font-size: 1rem;
	text-decoration: none;
	transition: all 0.3s ease;
	cursor: pointer;

	&:hover {
		background: rgba(6, 182, 212, 0.15);
		border-color: #06b6d4;
		transform: translateY(-2px);
		box-shadow: 0 8px 30px rgba(6, 182, 212, 0.3);
	}
`;

const formatViews = (views) => {
	if (views >= 1000000) return `${(views / 1000000).toFixed(1)}M`;
	if (views >= 1000) return `${(views / 1000).toFixed(0)}K`;
	return views;
};

export default function LatestVideos() {


	const handleVideoClick = (video) => {
		// setActiveVideo(video);
		// Could open a modal here
	};

	return (
		<Container id="videos">
			<ContentWrapper>
				<Header>
					<Eyebrow>▶️ Watch Now</Eyebrow>
					<Title>Latest Videos</Title>
					<Subtitle>
						From music videos to live performances, catch all
						the visual content from our artists.
					</Subtitle>
				</Header>

				<VideosGrid>
					{latestVideos.map((video, index) => (
						index === 0 ? (
							<FeaturedVideo key={video.id}>
								<VideoCard featured onClick={() => handleVideoClick(video)}>
									<VideoThumbnail>
										<img src={video.thumbnail} alt={video.title} />
									</VideoThumbnail>
									<PlayButton featured>
										<Icon icon="mdi:play" />
									</PlayButton>
									<VideoContent featured>
										<VideoTitle featured>{video.title}</VideoTitle>
										<VideoMeta>
											<MetaItem>
												<Icon icon="mdi:eye" />
												{formatViews(video.views)} views
											</MetaItem>
											<MetaItem>
												<Icon icon="mdi:heart" />
												{formatViews(video.likes)}
											</MetaItem>
										</VideoMeta>
									</VideoContent>
								</VideoCard>
							</FeaturedVideo>
						) : (
							<VideoCard key={video.id} onClick={() => handleVideoClick(video)}>
								<VideoThumbnail>
									<img src={video.thumbnail} alt={video.title} />
								</VideoThumbnail>
								<PlayButton>
									<Icon icon="mdi:play" />
								</PlayButton>
								<VideoContent>
									<VideoTitle>{video.title}</VideoTitle>
									<VideoMeta>
										<MetaItem>
											<Icon icon="mdi:eye" />
											{formatViews(video.views)}
										</MetaItem>
									</VideoMeta>
								</VideoContent>
							</VideoCard>
						)
					))}
				</VideosGrid>

				<ButtonWrapper>
					<ViewAllButton href="/videos">
						View All Videos
						<Icon icon="mdi:arrow-right" />
					</ViewAllButton>
				</ButtonWrapper>
			</ContentWrapper>
		</Container>
	);
}
