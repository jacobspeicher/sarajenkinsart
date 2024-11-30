import { Fragment } from 'preact/jsx-runtime';
import './style.css';
import RunnersUp from '../../assets/runners-up.jpg';

export function Home() {
	return (
		<div class="home">
			<h2>Sara Jenkins makes art.</h2>
			<Art image="assets/modern-asceticism.jpg" name="Modern Asceticism" />
			<img src={RunnersUp} />
		</div>
	);
}

function Art(props) {
	return (
		<Fragment>
			<img src={props.image} />
			{/* hover to view title */}
			<h3>{props.name}</h3>
		</Fragment>
	)
}

function Resource(props) {
	return (
		<a href={props.href} target="_blank" class="resource">
			<h2>{props.title}</h2>
			<p>{props.description}</p>
		</a>
	);
}
