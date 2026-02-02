import React from "react";
import styled from "styled-components";
import AllReleases from "../Components/AllReleases";

import Footer from "../Components/Footer";

import Navbar from "../Components/Navbar";

import SignUp from "../Components/SignUp";

import { social } from "../data/data";

const Container = styled.div``;
export default function Releases() {
	return (
		<Container>
			<Navbar social={social} />
			<AllReleases />
			<SignUp />
			<Footer social={social} />
		</Container>
	);
}
