import { useReducer } from 'react';
import './App.css';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';
import Notes from './Components/Notes/Notes';
import { ContextApp } from './context/context';
import { AppReducer, initialState } from './store/reducer';
function App() {
  const [state, dispatch] = useReducer(AppReducer, initialState)
  console.log(state)
  return (
    <ContextApp.Provider value={{state, dispatch}}>
    <Header/>
    <Form/>
    <Notes/>
    </ContextApp.Provider>
  );
}

export default App;
