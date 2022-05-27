import { Switch } from "react-router-dom";
import { ADD_MOVIE_FAVORITE, GET_MOVIES, GET_MOVIE_DETAILS, REMOVE_MOVIE_FAVORITE } from "../actions/index";

const initialState = {
    moviesFavourites: [],
    moviesLoaded: [],
    movieDetail: {}
};

function rootReducer(state = initialState, {type,payload}) {
    switch(type){
        case ADD_MOVIE_FAVORITE: {
            return {
                ...state,
                moviesFavourites: state.moviesFavourites.concat(payload)
            }
        }
        case GET_MOVIES:{
            return {
                ...state,
                moviesLoaded: payload.Search
            };
        }
        case GET_MOVIE_DETAILS:{
            return {
                ...state,
                movieDetail: payload
            }
        }
        case REMOVE_MOVIE_FAVORITE:{
            return {
                ...state,
                moviesFavourites: state.moviesFavourites.filter(movie=> movie.id !== payload)
            }
        }
        default: return state;
    }
    
}

export default rootReducer;