import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledPicture = styled.picture`
	width: 100%;
	height: auto;
`;

const StyledImg = styled.img`
	width: 100%;
	height: auto;
	object-fit: cover;
`;

const OptimizedImage = ({ src, alt, ...props }) => {
	// Generate WebP version of the image
	const webpSrc = src.replace(/\.(png|jpe?g)$/i, ".webp");

	return (
		<StyledPicture>
			<source srcSet={webpSrc} type="image/webp" />
			<StyledImg src={src} alt={alt} loading="lazy" {...props} />
		</StyledPicture>
	);
};

OptimizedImage.propTypes = {
	src: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired,
};

export default OptimizedImage;
