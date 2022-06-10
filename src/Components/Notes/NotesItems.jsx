import React from "react";
import n from "./notes.module.scss";
import { ReactComponent as EditIcon } from "../../assets/images/edit_icon.svg";
import { ReactComponent as DeleteIcon } from "../../assets/images/delete_icon.svg";
import { toggleIsCompleted } from "../../store/reducer";
const NotesItems = ({
  index,
  note,
  setInputState,
  setInputId,
  dispatch,
  toggleEditNote,
  removeNotes,
  id,
  checboxValue,
}) => {
  const handleChange = (id, e) => {
    dispatch(toggleIsCompleted(id));
  };

  return (
    <li key={index} className={n.notes_items}>
      <input
        className={n.checkbox}
        type="checkbox"
        onChange={(e) => handleChange(id, e)}
        checked={checboxValue}
      />
      <strong>{note}</strong>
      <div className={n.img_wrapper}>
        <EditIcon
          onClick={() => {
            return (
              setInputState(note),
              setInputId(id),
              dispatch(toggleEditNote(true))
            );
          }}
          className={n.edit_img}
          alt="edit img"
        />
        <DeleteIcon
          onClick={() => {
            return dispatch(removeNotes(id));
          }}
          className={n.dumpster}
          alt="dumpster img"
        />
      </div>
    </li>
  );
};
export default NotesItems;
