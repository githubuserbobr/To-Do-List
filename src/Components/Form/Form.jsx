import React, { useState } from "react";
import f from"./form.module.scss";
const Form = () => {
  const [value, setValue] = useState()
  const handleSubmit = (event) => {
    event.preventDefault()

    // if (value.trim()) {
      
    // }
  }
  
  console.log(value)
  return (
    <form onSubmit={handleSubmit}>
      <div className={f.form_wrapper}>
        <input
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
