import {combineReducers} from "redux";
import reducer from "./reducer";

export default combineReducers({
    movies:reducer,
    genres:reducer,
})
