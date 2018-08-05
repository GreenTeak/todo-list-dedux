const initialState = {};

export default function userLogin(state = initialState, action) {
    switch (action.type) {
            case "ADD_TOKEN":
            return{
               token:action.token
            }
            default:
               return state;
    }
}