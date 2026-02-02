import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import React, { useState, useEffect, useCallback } from "react";
import styled, { keyframes, css } from "styled-components";
import { sliderItems } from "../data/data";
import OptimizedImage from "./OptimizedImage";

const fadeIn = keyframes`
	from {
		opacity: 0;
		transform: translateY(30px);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
`;

const scaleIn = keyframes`
	from {
		transform: scale(1.1);
	}
	to {
		transform: scale(1);
	}
`;



const Container = styled.section`
	width: 100%;
	height: 100vh;
	min-height: 600px;
	display: flex;
	align-items: center;
	position: relative;
	overflow: hidden;
	background: #0a0a0f;

	@media only screen and (max-width: 768px) {
		height: 85vh;
		min-height: 500px;
	}
`;

const Arrow = styled.button`
	width: 56px;
	height: 56px;
	background: rgba(255, 255, 255, 0.1);
	backdrop-filter: blur(10px);
	-webkit-backdrop-filter: blur(10px);
	border: 1px solid rgba(255, 255, 255, 0.15);
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	left: ${(props) => props.direction === "left" && "2rem"};
	right: ${(props) => props.direction === "right" && "2rem"};
	cursor: pointer;
	z-index: 10;
	transition: all 0.3s ease;
	color: white;

	&:hover {
		background: rgba(168, 85, 247, 0.3);
		border-color: rgba(168, 85, 247, 0.5);
		transform: translateY(-50%) scale(1.1);
	}

	svg {
		font-size: 1.25rem;
		margin-left: ${(props) => props.direction === "left" && "4px"};
	}

	@media only screen and (max-width: 768px) {
		width: 44px;
		height: 44px;
		left: ${(props) => props.direction === "left" && "1rem"};
		right: ${(props) => props.direction === "right" && "1rem"};
	}
`;

const Wrapper = styled.div`
	display: flex;
	height: 100%;
	width: 100%;
	transition: transform 0.8s cubic-bezier(0.65, 0, 0.35, 1);
	transform: translateX(${(props) => props.slideIndex * -100}%);
`;

const Slide = styled.div`
	width: 100%;
	height: 100%;
	flex-shrink: 0;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const ImageWrapper = styled.div`
	position: absolute;
	inset: 0;
	overflow: hidden;

	&::after {
		content: '';
		position: absolute;
		inset: 0;
		background: linear-gradient(
			180deg,
			rgba(10, 10, 15, 0.3) 0%,
			rgba(10, 10, 15, 0.5) 50%,
			rgba(10, 10, 15, 0.95) 100%
		);
		z-index: 1;
	}
`;

const Image = styled(OptimizedImage)`
	width: 100%;
	height: 100%;
	object-fit: cover;
	animation: ${scaleIn} 8s ease-out forwards;
`;

const SlideContent = styled.div`
	position: relative;
	z-index: 5;
	max-width: 800px;
	padding: 0 2rem;
	text-align: center;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1.5rem;

	${(props) =>
		props.isActive &&
		css`
			animation: ${fadeIn} 0.8s ease forwards;
			animation-delay: 0.3s;
			opacity: 0;
		`}

	@media only screen and (max-width: 768px) {
		padding: 0 1.5rem;
		gap: 1rem;
	}
`;

const SlideTag = styled.span`
	display: inline-flex;
	align-items: center;
	gap: 0.5rem;
	background: rgba(168, 85, 247, 0.2);
	border: 1px solid rgba(168, 85, 247, 0.3);
	color: #a855f7;
	padding: 0.5rem 1rem;
	border-radius: 50px;
	font-size: 0.85rem;
	font-weight: 600;
	text-transform: uppercase;
	letter-spacing: 1px;
`;

const SlideTitle = styled.h1`
	font-family: 'Outfit', sans-serif;
	font-size: clamp(2.5rem, 6vw, 4.5rem);
	font-weight: 800;
	color: white;
	line-height: 1.1;
	text-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
	
	background: linear-gradient(135deg, #ffffff 0%, rgba(255, 255, 255, 0.8) 100%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	background-clip: text;
`;

const SlideDescription = styled.p`
	font-size: clamp(1rem, 2vw, 1.25rem);
	color: rgba(255, 255, 255, 0.8);
	max-width: 600px;
	line-height: 1.6;
`;

const SlideButton = styled.a`
	display: inline-flex;
	align-items: center;
	gap: 0.75rem;
	background: linear-gradient(135deg, #a855f7 0%, #06b6d4 100%);
	color: white;
	padding: 1rem 2.5rem;
	border-radius: 50px;
	font-weight: 600;
	font-size: 1rem;
	text-decoration: none;
	transition: all 0.3s ease;
	box-shadow: 0 8px 30px rgba(168, 85, 247, 0.4);
	position: relative;
	overflow: hidden;

	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: -100%;
		width: 100%;
		height: 100%;
		background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
		transition: left 0.5s ease;
	}

	&:hover {
		transform: translateY(-3px);
		box-shadow: 0 12px 40px rgba(168, 85, 247, 0.6);

		&::before {
			left: 100%;
		}
	}
`;

const DotsContainer = styled.div`
	position: absolute;
	bottom: 2rem;
	left: 50%;
	transform: translateX(-50%);
	display: flex;
	gap: 0.75rem;
	z-index: 10;
`;

const Dot = styled.button`
	width: ${(props) => (props.active ? "32px" : "10px")};
	height: 10px;
	border-radius: 50px;
	background: ${(props) =>
		props.active
			? "linear-gradient(90deg, #a855f7, #06b6d4)"
			: "rgba(255, 255, 255, 0.3)"};
	border: none;
	cursor: pointer;
	transition: all 0.3s ease;

	&:hover {
		background: ${(props) =>
		props.active
			? "linear-gradient(90deg, #a855f7, #06b6d4)"
			: "rgba(255, 255, 255, 0.5)"};
	}
`;

const ProgressBar = styled.div`
	position: absolute;
	bottom: 0;
	left: 0;
	height: 3px;
	background: linear-gradient(90deg, #a855f7, #06b6d4);
	width: ${(props) => props.progress}%;
	transition: width 0.1s linear;
	z-index: 10;
`;

export default function Slider() {
	const [slideIndex, setSlideIndex] = useState(0);
	const [progress, setProgress] = useState(0);
	const [isPaused, setIsPaused] = useState(false);
	const autoPlayInterval = 6000;

	const goToSlide = useCallback((index) => {
		setSlideIndex(index);
		setProgress(0);
	}, []);

	const handleClick = useCallback((direction) => {
		if (direction === "left") {
			goToSlide(slideIndex > 0 ? slideIndex - 1 : sliderItems.length - 1);
		} else {
			goToSlide(slideIndex < sliderItems.length - 1 ? slideIndex + 1 : 0);
		}
	}, [slideIndex, goToSlide]);

	useEffect(() => {
		if (isPaused) return;

		const progressTimer = setInterval(() => {
			setProgress((prev) => {
				if (prev >= 100) {
					handleClick("right");
					return 0;
				}
				return prev + (100 / (autoPlayInterval / 100));
			});
		}, 100);

		return () => clearInterval(progressTimer);
	}, [isPaused, handleClick]);

	return (
		<Container
			onMouseEnter={() => setIsPaused(true)}
			onMouseLeave={() => setIsPaused(false)}
		>
			<Arrow direction="left" onClick={() => handleClick("left")} aria-label="Previous slide">
				<ArrowBackIos />
			</Arrow>

			<Wrapper slideIndex={slideIndex}>
				{sliderItems.map((item, index) => (
					<Slide key={item.id}>
						<ImageWrapper>
							<Image src={item.img} alt={item.title} />
						</ImageWrapper>
						<SlideContent isActive={index === slideIndex}>
							<SlideTag>✨ Featured</SlideTag>
							<SlideTitle>{item.title}</SlideTitle>
							<SlideDescription>{item.description}</SlideDescription>
							<SlideButton href={item.link}>
								{item.buttonText}
								<span>→</span>
							</SlideButton>
						</SlideContent>
					</Slide>
				))}
			</Wrapper>

			<Arrow direction="right" onClick={() => handleClick("right")} aria-label="Next slide">
				<ArrowForwardIos />
			</Arrow>

			<DotsContainer>
				{sliderItems.map((_, index) => (
					<Dot
						key={index}
						active={index === slideIndex}
						onClick={() => goToSlide(index)}
						aria-label={`Go to slide ${index + 1}`}
					/>
				))}
			</DotsContainer>

			<ProgressBar progress={progress} />
		</Container>
	);
}
