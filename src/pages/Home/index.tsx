import { useEffect, useState } from 'preact/hooks';
import './style.css';
import ArtworkJSON from '../../assets/artwork.json';

interface IArtworkJSON {
	name: string;
	source: string;
	dimensions: string;
	price: number;
}

export function Home() {
	const [artworkData, setArtworkData] = useState({});
	const [artwork, setArtwork] = useState([]);

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
							artworkData[year].map((a) => <Art source={a.source} name={a.name} />)
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
		</div>
	);
}

function Art(props) {
	const artPath = `/artwork/${props.source}.jpeg`;
	return (
		<div className='artwork'>
			<img src={artPath} onContextMenu={
				(e) => {
					e.preventDefault();
					return false;
				}}
			/>
			<h4 className="artName">{props.name}</h4>
		</div>
	)
}