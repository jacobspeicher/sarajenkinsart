import './style.css';

export function Home() {
	return (
		<div class="home">
			<h2>Sara Jenkins makes art.</h2>
		</div>
	);
}

function Resource(props) {
	return (
		<a href={props.href} target="_blank" class="resource">
			<h2>{props.title}</h2>
			<p>{props.description}</p>
		</a>
	);
}
