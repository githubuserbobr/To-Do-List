import React, { useState } from "react";
import f from"./form.module.scss";
const Form = () => {
  const [value, setValue] = useState()
  const handleSubmit = (event) => {
    event.preventDefault()

    if (value.trim()) {
      
    }
  }
  console.log(value)
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          placeholder=" + Add a task, press Enter to save"
          className={f.input}
          onChange={(e) => setValue(e.currentTarget.value)}
        ></input>
      </div>
    </form>
  );
};
export default Form;
