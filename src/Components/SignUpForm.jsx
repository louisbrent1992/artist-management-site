import React, { useState } from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react";
import { countryList } from "../data/countries";



const Container = styled.div`
	width: 100%;
`;

const Form = styled.form`
	display: flex;
	flex-direction: column;
	gap: 1.25rem;
`;

const InputGroup = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
`;

const Label = styled.label`
	font-size: 0.85rem;
	font-weight: 600;
	color: rgba(255, 255, 255, 0.7);
	text-transform: uppercase;
	letter-spacing: 0.5px;
`;

const InputWrapper = styled.div`
	position: relative;
	display: flex;
	align-items: center;
`;

const Input = styled.input`
	width: 100%;
	padding: 1rem 1rem 1rem 3rem;
	background: rgba(255, 255, 255, 0.05);
	border: 1px solid rgba(255, 255, 255, 0.1);
	border-radius: 12px;
	font-size: 1rem;
	color: white;
	transition: all 0.3s ease;
	outline: none;

	&::placeholder {
		color: rgba(255, 255, 255, 0.4);
	}

	&:focus {
		border-color: rgba(168, 85, 247, 0.5);
		background: rgba(168, 85, 247, 0.05);
		box-shadow: 0 0 20px rgba(168, 85, 247, 0.1);
	}
`;

const InputIcon = styled.div`
	position: absolute;
	left: 1rem;
	color: rgba(255, 255, 255, 0.4);
	display: flex;
	align-items: center;
	pointer-events: none;

	svg {
		width: 20px;
		height: 20px;
	}
`;

const Select = styled.select`
	width: 100%;
	padding: 1rem 1rem 1rem 3rem;
	background: rgba(255, 255, 255, 0.05);
	border: 1px solid rgba(255, 255, 255, 0.1);
	border-radius: 12px;
	font-size: 1rem;
	color: white;
	transition: all 0.3s ease;
	outline: none;
	cursor: pointer;
	appearance: none;

	&:focus {
		border-color: rgba(168, 85, 247, 0.5);
		background: rgba(168, 85, 247, 0.05);
	}

	option {
		background: #1a1a24;
		color: white;
	}
`;

const SelectArrow = styled.div`
	position: absolute;
	right: 1rem;
	color: rgba(255, 255, 255, 0.4);
	pointer-events: none;

	svg {
		width: 20px;
		height: 20px;
	}
`;

const CheckboxGroup = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.75rem;
	margin-top: 0.5rem;
`;

const CheckboxLabel = styled.label`
	display: flex;
	align-items: center;
	gap: 0.75rem;
	cursor: pointer;
	font-size: 0.9rem;
	color: rgba(255, 255, 255, 0.8);
	transition: color 0.3s ease;

	&:hover {
		color: white;
	}
`;

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
	position: absolute;
	opacity: 0;
	cursor: pointer;
`;

const StyledCheckbox = styled.div`
	width: 22px;
	height: 22px;
	border-radius: 6px;
	border: 2px solid ${(props) => (props.checked ? "#a855f7" : "rgba(255, 255, 255, 0.2)")};
	background: ${(props) => (props.checked ? "linear-gradient(135deg, #a855f7, #06b6d4)" : "transparent")};
	display: flex;
	align-items: center;
	justify-content: center;
	transition: all 0.3s ease;
	flex-shrink: 0;

	svg {
		width: 14px;
		height: 14px;
		color: white;
		opacity: ${(props) => (props.checked ? 1 : 0)};
		transform: ${(props) => (props.checked ? "scale(1)" : "scale(0.5)")};
		transition: all 0.2s ease;
	}
`;

const Agreement = styled.p`
	font-size: 0.75rem;
	color: rgba(255, 255, 255, 0.5);
	line-height: 1.6;
	margin-top: 0.5rem;
`;

const Link = styled.a`
	color: #a855f7;
	text-decoration: none;
	cursor: pointer;
	transition: color 0.3s ease;

	&:hover {
		color: #06b6d4;
	}
`;

const SubmitButton = styled.button`
	width: 100%;
	padding: 1rem 2rem;
	background: linear-gradient(135deg, #a855f7 0%, #06b6d4 100%);
	border: none;
	border-radius: 12px;
	font-size: 1rem;
	font-weight: 700;
	color: white;
	cursor: pointer;
	transition: all 0.3s ease;
	box-shadow: 0 8px 30px rgba(168, 85, 247, 0.3);
	position: relative;
	overflow: hidden;
	margin-top: 0.5rem;

	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: -100%;
		width: 100%;
		height: 100%;
		background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
		transition: left 0.5s ease;
	}

	&:hover {
		transform: translateY(-2px);
		box-shadow: 0 12px 40px rgba(168, 85, 247, 0.5);

		&::before {
			left: 100%;
		}
	}

	&:active {
		transform: translateY(0);
	}
`;

const SuccessMessage = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1rem;
	padding: 2rem;
	text-align: center;

	svg {
		width: 60px;
		height: 60px;
		color: #22c55e;
	}

	h4 {
		font-family: 'Outfit', sans-serif;
		font-size: 1.25rem;
		color: white;
		margin: 0;
	}

	p {
		font-size: 0.95rem;
		color: rgba(255, 255, 255, 0.6);
		margin: 0;
	}
`;

export default function SignUpForm() {
	const [labelUpdates, setLabelUpdates] = useState(true);
	const [artistUpdates, setArtistUpdates] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		setIsSubmitted(true);
	};

	if (isSubmitted) {
		return (
			<Container>
				<SuccessMessage>
					<Icon icon="mdi:check-circle" />
					<h4>You're In!</h4>
					<p>Thanks for subscribing. Check your inbox for a welcome email.</p>
				</SuccessMessage>
			</Container>
		);
	}

	return (
		<Container>
			<Form onSubmit={handleSubmit}>
				<InputGroup>
					<Label>Email Address</Label>
					<InputWrapper>
						<InputIcon>
							<Icon icon="mdi:email-outline" />
						</InputIcon>
						<Input
							type="email"
							required
							placeholder="Enter your email"
						/>
					</InputWrapper>
				</InputGroup>

				<InputGroup>
					<Label>Country</Label>
					<InputWrapper>
						<InputIcon>
							<Icon icon="mdi:earth" />
						</InputIcon>
						<Select defaultValue="">
							<option value="" disabled>Select your country</option>
							{countryList.map((country, index) => (
								<option key={index} value={country}>
									{country}
								</option>
							))}
						</Select>
						<SelectArrow>
							<Icon icon="mdi:chevron-down" />
						</SelectArrow>
					</InputWrapper>
				</InputGroup>

				<CheckboxGroup>
					<Label>Subscribe to updates from:</Label>
					<CheckboxLabel>
						<HiddenCheckbox
							checked={labelUpdates}
							onChange={() => setLabelUpdates(!labelUpdates)}
						/>
						<StyledCheckbox checked={labelUpdates}>
							<Icon icon="mdi:check" />
						</StyledCheckbox>
						Pulse Records
					</CheckboxLabel>
					<CheckboxLabel>
						<HiddenCheckbox
							checked={artistUpdates}
							onChange={() => setArtistUpdates(!artistUpdates)}
						/>
						<StyledCheckbox checked={artistUpdates}>
							<Icon icon="mdi:check" />
						</StyledCheckbox>
						Our Artists
					</CheckboxLabel>
				</CheckboxGroup>

				<Agreement>
					By subscribing, you agree to receive marketing emails from Pulse Records.
					You can unsubscribe at any time.{" "}
					<Link href="/privacy">Privacy Policy</Link>
				</Agreement>

				<SubmitButton type="submit">
					Subscribe Now
				</SubmitButton>
			</Form>
		</Container>
	);
}
