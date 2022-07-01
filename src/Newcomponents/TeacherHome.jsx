import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {
    Table
} from 'react-bootstrap';
import './style.css';

export default class TeacherHome extends Component {
    constructor() {
        super();
        this.state = {
            list: null,
            name: null
        }
    }
    componentDidMount() {
        this.getData()
    }
    getData() {
        fetch("https://backend-quiz-examily.herokuapp.com/course").then((response) => {
            response.json().then((result) => {
                console.warn(result)
                this.setState({ list: result })
            })
        })
    }
    Delete(id) {
        fetch("https://backend-quiz-examily.herokuapp.com/course/" + id, {
            method: "DELETE",
            //  headers:{
            //     'Content-type':'application/json'
            // }
        }).then((result) => {
            result.json().then((resp) => {
                alert('Deleted')
                this.getData()
            })
        })
    }
    AddCourse()
    {
        let data={name:this.state.name,totalmarks:0,passmarks:0}
        fetch("https://backend-quiz-examily.herokuapp.com/course", {
            method: "Post",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((result) => {
            result.json().then((resp) => {
                console.warn(resp)
            })
        })
        window.location.reload();
    }
    render() {
        return (
            <>
                <div className='container'>
                    <h1>Teacher home</h1>
                    <div className='divbox'>
                        <label>Course Name : </label> <input type="text" placeholder="enetr course name...."
                            onChange={(event) => { this.setState({ name: event.target.value }) }} />
                        <br />
                        <button className='btn btn-info blank' onClick={()=>{this.AddCourse();}}>Add course</button>
                    </div>
                    <div>
                        {
                            this.state.list ?


                                <Table striped bordered hover size="sm">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Name</th>
                                            <th>Operations</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            this.state.list.map((item, i) =>
                                                <tr>
                                                    <td>{item.id}</td>
                                                    <td>
                                                        <Link to={"/questionbank/" + item.id}>
                                                            {item.name}
                                                        </Link>
                                                    </td>

                                                    <td><Link to={"/update/" + item.id}>Edit</Link>------
                                                        <button><span onClick={() => this.Delete(item.id)}>Delete</span></button>
                                                    </td>
                                                </tr>

                                            )}
                                    </tbody>
                                </Table>


                                : <p>Please wait....</p>
                        }
                    </div>
                </div>
            </>
        )
    }
}
