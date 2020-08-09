import {SEARCH_MOVIE, FETCH_MOVIES, FETCH_MOVIE, LOADING, PAGINATION} from '../action-types/types';
import {apiKey} from "../constants";
import axios from 'axios'


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

export const fetchMovie = (id )=> {
    return (dispatch) => {
        return fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`)
            .then((response) => response.json())
            .then((data => {
                    dispatch({
                        type: FETCH_MOVIE,
                        payload: data
                    })
                })
            ).catch(err => console.log(err))
    }
};
export const setLoading = () => {
    return {
        type: LOADING,

    }
}

export const nextPage =(pageNumber, text)=>{
    return (dispatch) => {
fetch(` https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${text}${pageNumber}`)
            .then((response) => response.json())
            .then((data => {
                    dispatch({
                        type: PAGINATION,
                        payload: data.results
                    })
                })
            ).catch(err => console.log(err))
}}
