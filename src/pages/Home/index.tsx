import './style.css';
import { Artwork } from '../../assets';

export function Home() {
	const rows = [];
	for (let i = 0; i < Artwork.length; i += 3) {
		const first = Artwork[i];
		const second = i + 1 < Artwork.length ? Artwork[i + 1] : null;
		const third = i + 2 < Artwork.length ? Artwork[i + 2] : null;
		
		rows.push(
			<div className="column">
				<Art source={first.source} name={first.name} />
				{second ? <Art source={second.source} name={second.name} /> : <div className="spacer"></div>}
				{third ? <Art source={third.source} name={third.name} /> : <div className="spacer"></div>}
			</div>
		);
	}

	return (
		<div class="home">
			<h2>Sara Jenkins makes art.</h2>
			<div className="row">
				{rows}
			</div>
		</div>
	);
}

function Art(props) {
	const artPath = `/${props.source}.jpg`;
	return (
		<div className='artwork'>
			<img src={artPath} />
			{/* hover to view title */}
			<h3>{props.name}</h3>
		</div>
	)
}