import React, { useContext } from "react";
import { ContextApp } from "../../context/context";
import c from "../CompletedNotes/CompletedNotes.module.scss";
import NotesItems from "../Notes/NotesItems";
const CompletedNotes = () => {
  const {
    state,
    setCompleteNotes,
    CompleteNotes,
    setInputState,
    setInputId,
    dispatch,
    toggleEditNote,
    removeNotes,
  } = useContext(ContextApp);

  return (
    <div className={c.completeNotes_wrapper}>
      <h2 className={c.caption}>Completed</h2>
      <NotesItems 
        note={'TEST'}
        state={state}
        dispatch={dispatch}
        setInputState={setInputState}
        setInputId={setInputId}
        setCompleteNotes={setCompleteNotes}
        CompleteNotes={CompleteNotes}
      />
    </div>
  );
};
export default CompletedNotes;
