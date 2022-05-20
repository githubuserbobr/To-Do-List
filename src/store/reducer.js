import React from "react";
export const ContextApp = React.createContext();

export const initialState = {
    isLoading: false
};

export const AppReducer = (state, action) => {
    switch(action.type) {
        case 'ADD-NOTE':
            return {
                ...state,
                ...action.payload
            };
        default:
            return state
    }
};