import React from "react";
import styled from "styled-components";
import { merch } from "../../data/merch";
import Product from "./Product";

const Container = styled.div`
	padding: 20px;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
`;

export default function Products() {
	return (
		<Container>
			{merch.map((item) => (
				<Product item={item} key={item.id} />
			))}
		</Container>
	);
}
