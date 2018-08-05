import React, { Component } from 'react';
import { connect } from "react-redux";
import {addTodoItem,delTodoItem, filterTodoItem,editTodoItem, getTodoList} from "../actions/index"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'

class TodoList extends Component {
    constructor() {
        super()
        this.state = {
            todos: []
        }
    }
    componentDidMount(){
        this.props.getTodoList();
    }
    render() {
    console.log(this.props.todoList, '--------')
        return (
            <div className="App">

                <input ref={(el)=> {this.filters = el;}} type = "text"/>
                <button className="button2" onClick={(e) => {
                    this.props.filterTodoItem(this.filters.value)
                }}>搜索</button>

                <ul>
                {
                    this.props.todoList.filtered.map(item =>{
                        return  (
                            <li key={item.id}>
                                {item}
                            </li>
                        )
                    })
                }
                </ul>

                <input ref={(el)=> {
                    this.input = el;
                }} type = "text" className= "generatorStr"/>
                <button className="button1" onClick={() => {
                    this.props.addTodoItem(this.input.value)
                }}>add todos</button>
                <ul>
                {
                    this.props.todoList.todos.map(item =>{
                        let path = {
                            pathname:`/UserInfo/${item.id}`,
                            state:item
                        }
                        return  (
                          <div>
                            <li key={item.id} onClick={() => {
                                 this.props.editTodoItem(item.id)
                             }}>
                                <input type = "checkbox" onChange={()=> {
                            this.props.delTodoItem(item.id)}}/>
                                <Link to={path}>
                                    {item.completed ? <del>{item.text}</del>:item.text}
                                </Link>
                                <button>x</button>
                             {item.tasks.map((e)=>{
                               return <li> {e.content}</li>
                             })}
                             </li>
                           </div>
                        )
                    })
                }
                </ul>
           </div>
        );
   }
}
const mapStateToProps = state => {
    return {
        todoList: state.todos
    };
};
const mapDispatchToProps = {
    addTodoItem,
    delTodoItem,
    filterTodoItem,
    editTodoItem,
    getTodoList
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);
//onClick = {() => {
//                                 this.props.editTodoItem(item.id)
//                             }}
// {item.edit?<input type="text" ref={
//     (el)=> {this.edited = el;}} defaultValue={item.text} />:item.completed ? <del>{item.text}</del>:item.text}

