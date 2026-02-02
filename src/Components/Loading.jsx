import React from "react";
import styled, { keyframes } from "styled-components";

const pulse = keyframes`
	0%, 100% {
		transform: scale(1);
		opacity: 1;
	}
	50% {
		transform: scale(1.1);
		opacity: 0.7;
	}
`;

const rotate = keyframes`
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
`;

const LoadingContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 2rem;
	height: 100vh;
	background: linear-gradient(180deg, #0a0a0f 0%, #12121a 100%);
	position: relative;
	overflow: hidden;

	&::before {
		content: '';
		position: absolute;
		width: 400px;
		height: 400px;
		background: radial-gradient(circle, rgba(168, 85, 247, 0.1) 0%, transparent 70%);
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
`;

const LogoContainer = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const LogoIcon = styled.div`
	width: 80px;
	height: 80px;
	background: linear-gradient(135deg, #a855f7 0%, #06b6d4 100%);
	border-radius: 24px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-family: 'Outfit', sans-serif;
	font-weight: 900;
	font-size: 2.5rem;
	color: white;
	box-shadow: 0 8px 40px rgba(168, 85, 247, 0.4);
	animation: ${pulse} 2s ease-in-out infinite;
	position: relative;
	z-index: 2;
`;

const SpinnerRing = styled.div`
	position: absolute;
	width: 120px;
	height: 120px;
	border-radius: 50%;
	border: 3px solid transparent;
	border-top-color: #a855f7;
	border-right-color: #06b6d4;
	animation: ${rotate} 1.5s linear infinite;
`;

const LoadingText = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 0.5rem;
`;

const BrandName = styled.span`
	font-family: 'Outfit', sans-serif;
	font-size: 1.5rem;
	font-weight: 700;
	background: linear-gradient(135deg, #ffffff 0%, rgba(255, 255, 255, 0.8) 100%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	background-clip: text;
`;

const SubText = styled.span`
	font-size: 0.9rem;
	color: rgba(255, 255, 255, 0.5);
	letter-spacing: 2px;
	text-transform: uppercase;
`;

const Loading = () => (
	<LoadingContainer>
		<LogoContainer>
			<SpinnerRing />
			<LogoIcon>P</LogoIcon>
		</LogoContainer>
		<LoadingText>
			<BrandName>Pulse Records</BrandName>
			<SubText>Loading...</SubText>
		</LoadingText>
	</LoadingContainer>
);

export default Loading;
