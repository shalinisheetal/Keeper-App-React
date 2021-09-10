import React, { useState } from "react";

// Material ui imports
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateNote(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  // for expanding the create area
  const [isTyping, setIsTyping] = useState(false);

  // handle change when a new note is being typed
  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  // when add button is clicked
  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  function expand() {
    setIsTyping(true);
  }

  return (
    <div>
      <form className="create-note">
        {isTyping && (
          <input
            name="title"
            placeholder="Title"
            onChange={handleChange}
            value={note.title}
          />
        )}
        <textarea
          onClick={expand}
          name="content"
          placeholder="Take a note..."
          rows={isTyping ? 3 : 1}
          onChange={handleChange}
          value={note.content}
        />
        <Zoom in={isTyping}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateNote;
