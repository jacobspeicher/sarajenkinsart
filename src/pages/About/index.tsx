import { useEffect, useState } from 'preact/hooks';
import './style.css';
import ArtistStatement from './artist-statement.json';
import Bio from './bio.json';

function createParagraphs(array: string[]) {
	return array.map((e) => {
		return (
			<p>
				{e}
			</p>
		)
	});
}

export function About() {
	const [artistStatement, setArtistStatement] = useState([]);
	const [bio, setBio] = useState([]);

	useEffect(() => {
		setArtistStatement(createParagraphs(ArtistStatement.paragraphs));
	}, []);

	useEffect(() => {
		setBio(createParagraphs(Bio.paragraphs));
	}, []);

	return (
		<div className="about">
			<nav className="artNav">
				<h2 className="pageHeader">About</h2>
				<ul className="yearList">
					<li className="yearLink">
						<a href="#artist-statement">
							Artist Statement
						</a>
					</li>
					<li className="yearLink">
						<a href="#biography">
							Biography
						</a>
					</li>
				</ul>
			</nav>
			<h3 id="artist-statement" className="year">Artist Statement</h3>
			<div className="paragraphContainer">
				{artistStatement}
			</div>
			<h3 id="biography" className="year">Biography</h3>
			<div className="paragraphContainer">
				{bio}
			</div>
		</div>
	);
}