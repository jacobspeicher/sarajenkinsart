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
			/>
			<a target="_blank" href="https://www.instagram.com/saramsjenkins">Instagram</a>
		</div>
	);
}