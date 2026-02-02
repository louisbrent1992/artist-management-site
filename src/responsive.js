import { css } from "styled-components";

export const smallMobile = (props) => {
	return css`
		@media only screen and (max-width: 20rem) {
			${props}
		}
	`;
};

export const mobile = (props) => {
	return css`
		@media only screen and (max-width: 40rem) {
			${props}
		}
	`;
};

export const tablet = (props) => {
	return css`
		@media only screen and (min-width: 40rem) and (max-width: 64rem) {
			${props}
		}
	`;
};

export const desktop = (props) => {
	return css`
		@media only screen and (min-width: 64rem) {
			${props}
		}
	`;
};
