import React, { useEffect, useState } from "react";
import n from "./notes.module.scss";
import edit_img from "../../assets/images/edit_icon.png";
import dumpster from "../../assets/images/dumpster_icon.png"
import { UsersApi } from "../../api/api";
const Notes = () => {
  const [data, setData] = useState()
  useEffect( () => {
    async function getData() {
      const res = await UsersApi.getUsers()
      return setData(res.data)
    } 
    getData()
  },[])
 debugger
  const notes = new Array(3)
    .fill("")
    .map((_, i) => ({  
      id: i, title: data?.title || null }))
    console.log(notes)
  return (
    <div className={n.notes_wrapper}>
      <h2>Tasks</h2>
      <ul>
        {notes.map((note) => (
          <li key={note.id} className={n.notes_items}>
            <strong>{note?.title}</strong>
            <img className={n.edit_img} src={edit_img} alt="edit img" />
            <img className={n.dumpster} src={dumpster} alt="dumpster img" />
          </li> 
        ))}     
      </ul>
    </div>
  );
};
export default Notes;
