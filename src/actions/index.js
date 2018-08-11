import * as types from "../constants/ActionTypes";
import $ from "jquery";

export const getUserInfo = () =>({type: "GET_USER_INFO"})
export const addTodoItem = text =>({type: "ADD_TO_ITEM",text})
export const delTodoItem = id =>({type:"Del_TO_ITEM",id})
export const filterTodoItem = text =>({type: "FILTER_TO_ITEM", text})
export const editTodoItem = (id) =>({type: "EDIT_TO_ITEM",id})

export const getTodoList = (token) => (dispatch) => {
//    fetch("/api/todos").then(res => res.json()).then(todos => {
//        dispatch({
//            type: "RECEIVED_TODOS",
//            todos
//        });
//    });
    console.log("gettodolistToken",localStorage.token);
    $.ajax({
        url: "/api/todos",
        type: "GET",
        headers: {
          Authorization: localStorage.token
        },
        success: todos => {
          dispatch({
                      type: "RECEIVED_TODOS",
                      todos
                 });
        }
      });
}

export const RegisterToServer =(name,password) =>(dispatch) =>{

   fetch('/api/user', {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json'
       },
       body: JSON.stringify({
         name: name.value,
         password: password.value
       })
     })
       .then(response => {
         return response.text();
       })
}

export const LoginToServer =(name,password) =>(dispatch) =>{

   fetch('/api/login', {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json'
       },
       body: JSON.stringify({
         name: name.value,
         password: password.value
       })
     })
     .then(response => {
           return response.text();
       })
      .then(token => {
         localStorage.token = token
         console.log("LoginToServerToken",localStorage.token);
        })
//        .catch((err) => {
//
//        });

}