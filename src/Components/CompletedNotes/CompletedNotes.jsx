import React, { useContext } from "react";
import { ContextApp } from "../../context/context";
import { removeNotes, toggleEditNote } from "../../store/reducer";
import c from "../CompletedNotes/CompletedNotes.module.scss";
import NotesItems from "../Notes/NotesItems";
const CompletedNotes = () => {
  const {
    state,
    setCompleteNotes,
    completeNotes,
    setInputState,
    setInputId,
    dispatch,
  } = useContext(ContextApp);
  return (
    <div className={c.completeNotes_wrapper}>
      <h2 className={c.caption}>Completed</h2>
      {state.notes.map((note, index) => {
        if (note.isCompleted) {
          return (
            <NotesItems
              checboxValue={note.isCompleted}
              key={note.id}
              id={note.id}
              toggleEditNote={toggleEditNote}
              removeNotes={removeNotes}
              note={note.title}
              state={state}
              dispatch={dispatch}
              setInputState={setInputState}
              setInputId={setInputId}
              setCompleteNotes={setCompleteNotes}
              completeNotes={completeNotes}
            />
          );
        }
        return null;
      })}
    </div>
  );
};
export default CompletedNotes;
