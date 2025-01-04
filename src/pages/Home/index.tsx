import { useEffect, useState } from 'preact/hooks';
import "./style.css"
import ArtworkJSON from '../../assets/artwork.json';
import { Art } from '../../components/art/art';

export function Home() {
	const [artwork, setArtwork] = useState({});

	useEffect(() => {
		setArtwork(ArtworkJSON.artwork.find((art) => art.featured));
	}, []);

	return (
		<div className="homeContent">
			<Art
				data={artwork}
				setSelectedArt={() => { }}
				setModalIsOpen={() => { }}
				showAvailableTag={false}
			/>
			<a className="socialLink" target="_blank" href="https://www.instagram.com/saramsjenkins">
				<span className="fa-brands fa-instagram"></span>
				saramsjenkins
			</a>
		</div>
	);
}