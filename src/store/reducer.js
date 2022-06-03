import {
  ADD_NOTE,
  EDIT_NOTES,
  FETCH_NOTES,
  REMOVE_NOTE,
  TOGGLE_EDIT_MODE,
  TOGGLE_IS_LOADING,
} from "./types";

export const initialState = {
  editMode: false,
  isLoading: true,
  notes: [{
    title: null,
    id: new Date().valueOf(),
  },],
};

export const AppReducer = (state, action) => {
  switch (action.type) {
    case ADD_NOTE:
      debugger;
      return {
        ...state,
        notes: [
          ...state.notes,
          {
            title: action.payload,
            id: new Date().valueOf(),
          },
        ],
      };
    case REMOVE_NOTE:
      debugger;
      {
        const filteredNote = state.notes.filter(
          (notes) => action.payload !== notes.id
        );
        return { notes: filteredNote };
      }
    case TOGGLE_IS_LOADING:
      debugger;
      return {
        ...state,
        isLoading: action.payload,
      };
    case FETCH_NOTES:
      debugger;
      return {
        editMode: false,
        isLoading: true,
        notes: [
          {
            title: action.payload,
            id: action.id,
          },
        ],
      };
    case TOGGLE_EDIT_MODE:
      debugger;
      return {
        ...state,
        notes: [...state.notes],
        editMode: action.payload,
      };

    case EDIT_NOTES:
      debugger;
      let i = state.notes.findIndex(item => item.id === action.id)
      state.notes[i].title = action.payload
      return {
        ...state,
        notes: [...state.notes], 
        editMode: action.false,
      };
    default:
      return state;
  }
};
export const fetchNotes = (title, id) => {
  return {
    type: FETCH_NOTES,
    payload: title,
    id,
  };
};

export const toggleIsLoading = (value) => {
  return {
    type: TOGGLE_IS_LOADING,
    payload: value,
  };
};
export const addNotes = (value) => {
  return {
    type: ADD_NOTE,
    payload: value,
  };
};

export const removeNotes = (id) => {
  return {
    type: REMOVE_NOTE,
    payload: id,
  };
};
export const editNotes = (value,id) => {
  return {
    type: EDIT_NOTES,
    payload: value,
    id
  };
};
export const toggleEditNote = (value) => {
  return {
    type: TOGGLE_EDIT_MODE,
    payload: value
  }
}
