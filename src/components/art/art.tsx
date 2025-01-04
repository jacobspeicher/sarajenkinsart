export function Art({ data, setModalIsOpen, setSelectedArt }) {
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
		</div>
	)
}