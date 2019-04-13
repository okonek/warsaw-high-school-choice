import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form"
import punctation from "./punctation";

export default combineReducers({
    form: formReducer,
    punctation
});