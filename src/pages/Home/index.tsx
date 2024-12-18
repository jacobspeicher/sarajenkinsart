import './style.css';
import ArtworkJSON from '../../assets/artwork.json';

interface IArtworkJSON {
	name: string;
	source: string;
	dimensions: string;
	price: number;
}

export function Home() {
	const Artwork = ArtworkJSON.artwork;
	
	return (
		<div className="home">
			<h2>Artwork</h2>
			<div className="artworkContainer">
				{
					Artwork.map((art) => {
						return (
							<Art source={art.source} name={art.name} />
						)
					})
				}
			</div>
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
					console.log('hello');
					return false;
				}}
			/>
			<h3>{props.name}</h3>
		</div>
	)
}