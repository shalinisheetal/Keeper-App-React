import React, { useState } from "react";

function CreateNote(props){
    const [note, setNote] = useState({
        title:"",
        content:""
    });

    // handle change when a new note is being typed
    function handleChange(event){
        const {name, value} = event.target;
        setNote(prevValue => {
            return {
                ...prevValue,
                [name] : value
            }
        });
    }

    // when add button is clicked
    function submitNote(event){
        props.onAdd(note);
        setNote({
            title:"",
            content:""
        });
        event.preventDefault();
    }

    return (
        <div>
          <form>
            <input name="title" 
                   placeholder="Title" 
                   onChange={handleChange}
                   value={note.title}
            />
            <textarea name="content" 
                      placeholder="Take a note..." 
                      rows="3" 
                      onChange={handleChange}
                      value={note.content} 
            />
            <button onClick={submitNote}>Add</button>
          </form>
        </div>
      );
}

export default CreateNote;