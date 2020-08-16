import {SEARCH_MOVIE, FETCH_MOVIES, LOADING, GET_MOVIES, } from '../action-types/types';
import {apiKey} from "../constants";



export const searchMovie = text => dispatch => {
    dispatch({
        type: SEARCH_MOVIE,
        payload: text
    })
}


export const fetchMovies = text => {
    return (dispatch) => {
        return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${text}`)
            .then((response) => response.json())
            .then((data => {
                    dispatch({
                        type: FETCH_MOVIES,
                        payload: data.results

                    })
                })
            )
            .catch(err => console.log(err))
    }
};


export const setLoading = () => {
    return {
        type: LOADING,

    }
}


