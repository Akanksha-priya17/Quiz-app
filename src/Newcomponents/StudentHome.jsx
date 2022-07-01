import React, { Component } from 'react'
import { Link } from 'react-router-dom';
export default class StudentHome extends Component {
    render() {
        return (
            <>
                <h1>Student home</h1>
                <button className='btn btn-info'><Link to={"/test"}>Take Test</Link></button>
            </>
        )
    }
}
