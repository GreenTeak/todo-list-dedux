

const initialState = {
    todos: [{
        id: 0,
        text: 'Use Redux',
        completed: false,
        edit: false,
    }
    ],
    filterText:" ",
    filtered:[],
    linkto:-1
}
let index = 0;
export default function todos(state = initialState, action) {
    switch (action.type) {
        case "ADD_TO_ITEM":
            return {
                todos:[...state.todos, {id: ++ index, text: action.text, completed: false,edit:false}],
                filterText:state.filterText,
                filtered:state.filtered,
                linkto:-1
            }
        case "Del_TO_ITEM":
                let items = state.todos.map((item) =>{
                    if(item.id === action.id ){
                        item.completed = !item.completed;
                    }
                    return item
                });
                return {
                    todos:items,
                    filterText:state.filterText,
                    filtered:state.filtered,
                    linkto:-1
                }
        case "FILTER_TO_ITEM":
               let itemsfilter = [];
               state.todos.map((item) =>{
                   if(item.text.includes(action.text)){
                       itemsfilter.push(item.text);
                   }
                   return item;
               })
               return{
                   todos:state.todos,
                   filterText:action.text,
                   filtered:itemsfilter,
                   linkto:-1
               }
        case "EDIT_TO_ITEM":
             let itemedit = state.todos.map((item) =>{
                if(item.id === action.id ){
                     item.edit = !item.edit;
                }
                return item
             });
            return {
                todos:itemedit,
                filterText:state.filterText,
                filtered:state.filtered,
                linkto:action.id
            }

        default:
            return state
    }
}
