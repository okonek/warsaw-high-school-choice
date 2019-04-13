import { createStore } from "redux";
import mainReducer from "../reducers";

export default function configureStore(initialState = {}) {
    return createStore(mainReducer, initialState);
}