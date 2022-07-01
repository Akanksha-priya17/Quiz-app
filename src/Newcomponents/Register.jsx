import React, { Component } from 'react';
import './style.css';

export default class Register extends Component {
    constructor() {
        super();
        this.state = {
            name: null,
            email: null,
            password: null,
            role: null
        }
    }
    Create() {
        console.log(this.state);
        if (this.state.role === "teacher") {
            fetch("https://backend-quiz-examily.herokuapp.com/teacher", {
                method: "Post",
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(this.state)
            }).then((result) => {
                result.json().then((resp) => {
                    console.warn(resp)
                })
            })
        }
        else {
            fetch("https://backend-quiz-examily.herokuapp.com/student", {
                method: "Post",
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(this.state)
            }).then((result) => {
                result.json().then((resp) => {
                    console.warn(resp)
                })
            })
        }

    }
    render() {
        return (
            <div className='container'>
                <div className='box'>
                    <h2>Register</h2>
                    <div className="inputbox">
                        <lable>Name</lable>
                        <input type="text" placeholder="name...."
                            onChange={(event) => { this.setState({ name: event.target.value }) }} />
                    </div>
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
                    <button className="btn btn-primary" onClick={() => { this.Create() }}>Create</button>
                </div>
            </div>
        )
    }
}
