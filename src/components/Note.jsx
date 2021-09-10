import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

function Note(props) {
  // call delete function by passing index of note to be deleted
  function handleDelete() {
    props.onDelete(props.id);
  }
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleDelete}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
