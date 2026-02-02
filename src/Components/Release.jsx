import React from "react";
import styled from "styled-components";
import OptimizedImage from "./OptimizedImage";

const Container = styled.div`
	height: 100%;
	margin-block: 20px;

	@media only screen and (max-width: 55rem) {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}
`;
const Image = styled(OptimizedImage)`
	height: 403px;
	width: 403px;
	margin-right: 43px;
	object-fit: cover;
	border-radius: 5px;
	box-shadow: 0px 8px 8px rgba(0, 0.2, 0, 0.2);

	@media only screen and (max-width: 32rem) {
		height: 303px;
		width: 297px;
	}

	@media only screen and (min-width: 32rem) and (max-width: 55rem) {
		height: 403px;
		width: 403px;
	}
`;

const TitleContainer = styled.div`
	font-size: 20px;
	font-weight: 900;
	margin-top: 5px;
`;
const Title = styled.h3`
	color: #333533;
`;

const SourceContainer = styled.div`
	margin-top: 27px;
`;

const Source = styled.button`
	height: 47px;
	width: 196px;
	font-weight: 900;
	font-size: 20px;
	border: none;
	border-radius: 5px;
	background-color: #f5cb5c;
	color: #333533;
	margin-top: 23px;
	cursor: pointer;
	box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.1);

	&:hover {
		color: whitesmoke;
		transition: all 0.3s ease-in-out;
	}
`;
const handleSource = (type) => {
	if (type === "music") {
		return "Listen Now";
	} else {
		return "Buy Now";
	}
};
const Link = styled.a``;

export default function Release({ release }) {
	const { img, title, type, source, desc } = release;
	return (
		<Container>
			<Image src={img} title={desc} alt={title} />
			<TitleContainer>
				<Title>{title ? title : "Title"}</Title>
			</TitleContainer>
			<SourceContainer>
				<Source>
					{handleSource(type)}
					<Link src={source ? source : "Source"}></Link>
				</Source>
			</SourceContainer>
		</Container>
	);
}
