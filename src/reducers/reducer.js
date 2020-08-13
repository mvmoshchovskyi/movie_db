import {
    SEARCH_MOVIE,
    FETCH_MOVIES,
    LOADING,
    PAGINATION,
    MOVIE_FROM_ID_LOADED,
    ACTIVE_PAGE_CHANGE,
    GET_MOVIES
} from '../action-types/types'

const initialState = {
    text: '',
    movies: [],
    loading: false,
    movie: [],
    lastPage: 0,
    genres: [],
    movieFromId: {},
    movieList: [],
    activePage: 1,
    movieFromSearch: {},
    foundMovies: [],
    totalResults: 0,
    currentPage: 1,
    tvShows: [],
    watchlist: [],
    watchlistTVShow: [],
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
                activePage: action.payload
            }
        case GET_MOVIES: {
            return {
                ...state,
                movies: action.payload
            }
        }
        default:
            return state
    }
}
