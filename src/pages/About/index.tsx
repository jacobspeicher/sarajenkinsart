import { useEffect, useState } from 'preact/hooks';
import './style.css';
import ArtistStatement from './artist-statement.json';
import CV from './cv.json';
import Bio from './bio.json';
import { Fragment } from 'preact/jsx-runtime';

function createParagraphs(array: string[]) {
	return array.map((e) => {
		return (
			<p className="paragraph">
				{e}
			</p>
		)
	});
}

interface Experience {
	yearStart: number | string;
	yearEnd?: number | string;
	list: string[];
	important: string;
	important2?: string;
	space?: string;
	location?: string;
}

interface Collaboration {
	name: string;
	projects: Project[];
}

interface Project {
	name: string;
	yearStart: number | string;
	yearEnd?: number | string;
	title: string;
	medium: string;
	available?: Link[];
}

interface Link {
	title: string;
	link: string;
}

function createCVBlock(education: Experience[]) {
	return education.map((e) => {
		let timeSpan: string = `${e.yearStart}`;
		if (e.yearEnd) timeSpan += ` - ${e.yearEnd}`;
		return (
			<div className="cvBlock">
				<span className="cvImportant">{e.important}</span>
				{e.important2 && <span className="cvImportant">{e.important2}</span>}
				<div className="cvTitle">
					<span>{timeSpan}</span>
					<div className="separator" role="presentation">|</div>
					{e.space &&
						<span>{e.space}</span>
					}
					{e.location && 
						<Fragment>
							<div className="separator" role="presentation">|</div>
							<span>{e.location}</span>
						</Fragment>
					}
				</div>
				<ul>
				{
					e.list.map((i) => {
						return <li>{i}</li>;
					})
				}
				</ul>
			</div>
		)
	});
}

function createCollaborationsBlock(data: Collaboration[]) {
	return data.map((d) => {
		const projectElements = d.projects.map((p) => {
			let timeSpan: string = `${p.yearStart}`;
			if (p.yearEnd) timeSpan += ` - ${p.yearEnd}`;
			return (
				<div className="cvBlock collaborationProject">
					<span className="cvImportant">{p.name}</span>
					<div className="cvTitle">
						<span>{timeSpan}</span>
						<div className="separator" role="presentation">|</div>
						<span>{p.title}</span>
						<span className="separator" role="presentation">|</span>
						<span>{p.medium}</span>
					</div>
					{p.available &&
						<ul className="collaborationAvailable">
							{p.available.map((a) => {
								return <li><a href={a.link}>{a.title}</a></li>
							})}
						</ul>
					}
				</div>
			);
		});

		return (
			<div className="cvBlock">
				<span className="cvImportant collaborationCollaborator">{d.name}</span>
				{projectElements}
			</div>
		);
	});
}

function createCV(
	education: Experience[],
	awards: Experience[],
	experience: Experience[],
	exhibitions: Experience[],
	collaborations: Collaboration[]
) {
	const educationElements = createCVBlock(education);
	const awardsElements = createCVBlock(awards);
	const experienceElements = createCVBlock(experience);
	const exhibitionElements = createCVBlock(exhibitions);
	const collaborationsElements = createCollaborationsBlock(collaborations);
	return (
		<div className="cv">
			<div className="cvLeft">
				<h4>Education</h4>
				{educationElements}
				<h4>Awards</h4>
				{awardsElements}
				<h4>Professional Experience</h4>
				{experienceElements}
			</div>
			<div className="cvRight">
				<h4>Selected Exhibitions</h4>
				{exhibitionElements}
				<h4>Collaborations</h4>
				{collaborationsElements}
			</div>
		</div>
	);
}

export function About() {
	const [artistStatement, setArtistStatement] = useState([]);
	const [bio, setBio] = useState([]);
	const aboutImagePath = "/about_image.jpg";

	useEffect(() => {
		setArtistStatement(createParagraphs(ArtistStatement.paragraphs));
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
						<a href="#cv">
							CV
						</a>
					</li>
					<li className="yearLink">
						<a href="#biography">
							Biography
						</a>
					</li>
				</ul>
			</nav>
			<div className="artistImageAndStatement">
				<img className="aboutImage" src={aboutImagePath} onContextMenu={
					(e) => {
						e.preventDefault();
						return false;
					}}
				/>
				<div>
					<h3 id="artist-statement" className="year">Artist Statement</h3>
					<div className="paragraphContainer">
						{artistStatement}
					</div>
				</div>
			</div>
			<h3 id="cv" className="year">CV</h3>
			<div className="paragraphContainer">
				{createCV(CV.education, CV.awards, CV.experience, CV.exhibitions, CV.collaborations)}
			</div>
			<h3 id="biography" className="year">Biography</h3>
			<div className="paragraphContainer">
				{bio}
			</div>
		</div>
	);
}