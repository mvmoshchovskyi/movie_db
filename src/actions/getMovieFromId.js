import {apiKey} from "../constants";
import {MOVIE_FROM_ID_LOADED} from "../action-types/types";

export const getMovieFromId = (id) => {

        return async (dispatch) => {
                return fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`)
                        .then(response => response.json())
                        .then((res) => {
                                dispatch({
                                        type: MOVIE_FROM_ID_LOADED,
                                        payload: res
                                });

                        });
        }
}
