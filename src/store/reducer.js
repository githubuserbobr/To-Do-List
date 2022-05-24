import { ADD_NOTE,  FETCH_NOTES,  REMOVE_NOTE, TOGGLE_IS_LOADING } from "./types";

export const initialState = {
  isLoading: true,
  notes: [{
      id: null,
      userId: null,
      isCompleted: false,
  }],
};

export const AppReducer = (state, action) => {
  switch (action.type) {
    case ADD_NOTE:
      debugger;
      return {
        ...state,
        notes: [...state.notes, {
            title: action.payload,
            id: new Date().valueOf(),
        }],
      };
      case REMOVE_NOTE: 
      debugger 
      {
        const filteredNote = state.notes.filter((notes) => action.payload !== notes.id )
        return {notes: filteredNote}
      }
    case TOGGLE_IS_LOADING:
      debugger
      return {
        ...state,
        isLoading: action.payload,
      };
    case FETCH_NOTES:
        debugger
      return {
          notes: [
        ...state.notes,
        {
            title: action.payload,
            id: action.payload,
            isLoading: false
        } 
    ]       
      };
    default:
      return state;
  }
};
export const fetchNotes = (title, id) => {
  return ({
    type: FETCH_NOTES,
    payload: title, id
  })
}

export const toggleIsLoading = (value) => {
    return ({
        type: TOGGLE_IS_LOADING,
        payload: value
    })
}

export const addNotes = (value) => {
    return ({
        type: ADD_NOTE,
        payload: value
    })
}

export const removeNotes = (id) => {
    return ({
        type: REMOVE_NOTE,
        payload: id
    })
}