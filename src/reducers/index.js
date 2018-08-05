import {combineReducers} from "redux";
import userInfo from "./userInfoReducer"
import todos from "./todoReducer"
import userLogin from "./userLoginReducer"

const rootReducer = combineReducers({
    userLogin,
    userInfo,
    todos
});
export default rootReducer

