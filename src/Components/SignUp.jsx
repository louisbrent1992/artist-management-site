import React from "react";
import styled, { keyframes } from "styled-components";
import { Icon } from "@iconify/react";
import SignUpForm from "./SignUpForm";

const float = keyframes`
	0%, 100% {
		transform: translateY(0) rotate(0deg);
	}
	50% {
		transform: translateY(-20px) rotate(5deg);
	}
`;

const pulse = keyframes`
	0%, 100% {
		opacity: 0.5;
		transform: scale(1);
	}
	50% {
		opacity: 0.8;
		transform: scale(1.1);
	}
`;

const Container = styled.section`
	width: 100%;
	min-height: 60vh;
	background: linear-gradient(180deg, #0a0a0f 0%, #12121a 50%, #0a0a0f 100%);
	padding: 6rem 2rem;
	position: relative;
	overflow: hidden;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const BackgroundGlow = styled.div`
	position: absolute;
	width: 600px;
	height: 600px;
	border-radius: 50%;
	background: radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, transparent 70%);
	animation: ${pulse} 8s ease-in-out infinite;

	&:nth-child(1) {
		top: -20%;
		left: -10%;
	}

	&:nth-child(2) {
		bottom: -30%;
		right: -10%;
		background: radial-gradient(circle, rgba(6, 182, 212, 0.1) 0%, transparent 70%);
		animation-delay: 4s;
	}
`;

const FloatingIcon = styled.div`
	position: absolute;
	font-size: 3rem;
	opacity: 0.1;
	animation: ${float} 6s ease-in-out infinite;
	pointer-events: none;

	&:nth-child(3) {
		top: 15%;
		left: 10%;
		animation-delay: 0s;
	}

	&:nth-child(4) {
		top: 25%;
		right: 15%;
		animation-delay: 2s;
	}

	&:nth-child(5) {
		bottom: 20%;
		left: 15%;
		animation-delay: 4s;
	}

	&:nth-child(6) {
		bottom: 30%;
		right: 10%;
		animation-delay: 1s;
	}
`;

const ContentWrapper = styled.div`
	max-width: 1200px;
	width: 100%;
	margin: 0 auto;
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 4rem;
	align-items: center;
	position: relative;
	z-index: 1;

	@media only screen and (max-width: 900px) {
		grid-template-columns: 1fr;
		gap: 3rem;
		text-align: center;
	}
`;

const Left = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
`;

const Eyebrow = styled.span`
	display: inline-flex;
	align-items: center;
	align-self: flex-start;
	gap: 0.5rem;
	background: rgba(251, 191, 36, 0.15);
	border: 1px solid rgba(251, 191, 36, 0.3);
	color: #fbbf24;
	padding: 0.5rem 1.25rem;
	border-radius: 50px;
	font-size: 0.85rem;
	font-weight: 600;
	text-transform: uppercase;
	letter-spacing: 1.5px;

	@media only screen and (max-width: 900px) {
		align-self: center;
	}
`;

const Title = styled.h2`
	font-family: 'Outfit', sans-serif;
	font-size: clamp(2.5rem, 5vw, 3.5rem);
	font-weight: 800;
	line-height: 1.15;
	background: linear-gradient(135deg, #ffffff 0%, rgba(255, 255, 255, 0.8) 100%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	background-clip: text;
`;

const Description = styled.p`
	font-size: 1.15rem;
	color: rgba(255, 255, 255, 0.6);
	line-height: 1.7;
	max-width: 500px;

	@media only screen and (max-width: 900px) {
		margin: 0 auto;
	}
`;

const Benefits = styled.ul`
	list-style: none;
	display: flex;
	flex-direction: column;
	gap: 0.75rem;
	margin-top: 0.5rem;

	@media only screen and (max-width: 900px) {
		align-items: center;
	}
`;

const BenefitItem = styled.li`
	display: flex;
	align-items: center;
	gap: 0.75rem;
	color: rgba(255, 255, 255, 0.8);
	font-size: 1rem;

	svg {
		width: 20px;
		height: 20px;
		color: #a855f7;
	}
`;

const Right = styled.div`
	display: flex;
	justify-content: center;
`;

const FormCard = styled.div`
	background: rgba(255, 255, 255, 0.03);
	backdrop-filter: blur(20px);
	-webkit-backdrop-filter: blur(20px);
	border: 1px solid rgba(255, 255, 255, 0.1);
	border-radius: 24px;
	padding: 2.5rem;
	width: 100%;
	max-width: 450px;
	box-shadow: 
		0 20px 50px rgba(0, 0, 0, 0.3),
		0 0 40px rgba(168, 85, 247, 0.05);
`;

const FormTitle = styled.h3`
	font-family: 'Outfit', sans-serif;
	font-size: 1.5rem;
	font-weight: 700;
	color: white;
	margin-bottom: 0.5rem;
	text-align: center;
`;

const FormSubtitle = styled.p`
	font-size: 0.95rem;
	color: rgba(255, 255, 255, 0.6);
	text-align: center;
	margin-bottom: 1.5rem;
`;

export default function SignUp() {
	return (
		<Container id="signup">
			<BackgroundGlow />
			<BackgroundGlow />
			<FloatingIcon><Icon icon="mdi:music-note" /></FloatingIcon>
			<FloatingIcon><Icon icon="mdi:headphones" /></FloatingIcon>
			<FloatingIcon><Icon icon="mdi:album" /></FloatingIcon>
			<FloatingIcon><Icon icon="mdi:microphone" /></FloatingIcon>

			<ContentWrapper>
				<Left>
					<Eyebrow>📧 Stay Connected</Eyebrow>
					<Title>
						Get Exclusive Updates
						Straight to Your Inbox
					</Title>
					<Description>
						Be the first to know about new releases, tour dates,
						exclusive merch drops, and behind-the-scenes content
						from your favorite artists.
					</Description>
					<Benefits>
						<BenefitItem>
							<Icon icon="mdi:check-circle" />
							Early access to new releases
						</BenefitItem>
						<BenefitItem>
							<Icon icon="mdi:check-circle" />
							Exclusive presale codes
						</BenefitItem>
						<BenefitItem>
							<Icon icon="mdi:check-circle" />
							Behind-the-scenes content
						</BenefitItem>
						<BenefitItem>
							<Icon icon="mdi:check-circle" />
							Limited edition merch alerts
						</BenefitItem>
					</Benefits>
				</Left>

				<Right>
					<FormCard>
						<FormTitle>Join the Family</FormTitle>
						<FormSubtitle>No spam, just great music</FormSubtitle>
						<SignUpForm />
					</FormCard>
				</Right>
			</ContentWrapper>
		</Container>
	);
}
