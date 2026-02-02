import React from "react";
import LatestVideos from "../Components/LatestVideos";
import Navbar from "../Components/Navbar";
import Slider from "../Components/Slider";
import ArtistsCollage from "../Components/ArtistsCollage";
import Footer from "../Components/Footer";
import styled, { createGlobalStyle } from "styled-components";
import NewReleases from "../Components/NewReleases";
import SignUp from "../Components/SignUp";
import { labelArtists } from "../data/data";
import { social } from "../data/data";

const GlobalStyle = createGlobalStyle`
	html {
		scroll-behavior: smooth;
	}
`;

const Container = styled.div`
	min-height: 100vh;
	background: #0a0a0f;
	overflow-x: hidden;
`;

const MainContent = styled.main`
	position: relative;
`;

export default function Home() {
	return (
		<>
			<GlobalStyle />
			<Container>
				<Navbar social={social} />
				<MainContent>
					<Slider />
					<LatestVideos />
					<ArtistsCollage labelArtists={labelArtists} />
					<NewReleases />
					<SignUp />
				</MainContent>
				<Footer social={social} />
			</Container>
		</>
	);
}
