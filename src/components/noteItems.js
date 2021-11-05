import Square from "./UI/squareNote";
import React, { useState, useEffect } from "react";
import './noteItems.css';



const AllNotes = (props) => {
	

	const [testNote, setTest] = useState(props.notes);
    const [enteredValue, setEnteredValue] = useState('');
  
    //checks to see if note exists and overwrites it.
	const noteReader = (event) => {
		const e = Number(event.target.id);
        const f = event.target.value;

    //    testNote.forEach(note =>{
    //         console.log(e)
    //     });

        for (let note of testNote){
            if(e === Number(note.id)) {
                let ID = note.id;
                let index = testNote.findIndex(record => record.id === ID)

              //  testNote.splice(index, 1, {id: e, text: f})

                setTest(prevTestNote => {
                    return [...prevTestNote, testNote.splice(index, 1, {id: e, text: f}) ];
                });
                // console.log("it works!")
            }
        }
        
		console.log(testNote);
	};

    //borrowed code for implementation of listener
    const goalInputChangeHandler = event => {
        if (event.target.value.trim().length > 0) {
        
        }
        setEnteredValue(event.target.value);
       
               
      };
    

  
        const PlusNote = (event) => {
          
            event.preventDefault();
         
    //      const e = Number(event.target.id);
    //      for (let note of testNote) {
    //      if(e === Number(note.id)) {
    //          noteReader(event)
    //      } 
    //  }
    const num = Math.floor(Math.random() * 200);
    setTest(prevTestNote => {
        return [...prevTestNote, {id: num, key: num, text: enteredValue} ];
    });
    
         
            
       };

      
       
       useEffect(() => {
           console.log(testNote)
           setEnteredValue('');


       },[testNote])

       //Function to remove note by ID using double-click
       const removeNote = (id) => {
           setTest(prevNotes => {
               const notesList = prevNotes.filter(note => note.id !== id);
               return notesList;
           })
       };

        //Function for removing all notes. Tied to button. 
        //Press twice to remove extra blank note
       const removeAll = (id) => {
           setTest(['']);
           const element = document.querySelector('textarea');
           element.remove();
       };

  //Attempt to get notes to be draggable
        const allowPlacement = (event) => {
            event.preventDefault();
        };

        const move = (event) => {
            event.dataTransfer.setData("text",testNote.id[0]);
        };

       const placement = (event) => {
           event.preventDefault();
           const data = event.dataTransfer.getData("text");
           event.target.appendChild(document.getElementById(data));
       };
          
    // const dropNote = event => {
    //     event.target.style.left = `${event.pageX -50}px`;
    //     event.target.style.top = `${event.pageY - 50}`;
    // }

    // const dragOver = event => {
    //     event.stopPropagation();
    //     event.preventDefault();
    // }


	return (
		<React.Fragment>
        <div id="div1" 
        ondrop={placement} ondragover={allowPlacement}
        // onDragOver={dragOver}
         >
			 {testNote.map((note) => (
				<Square
                    
                    id={note.id}
					key={note.id}
					defaultValue={note.text}
					readBlur={noteReader}
                    noteRemoval={removeNote}
                    draggable="true"
                   ondragstart={move}
                    // onDragEnd={dropNote}
                
				>
                
                </Square> 
               
                
			))}
            
            {/*Ability to enter into a new note */}
            <textarea 
            className="pattern"
            onChange={goalInputChangeHandler}
            // key={props.notes.length}
            // id={props.notes.length}
            value={enteredValue}
            >
            </textarea>

            <button 
            className="button-add"
            type="button"
            onClick={PlusNote}
            key={props.notes.length + 1}
            id={props.notes.length + 1}
            >
            +</button>
           

            <button
            className="button-remove"
            onClick={removeAll}
            key={testNote.id}
            >
               Remove All
            </button>

            </div>
            
	
        </React.Fragment>

     
        
	);
};

export default AllNotes;
