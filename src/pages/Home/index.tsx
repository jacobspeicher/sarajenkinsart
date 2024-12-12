import { Fragment } from 'preact/jsx-runtime';
import { useEffect, useState } from 'preact/hooks';
import './style.css';
import { Artwork } from '../../assets';

export function Home() {
	const rows = [];
	for (let i = 0; i < Artwork.length; i += 2) {
		const first = Artwork[i];
		let second = null;
		if (i + 1 < Artwork.length) {
			second = Artwork[i + 1];
		}
		rows.push(
			<tr>
				<td><Art source={first.source} name={first.name} /></td>
				{
					second ? 
					<td><Art source={second.source} name={second.name} /></td> :
					<td></td>
				}
			</tr>
		);
	}

	return (
		<div class="home">
			<h2>Sara Jenkins makes art.</h2>
			<table>
				{rows}
			</table>
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

function Resource(props) {
	return (
		<a href={props.href} target="_blank" class="resource">
			<h2>{props.title}</h2>
			<p>{props.description}</p>
		</a>
	);
}
