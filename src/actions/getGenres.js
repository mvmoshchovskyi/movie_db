
import {apiKey} from "../constants";
import {GENRES_LOADED} from "../action-types/types";
export const getGenres = () => {

        return async (dispatch) => {
                return fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`)
                        .then(response => response.json())
                        .then((res) => {
                                dispatch({
                                        type: GENRES_LOADED,
                                        payload: res
                                });
                        });
        }
}
