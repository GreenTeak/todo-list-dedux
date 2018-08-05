import React, { Component } from 'react';
import { connect } from "react-redux";
import {LoginToServer, RegisterToServer} from "../actions/index"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'


class Login extends Component {
    constructor() {
        super()
        this.state = {}
    }
    render() {
     let path = {pathname:`/todos`,
                 state:this.props.userLogin.token
                }
     console.log("token+++",this.props.userLogin.token);

        return (

               <form>
                 <div className="form-group">
                   <label htmlFor="exampleInputEmail1">Account</label>
                   <input type="text" className="form-control" id="exampleInputEmail1"
                   aria-describedby="emailHelp" placeholder="Please enter your account"
                    ref={element => {this.name = element;}} />

                 </div>
                 <div className="form-group">
                   <label htmlFor="exampleInputPassword1">Password</label>
                   <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"
                   ref={element => {this.password = element;}}/>
                 </div>

                 <button type="submit" className="btn btn-primary" onClick ={() => {
                    this.props.LoginToServer(this.name, this.password); } }>登陆</button>
                  <Link to={path}>查看列表
                  </Link>
                 <button type="submit" className="btn btn-primary" onClick ={() => {
                     this.props.RegisterToServer(this.name, this.password); }}>注册</button>
               </form>
                )
            }
}
const mapStateToProps = state => {
     return {
        userLogin:state.userLogin
     };
};
const mapDispatchToProps = {
   LoginToServer,
   RegisterToServer
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);

