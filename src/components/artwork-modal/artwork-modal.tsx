import { useEffect, useState } from 'preact/hooks';
import { IArtworkData } from '../../constants';
import './artwork-modal.css';

interface IArtworkModal {
	data: IArtworkData;
	setIsOpen: (isOpen: boolean) => void;
}

export function ArtworkModal({ data, setIsOpen }: IArtworkModal) {
	console.log(data);
	const [artPath, setArtPath] = useState("");
	const [dimsAreNumbers, setDimsAreNumbers] = useState(false);

	useEffect(() => {
		console.log(data.dimensions);
		setArtPath(`/artwork/${data.source}.jpeg`);
		setDimsAreNumbers(data.dimensions.every((value) => typeof value === "number"));
	}, [data]);

	return (
		<>
			<div className="darkBackground" onClick={() => setIsOpen(false)} />
			<div className="centered">
				<div className="modal" onClick={() => setIsOpen(false)}>
					<div className="modalContent" onClick={(e) => e.stopPropagation()}>
						<button className="closeBtn" onClick={() => setIsOpen(false)}>X</button>
						<img className="modalArtwork" src={artPath} onContextMenu={(e) => { e.preventDefault(); return false; }} />
						<div className="modalHeader">
							<h1 className="heading">{data.name}</h1>
						</div>
						<p>{data.year}</p>
						{dimsAreNumbers && <Dimension dim={data.dimensions as number[]} />}
						{!dimsAreNumbers &&
							data.dimensions.map((dim) => <Dimension dim={dim} />)
						}
						{data.available === 1 && <p>Available: Inquire about price</p>}
						{data.available != 1 && <p>Not Available</p>}
					</div>
				</div>
			</div>
		</>
	);
}

function Dimension(props: { dim: number[] }) {
	return (
		<p>W: {props.dim[0]}" x H: {props.dim[1]}"</p>
	);
}