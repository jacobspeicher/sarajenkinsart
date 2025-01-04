import './art.css';

export function Art({ data, setModalIsOpen, setSelectedArt, showAvailableTag = true}) {
	const artPath = `/artwork/${data.source}.jpeg`;
	return (
		<div className='artwork' onClick={() => {
			setModalIsOpen(true);
			setSelectedArt(data);
		}}>
			<img className='whiteBorder' src={artPath} onContextMenu={
				(e) => {
					e.preventDefault();
					return false;
				}}
			/>
			{
				data.available === 1 && showAvailableTag &&
				<span className="availableTag">Available</span>
			}
		</div>
	)
}