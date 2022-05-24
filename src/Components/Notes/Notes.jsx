import React, { useContext, useEffect } from "react";
import n from "./notes.module.scss";
import edit_img from "../../assets/images/edit_icon.png";
import dumpster from "../../assets/images/dumpster_icon.png";
import { ContextApp } from "../../context/context";
import { fetchNotes, removeNotes, toggleIsLoading } from "../../store/reducer";
import { UsersApi } from "../../api/api";
import { ReactComponent as Loader } from "../../assets/loader/loader.svg";
const Notes = () => {
  const { state, dispatch } = useContext(ContextApp);
  console.log(state);
  // make a request for API and dispatch
  useEffect(() => {
    debugger;
    UsersApi.getUsers().then((response) => {
      dispatch(fetchNotes(response.data.title, response.data.id));
    });
  }, []);
  debugger;

  return (
    <div className={n.notes_wrapper}>
      <h2>Tasks</h2>
      <ul>
        {state.notes.map((note, index) => (
          <li key={note.index} className={n.notes_items}>
            <strong>{note.title}</strong>
            <p>id:{index}</p>
            <input className={n.checkbox} type="checkbox" />
            <img className={n.edit_img} src={edit_img} alt="edit img" />
            <img
              onClick={() => dispatch(removeNotes(note.id))}
              className={n.dumpster}
              src={dumpster}
              alt="dumpster img"
            />
          </li>
        ))}
      </ul>
      <Loader />
    </div>
  );
};
export default Notes;
