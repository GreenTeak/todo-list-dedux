import React, { Component } from 'react';
import * as actions from '../actions';
import { connect } from "react-redux";
//import { match} from 'react-router'


class UserInfo extends Component {
    render(){
        return (
            <div className="textdiv">
                {this.props.match.params.id}
                <ul>
                    {
                        this.props.todoList.todos.map(item =>{
                            console.log("item",item)
                            if(item.id === this.props.match.params.id ){
                                return (
                                    <ul key={item.id}>
                                        <li>id:{item.id}</li>
                                        <li>text: {item.text}</li>
                                        <li>completed: {item.completed?"true":"false"}</li>
                                        <li>edit: {item.edit?"true":"false"}</li>
                                    </ul>
                                )
                            }
                        })
                    }
                </ul>
            </div>
        );
    }
}
//
// const mapStateToProps = state => {
//     const userInfo = state.userInfo;
//     return {
//         userInfo
//     };
// };
// const mapDispatchToProps = {
//     getUserInfo
// }
// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(UserInfo);
const mapStateToProps = state => {
    return {
        todoList: state.todos
    };
};

export default connect(
    mapStateToProps,
)(UserInfo);
//this.props.todoList.linkto