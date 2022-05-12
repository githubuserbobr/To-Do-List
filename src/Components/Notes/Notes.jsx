import React from "react";
import n from "./notes.module.scss";
import edit_img from "../../assets/images/edit_icon.png";
import dumpster from "../../assets/images/dumpster_icon.png"
const Notes = () => {
  const notes = new Array(3)
    .fill("")
    .map((_, i) => ({ id: i, tittle: `note ${i + 1}` }));
  return (
    <>
      <h2>Tasks</h2>
      <ul>
        {notes.map((note) => (
          <li key={note.id} className={n.notes_items}>
            {note?.tittle}
            <img className={n.edit_img} src={edit_img} alt="edit img" />
            <img src={dumpster} alt="dumpster img" />
          </li>
          
        ))}
        
      </ul>
    </>
  );
};
export default Notes;
