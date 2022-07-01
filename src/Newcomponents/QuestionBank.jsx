import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
    Table,
    Container
} from 'react-bootstrap';
import './style.css';

export default class QuestionBank extends Component {
    constructor() {
        super();
        this.state = {
            list: null,
            arr: null
        }
    }
    componentDidMount() {
        this.getData()
    }
    getData() {    
        fetch("https://backend-quiz-examily.herokuapp.com/course/" + this.props.match.params.id).then((response) => {
            response.json().then((result) => {
                console.warn(result)
                this.setState({ list: result })
                this.setState({ arr: result.quiz })
            })      
        })
    }
   /*  Delete(qid) {
        fetch("https://backend-quiz-examily.herokuapp.com/course/" + this.props.match.params.id, {
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
    } */
    render() {
        return (
            <>
                <h1>Question Bank</h1>
                 <button className='btn btn-info'><Link className='blank' to={"/addquestion/"+this.props.match.params.id}>Add question</Link></button> 
                <div>
                  {/* <h3>Total Marks : {this.state.list.totalmarks}</h3>  */}
                    {
                        this.state.arr ?
                            <div>
                                <Container fluid="md">
                                    <Table striped bordered hover size="sm">
                                        <thead>
                                            <tr>
                                                <th>Question</th>
                                                <th>Options</th>
                                                <th>Correct answer</th>
                                                <th>Points</th>
                                                <th>Operation</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                this.state.arr.map((item, i) =>
                                                    <tr>
                                                
                                                         <td>
                                                            {item.question}
                                                        </td>
                                                        <td>
                                                            {item.answer.join('\r\n')
                                                            }
                                                        </td>
                                                        <td>
                                                            {item.correctans}
                                                        </td>
                                                        <td>
                                                            {item.points}
                                                        </td>
                                                         <td>
                                                        <button><span onClick={()=>this.Delete()}>Delete</span></button>
                                                        </td>   
                                                    </tr>

                                                )}
                                        </tbody>
                                    </Table>
                                </Container>
                            </div>
                            : <p>Please wait....</p>
                    }
                </div>
            </>
        )
    }
}
