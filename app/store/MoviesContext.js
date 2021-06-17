import React,  { createContext, useReducer, useContext } from 'react';

export const MoviesContext = createContext();

// Initial state
const initialState = {
    category: '',
    favorites: []
};

// Actions
export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";
export const SELECT_CATEGORY = "SELECT_CATEGORY";
// Action creators
export function addFavorite(movie) {
    return { type: ADD_FAVORITE, movie }
}
export function removeFavorite(movie) {
    return { type: REMOVE_FAVORITE, movie }
}
export function selectCategory(category) {
    return { type: SELECT_CATEGORY, category }
}

// Reducer
export function moviesReducer(state, action) {
    switch (action.type) {
        case ADD_FAVORITE:
            return {
                ...state,
                favorites: [...state.favorites, action.movie]
            };
        case REMOVE_FAVORITE:
            let copy = { ...state };
            copy = {
                ...copy,
                favorites: copy.favorites.filter((movie) => movie.title !== action.movie.title)
            }
            return copy;
        case SELECT_CATEGORY:
            return {
                ...state,
                category: action.category
            }
        default:
            return state;
    }
}

export function MoviesProvider(props) {
    const [state, dispatch] = useReducer(moviesReducer, initialState);

    const moviesData = { state, dispatch};

    return <MoviesContext.Provider value={moviesData} {...props} />;
}

export function useMoviesContext(){
    return useContext(MoviesContext);
}
