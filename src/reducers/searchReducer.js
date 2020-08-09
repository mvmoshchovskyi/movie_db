import {SEARCH_MOVIE, FETCH_MOVIES, FETCH_MOVIE, LOADING, PAGINATION} from '../action-types/types'

const initialState = {
    text: '',
    movies: [],
    loading: false,
    movie: [],
    totalResults: 0,
    currentPage: 1,
    lastPage:0
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SEARCH_MOVIE:
            return {
                ...state,
                text: action.payload,
                loading: false,
            }
        case FETCH_MOVIES:
            return {
                ...state,
                movies: action.payload,
                loading: false,

            }
        case FETCH_MOVIE:
            return {
                ...state,
                movie: action.payload,
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
        default:
            return state
    }
}
