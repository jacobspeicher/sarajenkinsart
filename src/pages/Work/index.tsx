import { useEffect, useState } from 'preact/hooks';
import './style.css';
import ArtworkJSON from '../../assets/artwork.json';
import { ArtworkModal } from '../../components/artwork-modal/artwork-modal';
import { IArtworkData } from '../../constants';
import { Art } from '../../components/art/art';

export function Work() {
	const [artworkData, setArtworkData] = useState({});
	const [artwork, setArtwork] = useState([]);
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [selectedArt, setSelectedArt] = useState({});

	useEffect(() => {
		const artworkByYear = {};

		ArtworkJSON.artwork.forEach((art) => {
			if (!(art.year in artworkByYear)) {
				artworkByYear[art.year] = [];
			}
			artworkByYear[art.year].push(art);
		});

		setArtworkData(artworkByYear);
	}, [])

	useEffect(() => {
		const art = [];

		Object.keys(artworkData).slice().reverse().forEach((year) => {
			art.push(
				<>
					<h3 id={year} className="year">{year}</h3>
					<div className="artworkContainer">
						{
							artworkData[year]
								.sort((a, b) => {
									if (b.available != 1) return -1;
									if (a.avaialble != 1) return 1;
									return 0;
								})
								.map((a) => {
								const artworkData: IArtworkData = {
									source: a.source,
									name: a.name,
									dimensions: a.dimensions,
									price: a.price,
									year: a.year,
									available: a.available
								}
								return <Art
									data={artworkData}
									setSelectedArt={setSelectedArt}
									setModalIsOpen={setModalIsOpen}
								/>
							})
						}
					</div>
				</>
			)
		});

		setArtwork(art);
	}, [artworkData]);

	return (
		<div className="home">
			<nav className="artNav">
				<h2 className="pageHeader">Artwork</h2>
				<ul className="yearList">
					{
						Object.keys(artworkData).slice().reverse().map((year) => {
							return (
								<li className="yearLink">
									<a href={`#${year}`}>
										{year}
									</a>
								</li>
							)
						})
					}
				</ul>
			</nav>
			{artwork}
			{
				modalIsOpen &&
				<ArtworkModal
					data={selectedArt as IArtworkData}
					setIsOpen={setModalIsOpen}
				/>
			}
		</div>
	);
}