import { combineReducers, createStore } from "redux";
import {todoReducer} from "./todoSlice";

const store = createStore(combineReducers({
    todos:todoReducer
}));

export default store;