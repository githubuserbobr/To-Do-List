import { useReducer, useState } from "react";
import "./app.scss";
import CompletedNotes from "./Components/CompletedNotes/CompletedNotes";
import Form from "./Components/Form/Form";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Notes from "./Components/Notes/Notes";
import { ContextApp } from "./context/context";
import { AppReducer, initialState } from "./store/reducer";
function App() {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  const [inputState, setInputState] = useState("");
  const [inputId, setInputId] = useState();
  const [completeNotes, setCompleteNotes] = useState()
  return (
    <ContextApp.Provider
      value={{
        state,
        inputState,
        setInputState,
        dispatch,
        inputId,
        setInputId,
        completeNotes, 
        setCompleteNotes
      }}
    >
      <Header />
      <Navbar />
      <div className="content_container">
        <div className="notes_wrapper">
          <Form />
          <Notes />
        </div>
        <div className="completed_notes_wrapper">
          <CompletedNotes />
        </div>
      </div>
    </ContextApp.Provider>
  );
}

export default App;
