import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
//import TeacherHome from './TeacherHome';

export default class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: null,
            password: null,
            role: null
        }
    }
    render() {
        return (
            <div className='container'>
                <div className='box'>
                <h2>Login</h2>
                
                <div className="inputbox">
                        <lable>Email</lable>
                        <input type="text" placeholder="email...."
                            onChange={(event) => { this.setState({ email: event.target.value }) }} />
                    </div>
                    <div className="inputbox">
                        <lable>Password</lable>
                        <input type="password"
                            onChange={(event) => { this.setState({ password: event.target.value }) }} />
                    </div>
                    <lable>Role :</lable><br />
                    <lable> Teacher </lable> <input type="radio" name="role" id="" onChange={() => { this.setState({ role: "teacher" }) }} />
                    <lable> Student </lable> <input type="radio" name="role" id="" onChange={() => { this.setState({ role: "student" }) }} /><br />
                    <br />
                    <button><Link to={this.state.role==="teacher"?"/teacherhome":"/studenthome"} className="blank"> Login </Link></button>

                    {/* <button className="btn btn-primary" onClick={() => { this.Login(); }}>Login</button> */}
                
                </div>
            </div>
        )
    }
}
