import {
    SEARCH_MOVIE,
    FETCH_MOVIES,
    LOADING,
    PAGINATION,
    MOVIE_FROM_ID_LOADED,
    ACTIVE_PAGE_CHANGE,
    GET_MOVIES,
    GENRES_LOADED, MOVIE_FROM_SEARCH_LOADED

} from '../action-types/types'

const initialState = {
    text: '',
    movies: [],
    loading: false,
    foundMovies: [],
    movie: [],
    movieFromId: {},
    activePage: 1,
    currentPage: 1,

    genresList: [],


}

export default function (state = initialState, action) {
    switch (action.type) {
        case SEARCH_MOVIE:
            return {
                ...state,
                text: action.payload,
                loading: false,
                foundMovies: action.payload
            }
        case FETCH_MOVIES:
            return {
                ...state,
                movies: action.payload,
                loading: false,

            }

        case LOADING:
            return {
                ...state,
                loading: true,
            }
        case PAGINATION:
            return {
                ...state,
                movies: action.payload,
                currentPage: 1
            }

        case MOVIE_FROM_ID_LOADED:
            return {
                ...state,
                loading: false,
                movieFromId: action.payload
            }
        case ACTIVE_PAGE_CHANGE:
            return {
                ...state,
                activePage: action.payload,
                loading: false,
            }
        case GET_MOVIES: {
            return {
                ...state,
                movies: action.payload,
                loading: false,
            }
        }

        case GENRES_LOADED:
            return {
                ...state,
                genresList: action.payload,
                // isGenresLoading: false
                loading: false,
            }



        default:
            return state
    }
}



