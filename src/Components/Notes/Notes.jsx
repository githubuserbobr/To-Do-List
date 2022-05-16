import React, { useEffect, useState } from "react";
import n from "./notes.module.scss";
import edit_img from "../../assets/images/edit_icon.png";
import dumpster from "../../assets/images/dumpster_icon.png"
import { UsersApi } from "../../API/api";
const Notes = () => {
  const [data, setData] = useState()
  useEffect( () => {
    async function getData() {
      const res = await UsersApi.getUsers()
      return setData(res.data.title)
    } 
    getData()
  },[])
 
  const notes = new Array(3)
    .fill("")
    .map((_, i) => ({ id: i, title: data || null }))
    console.log(notes)
  return (
    <>
      <h2>Tasks</h2>
      <ul>
        {notes.map((note) => (
          <li key={note.id} className={n.notes_items}>
            <strong>{note?.title}</strong>
            {/* <span>{new Date().toLocaleDateString()}</span>  */}
            <img className={n.edit_img} src={edit_img} alt="edit img" />
            <img src={dumpster} alt="dumpster img" />
          </li>
          
        ))}
        
      </ul>
    </>
  );
};
export default Notes;
