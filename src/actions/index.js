import * as types from "../constants/ActionTypes";
import { push } from 'react-router-redux';

export const getUserInfo = () =>({type: "GET_USER_INFO"})
export const addTodoItem = text =>({type: "ADD_TO_ITEM",text})
export const delTodoItem = id =>({type:"Del_TO_ITEM",id})
export const filterTodoItem = text =>({type: "FILTER_TO_ITEM", text})
export const editTodoItem = (id) =>({type: "EDIT_TO_ITEM",id})