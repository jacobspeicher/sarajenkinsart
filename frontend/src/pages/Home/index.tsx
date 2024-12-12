import { Fragment } from 'preact/jsx-runtime';
import { useEffect, useState } from 'preact/hooks';
import './style.css';
import { Artwork } from '../../assets';

export function Home() {
	return (
		<div class="home">
			<h2>Sara Jenkins makes art.</h2>
			{
				Artwork.map(({name, source}) => {
					return <Art source={source} name={name} />
				})
			}
		</div>
	);
}

function Art(props) {
	const artPath = `/${props.source}.jpg`;
	return (
		<Fragment>
			<img src={artPath} />
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
