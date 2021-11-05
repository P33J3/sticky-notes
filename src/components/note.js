import React, { useState } from "react";
// import Square from './UI/squareNote'
import AllNotes from "./noteItems";

const Note = (props) => {
	const [typeNote, setTypeNote] = useState([
		{
			id: 0,
            key: 0,
			text: "Know Thyself",
		},
		{
			id: 1,
            key: 1,
			text: "Make hay while the sun shines",
		},
		{
			id: 2,
            key: 2,
			text: "Eat your vegetables",
		},
	]);

	//const createNote = (note) => {
		// setTypeNote((prevNotes) => {
		// 	return [
		// 		...prevNotes,
		// 		{ id: note.id, text: note.defaultValue },
		// 	];
		// });
        //console.log(note)
	// };

	return (
		<AllNotes
			notes={typeNote}
           // noteCreator={createNote}
			// onDelete={props.deleteNote}
		/>
	);
};

export default Note;
