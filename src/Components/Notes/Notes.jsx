import React, { useContext, useEffect, useState } from "react";
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

const Notes = () => {
  debugger
  const {
    state,
    dispatch,
    setInputState,
    setInputId,
    setCompleteNotes,
    CompleteNotes,
  } = useContext(ContextApp);

  // make a request for API and dispatch
  useEffect(() => {
    debugger;
    UsersApi.getUsers().then((response) => {
      dispatch(fetchNotes(response.data.title, response.data.id));
      dispatch(toggleIsLoading(false));
    });
  }, []);

  // const handleChange = (e) => {
  //   debugger;
  //   let isChecked = e.target.checked;
  //   return null;
  // };

  if (state.isLoading) {
    return "        rrrrrrrr                              loading...";
  }
  return (
    <div className={n.notes_wrapper}>
      <h2>Tasks</h2>
      <ul>
        {state.notes.map((note, index) => {
          debugger;
          return (
            <NotesItems
              index={index}
              note={note.title}
              setInputState={setInputState}
              setInputId={setInputId}
              dispatch={dispatch}
              toggleEditNote={toggleEditNote}
              removeNotes={removeNotes}
              id={note.id}
              CompleteNotes={CompleteNotes}
              setCompleteNotes={setCompleteNotes}
            />
          );
        })}
      </ul>
    </div>
  );
};
export default Notes;
