import React from "react";
import styled from "styled-components";
import Products from "./Store/Products";

const Container = styled.div`
	border: 1px solid red;
`;

const Title = styled.h1`
	margin-top: 80px;
	font-size: 48px;
	margin-left: 1rem;
`;

const FilterContainer = styled.div`
	display: flex;
	justify-content: space-between;
`;

const Filter = styled.div`
	margin: 20px;

	@media only screen and (max-width: 32rem) {
		width: 0px 20px;
		display: flex;
		flex-direction: column;
	}
`;

const FilterText = styled.span`
	font-size: 20px;
	font-weight: 600;
	margin-right: 20px;

	@media only screen and (max-width: 55rem) {
		margin-right: 0px;
	}
`;

const Select = styled.select`
	padding: 10px;
	margin-right: 20px;

	@media only screen and (max-width: 55rem) {
		margin: 10px 0px;
	}
`;
const Option = styled.option``;

export default function AllReleases() {
	return (
		<Container>
			<Title>Releases</Title>
			<FilterContainer>
				<Filter>
					<FilterText>Filter Products: </FilterText>
					<Select>
						<Option disabled selected>
							Color
						</Option>
						<Option>whitesmoke</Option>
						<Option>#333533</Option>
						<Option>Red</Option>
						<Option>Blue</Option>
						<Option>Yellow</Option>
						<Option>Green</Option>
					</Select>
					<Select>
						<Option disabled selected>
							Size
						</Option>
						<Option>XS</Option>
						<Option>S</Option>
						<Option>M</Option>
						<Option>L</Option>
						<Option>XL</Option>
					</Select>
				</Filter>
				<Filter>
					<FilterText>Sort Products: </FilterText>
					<Select>
						<Option selected>Newest</Option>
						<Option>Price (asc)</Option>
						<Option>Price (desc)</Option>
					</Select>
				</Filter>
			</FilterContainer>
			<Products />
		</Container>
	);
}
