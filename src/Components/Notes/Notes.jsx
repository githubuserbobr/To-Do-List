import React, { useContext, useEffect } from "react";
import n from "./notes.module.scss";
import { ContextApp } from "../../context/context";
import {
  fetchNotes,
  removeNotes,
  toggleIsLoading,
  toggleEditNote,
} from "../../store/reducer";
import { UsersApi } from "../../api/api";
import NotesItems from "./NotesItems";
import { SpringSpinner } from "react-epic-spinners";

const Notes = () => {
  const {
    state,
    dispatch,
    setInputState,
    setInputId,
    setCompleteNotes,
    completeNotes,
  } = useContext(ContextApp);

  // make a request for API and dispatch
  useEffect(() => {
    UsersApi.getUsers().then((response) => {
      dispatch(fetchNotes(response.data.title, response.data.id));
      dispatch(toggleIsLoading(false));
    });
  }, [dispatch]);
  if (state.isLoading) {
    return <SpringSpinner className={n.loader} color="#440BA0"/>
  }
  return (
    <div className={n.notes_wrapper}>
      <h2>Tasks</h2>
      <ul>
        {state.notes.map((note, index) => { 
        if (note.isCompleted) {
         return null
        }
        return <NotesItems
              key={note.id}
              index={index}
              note={note.title}
              setInputState={setInputState}
              setInputId={setInputId}
              dispatch={dispatch}
              toggleEditNote={toggleEditNote}
              removeNotes={removeNotes}
              id={note.id}
              completeNotes={completeNotes}
              setCompleteNotes={setCompleteNotes}
            />
})}
      </ul>
    </div>
  );
};
export default Notes;
