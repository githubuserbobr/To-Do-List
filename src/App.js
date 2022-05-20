import { useReducer } from 'react';
import './App.css';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';
import Notes from './Components/Notes/Notes';
import { AppReducer, ContextApp, initialState } from './store/reducer';
function App() {
  const [state, dispatch] = useReducer(AppReducer, initialState)
  return (
    <ContextApp.Provider value={{state, dispatch}}>
    <Header/>
    <Form/>
    <Notes/>
    </ContextApp.Provider>
  );
}

export default App;
