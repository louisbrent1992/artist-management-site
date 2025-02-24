import { Icon } from "@iconify/react";
import {
	Facebook,
	Instagram,
	LocalGroceryStore,
	Twitter,
	YouTube,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import styled from "styled-components";
import OptimizedImage from "./OptimizedImage";

const Info = styled.div`
	height: 100%;
	width: 100%;
	color: whitesmoke;
	position: absolute;
	z-index: 2;
	opacity: 0;
	transition: all 0.5s ease;
	background-color: rgba(0, 0, 0, 0.5);
	border-radius: 20px;
`;

const ArtistContainer = styled.div`
	display: grid;

	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	height: 100%;
	width: 100%;
	position: relative;
	&:hover ${Info} {
		transition: all 0.5s ease;
		opacity: 1;
	}
`;

const Image = styled(OptimizedImage)`
	border-radius: 20px;
	z-index: 1;
	position: relative;
	object-fit: cover;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
	width: 100%;
	height: auto;
	max-height: 200px; // Set a maximum height for the images
	transition: all 0.5s ease;
`;

const TopRow = styled.div`
	display: flex;
	height: 50%;
	justify-content: space-between;
`;

const StoreIconContainer = styled.div`
	margin: 10px;

	a {
		color: whitesmoke;
	}

	a:visited {
		color: whitesmoke;
	}

	a:hover {
		transition: color 0.2s ease-in-out;
		color: #f5cb5c;
		cursor: pointer;
	}
`;

const Website = styled.div`
	margin: 10px;
	font-weight: 900;

	a {
		text-decoration: none;
		color: whitesmoke;
	}

	a:visited {
		color: whitesmoke;
	}

	a:hover {
		transition: color 0.2s ease-in-out;
		color: #f5cb5c;
		cursor: pointer;
	}
`;

const BottomRow = styled.div`
	display: flex;
	height: 50%;
	justify-content: space-between;
	align-items: flex-end;
`;

const Name = styled.div`
	margin: 10px;
	font-weight: 900;
	color: whitesmoke;

	&:hover {
		transition: color 0.2s ease-in-out;
		color: #f5cb5c;
		cursor: pointer;
	}
`;

const SocialContainer = styled.div``;

const SocialMediaIcons = styled.div`
	margin: 10px 10px 5px 30px;
	display: flex;
	text-decoration: none;
	gap: 5px;

	a {
		color: whitesmoke;
	}

	a:visited {
		color: whitesmoke;
	}

	a:hover {
		transition: color 0.2s ease-in-out;
		color: #f5cb5c;
		cursor: pointer;
	}
`;

export default function Artist({ name, website, img, store, social }) {
	return (
		<ArtistContainer>
			<Image src={img} alt={name} />

			<Info>
				<TopRow>
					<StoreIconContainer>
						<Link to={store}>{store && <LocalGroceryStore />}</Link>
					</StoreIconContainer>
					<Website>
						<Link to={website}>Website</Link>
					</Website>
				</TopRow>
				<BottomRow>
					<Name>{name && name}</Name>
					<SocialContainer>
						<SocialMediaIcons>
							{social.Youtube.url && (
								<Link to={social.Youtube.url}>
									<YouTube />
								</Link>
							)}
							{social.Instagram.url && (
								<Link to={social.Instagram.url}>
									<Instagram />
								</Link>
							)}
							{social.Facebook.url && (
								<Link to={social.Facebook.url}>
									<Facebook />
								</Link>
							)}
							{social.Twitter.url && (
								<Link to={social.Twitter.url}>
									<Twitter />
								</Link>
							)}

							{social.Spotify.url && (
								<Link to={social.Spotify.url}>
									<Icon icon="mdi:spotify" width="25" height="25" />
								</Link>
							)}
						</SocialMediaIcons>
					</SocialContainer>
				</BottomRow>
			</Info>
		</ArtistContainer>
	);
}
