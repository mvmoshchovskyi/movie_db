import {SEARCH_MOVIE, FETCH_MOVIES} from '../action-types/types';
import {apiKey} from "../constants";
import axios from 'axios'


export const searchMovie = text=> dispatch => {
dispatch({
    type:SEARCH_MOVIE,
    payload:text
})
}
export const fetchMovies = text => dispatch => {
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${text}`)
            .then(response => dispatch({
                type:FETCH_MOVIES,
                payload: response.data.results
            }))
            .catch(err=>  console.log(err))
}
