import {apiKey} from "../constants";
import {GENRES_LOADED, GET_MOVIES} from "../action-types/types";

export const getMovies = (movie) => {
    return {
        type: GET_MOVIES,
            payload: movie
    }
};
