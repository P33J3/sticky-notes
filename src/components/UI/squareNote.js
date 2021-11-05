const Square = (props) => {

const noteSubmit = (event) => {
    event.preventDefault();
    props.readBlur(event)
};

const removeNoteRequest = () => {
    props.noteRemoval(props.id);
};

	return (
		<span>
			<textarea
                className="pattern"
				id={props.id}
				key={props.id}
				defaultValue={props.defaultValue}
                onBlur={noteSubmit}
                onDoubleClick={removeNoteRequest}
			></textarea>
            </span>
	);
};

export default Square;
