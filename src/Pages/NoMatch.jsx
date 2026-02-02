import React from "react";
import styled, { keyframes } from "styled-components";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const float = keyframes`
	0%, 100% {
		transform: translateY(0);
	}
	50% {
		transform: translateY(-20px);
	}
`;

const pulse = keyframes`
	0%, 100% {
		opacity: 0.3;
		transform: scale(1);
	}
	50% {
		opacity: 0.6;
		transform: scale(1.1);
	}
`;

const Container = styled.div`
	min-height: 100vh;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background: linear-gradient(180deg, #0a0a0f 0%, #12121a 50%, #0a0a0f 100%);
	position: relative;
	overflow: hidden;
	padding: 2rem;
`;

const BackgroundGlow = styled.div`
	position: absolute;
	width: 500px;
	height: 500px;
	border-radius: 50%;
	background: radial-gradient(circle, rgba(168, 85, 247, 0.1) 0%, transparent 70%);
	animation: ${pulse} 6s ease-in-out infinite;

	&:nth-child(1) {
		top: 10%;
		left: 10%;
	}

	&:nth-child(2) {
		bottom: 10%;
		right: 10%;
		background: radial-gradient(circle, rgba(6, 182, 212, 0.08) 0%, transparent 70%);
		animation-delay: 3s;
	}
`;

const Content = styled.div`
	position: relative;
	z-index: 2;
	text-align: center;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 2rem;
	max-width: 600px;
`;

const IconContainer = styled.div`
	position: relative;
	animation: ${float} 4s ease-in-out infinite;
`;

const ErrorIcon = styled.div`
	width: 120px;
	height: 120px;
	background: linear-gradient(135deg, rgba(168, 85, 247, 0.2) 0%, rgba(6, 182, 212, 0.1) 100%);
	border: 2px solid rgba(168, 85, 247, 0.3);
	border-radius: 32px;
	display: flex;
	align-items: center;
	justify-content: center;
	color: #a855f7;

	svg {
		width: 60px;
		height: 60px;
	}
`;

const ErrorCode = styled.h1`
	font-family: 'Outfit', sans-serif;
	font-size: clamp(5rem, 15vw, 10rem);
	font-weight: 900;
	background: linear-gradient(135deg, #a855f7 0%, #06b6d4 100%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	background-clip: text;
	line-height: 1;
	margin: 0;
`;

const Message = styled.h2`
	font-family: 'Outfit', sans-serif;
	font-size: clamp(1.5rem, 4vw, 2rem);
	font-weight: 700;
	color: white;
	margin: 0;
`;

const SubMessage = styled.p`
	font-size: 1.1rem;
	color: rgba(255, 255, 255, 0.6);
	line-height: 1.7;
	margin: 0;
`;

const ButtonGroup = styled.div`
	display: flex;
	gap: 1rem;
	flex-wrap: wrap;
	justify-content: center;
`;

const PrimaryButton = styled(Link)`
	display: inline-flex;
	align-items: center;
	gap: 0.75rem;
	background: linear-gradient(135deg, #a855f7 0%, #06b6d4 100%);
	color: white;
	padding: 1rem 2rem;
	border-radius: 50px;
	font-weight: 600;
	font-size: 1rem;
	text-decoration: none;
	transition: all 0.3s ease;
	box-shadow: 0 8px 30px rgba(168, 85, 247, 0.3);

	&:hover {
		transform: translateY(-3px);
		box-shadow: 0 12px 40px rgba(168, 85, 247, 0.5);
	}

	svg {
		width: 20px;
		height: 20px;
	}
`;

const SecondaryButton = styled.button`
	display: inline-flex;
	align-items: center;
	gap: 0.75rem;
	background: transparent;
	border: 2px solid rgba(255, 255, 255, 0.2);
	color: rgba(255, 255, 255, 0.8);
	padding: 1rem 2rem;
	border-radius: 50px;
	font-weight: 600;
	font-size: 1rem;
	cursor: pointer;
	transition: all 0.3s ease;

	&:hover {
		background: rgba(255, 255, 255, 0.05);
		border-color: rgba(255, 255, 255, 0.4);
		color: white;
	}

	svg {
		width: 20px;
		height: 20px;
	}
`;

const HomeLink = styled(Link)`
	position: absolute;
	top: 2rem;
	left: 2rem;
	display: flex;
	align-items: center;
	gap: 0.75rem;
	text-decoration: none;
	z-index: 10;
`;

const LogoIcon = styled.div`
	width: 42px;
	height: 42px;
	background: linear-gradient(135deg, #a855f7 0%, #06b6d4 100%);
	border-radius: 12px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-weight: 900;
	font-size: 1.25rem;
	color: white;
	box-shadow: 0 4px 20px rgba(168, 85, 247, 0.4);
`;

const LogoText = styled.span`
	font-family: 'Outfit', sans-serif;
	color: white;
	font-size: 1.25rem;
	font-weight: 700;

	@media only screen and (max-width: 480px) {
		display: none;
	}
`;

export default function NoMatch() {
	const handleGoBack = () => {
		window.history.back();
	};

	return (
		<Container>
			<BackgroundGlow />
			<BackgroundGlow />

			<HomeLink to="/">
				<LogoIcon>P</LogoIcon>
				<LogoText>Pulse Records</LogoText>
			</HomeLink>

			<Content>
				<IconContainer>
					<ErrorIcon>
						<Icon icon="mdi:music-note-off" />
					</ErrorIcon>
				</IconContainer>

				<ErrorCode>404</ErrorCode>
				<Message>Page Not Found</Message>
				<SubMessage>
					Looks like this track got lost in the mix.
					The page you're looking for doesn't exist or has been moved.
				</SubMessage>

				<ButtonGroup>
					<PrimaryButton to="/">
						<Icon icon="mdi:home" />
						Back to Home
					</PrimaryButton>
					<SecondaryButton onClick={handleGoBack}>
						<Icon icon="mdi:arrow-left" />
						Go Back
					</SecondaryButton>
				</ButtonGroup>
			</Content>
		</Container>
	);
}
