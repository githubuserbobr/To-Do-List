import React, { useContext } from "react";
import { ContextApp } from "../../context/context";
import { addNotes, editNotes } from "../../store/reducer";
import f from "./form.module.scss";
const Form = () => {
  const { dispatch, state, inputState, setInputState, inputId } = useContext(ContextApp);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!state.editMode) {
      dispatch(addNotes(inputState))
      setInputState('')
    }
    else {
      debugger
      return (
        dispatch(editNotes(inputState,inputId)),
        setInputState(''))
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={f.form_wrapper}>
        <input
          required
          value={inputState}
          type="text"
          placeholder=" + Add a task, press Enter to save"
          className={f.input}
          onChange={(e) => setInputState(e.currentTarget.value)}
        ></input>
        <button className={f.addButton}>Add</button>
      </div>
    </form>
  );
};
export default Form;
