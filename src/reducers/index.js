import {combineReducers} from "redux";
import userInfo from "./userInfoReducer"
import todos from "./todoReducer"

const rootReducer = combineReducers({
    userInfo,
    todos
});
export default rootReducer

