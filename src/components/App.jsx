import React, { useState } from "react";

import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import CreateNote from "./CreateNote";

function App(){
    const [notes, setNotes] = useState([]);

    // add new note to the array of previous notes
    function addNote(newNote){
        setNotes(prevNotes => {
            return [...prevNotes, newNote];
        });
    }

    // index of note to be deleted passed
    function deleteNote(id){
        setNotes(prevNotes => {
            return prevNotes.filter((note, index) => {
                return id !== index;
            });
        });
    }

    return(
        <div>
            <Header />
            <CreateNote onAdd={addNote}/>
            {notes.map((note,index) => <Note key={index} 
                                     id={index} 
                                     title={note.title} 
                                     content={note.content} 
                                     onDelete={deleteNote}
                                />)}
            <Footer />
        </div>
    );
}

export default App;