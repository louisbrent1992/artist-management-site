import React from "react";
import ReactPlayer from "react-player";
import { PlayArrow } from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
	display: flex;
	justify-content: center;
	width: 100vw;
`;

const PlayButton = () => (
	<div
		style={{
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			color: "#333533",
			backgroundColor: "#f5cb5c",
			borderRadius: "50%",
			width: "80px",
			height: "80px",
			cursor: "pointer",
			transition: "transform 0.3s ease",
		}}
	>
		<PlayArrow style={{ fontSize: 50 }} />
	</div>
);

const OptimizedVideo = ({ video, thumbnail, alt, ...props }) => {
	return (
		<Container>
			<ReactPlayer
				url={video}
				controls={true}
				playIcon={<PlayButton />}
				playing={false}
				loop={true}
				muted={false}
				style={{ objectFit: "contain" }}
				preload="metadata"
				light={thumbnail}
				{...props}
			/>
		</Container>
	);
};

export default OptimizedVideo;
