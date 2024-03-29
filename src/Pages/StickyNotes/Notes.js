import React from "react";


const Note = ({ text, onDelete }) => {
  return (
    <div className="note">
      <span>{text}</span>
      <button className="delete" onClick={onDelete}>Delete</button>
    </div>
  );
};

export default Note;