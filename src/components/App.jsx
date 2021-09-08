import React, { useState } from "react";

import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import CreateNote from "./CreateNote";

function App(){
    const [notes, setNotes] = useState([]);

    function addNote(newNote){
        setNotes(prevNotes => {
            return [...prevNotes, newNote];
        });
    }

    return(
        <div>
            <Header />
            <CreateNote onAdd={addNote}/>
            {notes.map(note => <Note key={note.key} title={note.title} content={note.content}/>)}
            <Footer />
        </div>
    );
}

export default App;