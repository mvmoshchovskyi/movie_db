import {apiKey} from "../constants";
export const getMovieFromSearch = (query) => {

        return async (dispatch) => {
                return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}=${query}`)
                        .then(response => response.json())
                        .then((res) => {
                                dispatch({
                                        type: 'MOVIE_FROM_SEARCH_LOADED',
                                        payload: res
                                });

                        });
        }
}
