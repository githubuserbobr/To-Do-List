import React, { useContext, useState } from "react";
import { ContextApp } from "../../context/context";
import { addNotes } from "../../store/reducer";
import f from "./form.module.scss";
const Form = () => {
  const [value, setValue] = useState();
  const { dispatch } = useContext(ContextApp);
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addNotes(value));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={f.form_wrapper}>
        <input
          required
          type="text"
          placeholder=" + Add a task, press Enter to save"
          className={f.input}
          onChange={(e) => setValue(e.currentTarget.value)}
        ></input>
        <button className={f.addButton}>Add</button>
      </div>
    </form>
  );
};
export default Form;
