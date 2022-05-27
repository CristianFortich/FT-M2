export const ADD_MOVIE_FAVORITE = "ADD_MOVIE_FAVORITE";
export const GET_MOVIES = "GET_MOVIES";
export const GET_MOVIE_DETAILS = "GET_MOVIE_DETAILS";
export const REMOVE_MOVIE_FAVORITE = "REMOVE_MOVIE_FAVORITE";

export function addMovieFavorite(payload) {
    return { type: ADD_MOVIE_FAVORITE, payload };
}
  
export function getMovies(titulo) {
    return function(dispatch) {
        return fetch("http://www.omdbapi.com/?apikey=20d9adfe&s=" + titulo)
            .then(response => response.json())
            .then(json => {
                dispatch({ type: GET_MOVIES, payload: json });
            });
    };
}

export function removeMoviesFavorite(id){
    return {type: REMOVE_MOVIE_FAVORITE, payload: id};
}

export function getMovieDetails(id){
    return function(dispatch) {
        return fetch(`http://www.omdbapi.com/?apikey=20d9adfe&i=${id}&plot=full`)
            .then(response => response.json())
            .then(json => {
                dispatch({ type: GET_MOVIE_DETAILS, payload: json });
            });
    };        
}