import React, { Component } from 'react';
import * as actions from '../actions';
import { connect } from "react-redux";
//import { match} from 'react-router'

class UserInfo extends Component {
    render(){
        return (
            <div className="textdiv">
                <ul>
                    {
                        <ul key={this.props.location.state.id}>
                            <li>id:{this.props.location.state.id}</li>
                            <li>text: {this.props.location.state.text}</li>
                            <li>completed: {this.props.location.state.completed?"true":"false"}</li>
                            <li>edit: {this.props.location.state.edit?"true":"false"}</li>
                        </ul>
                        // this.props.todoList.todos.map(item =>{
                        //     let linkToId = this.props.match.params.id;
                        //     console.log("linkToId",linkToId);
                        //     console.log("item",item.id)
                        //    if(item.id === 1)
                        //     {
                        //         return (
                        //             <ul key={item.id}>
                        //                 <li>id:{item.id}</li>
                        //                 <li>text: {item.text}</li>
                        //                 <li>completed: {item.completed?"true":"false"}</li>
                        //                 <li>edit: {item.edit?"true":"false"}</li>
                        //             </ul>
                        //         )
                        //     }
                        //})
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