import React from "react";
import "./notes.scss";
import edit_img from "../../assets/images/edit_icon.png";
const Notes = () => {
  const notes = new Array(3)
    .fill("")
    .map((_, i) => ({ id: i, tittle: `note ${i + 1}` }));
  return (
    <>
      <h2>Tasks</h2>
      <ul>
        {notes.map((note) => (
          <li key={note.id} className="notes_items">
            {note?.tittle}
            <img src={edit_img} alt="edit img" />
          </li>
          
        ))}
        
      </ul>
    </>
  );
};
export default Notes;
