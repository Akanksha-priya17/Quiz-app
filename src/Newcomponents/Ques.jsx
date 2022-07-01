import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {
    Table,
    Container
} from 'react-bootstrap';

export default class Ques extends Component {
    constructor() {
        super();
        this.state = {
            list: null,
            arr: null,
            ans: null,
            marks: 0
        }
    }
    componentDidMount() {
        this.show();
    }
    show() {
        fetch("https://backend-quiz-examily.herokuapp.com/course/" + this.props.id).then((response) => {
            response.json().then((result) => {
                console.warn(result)
                this.setState({ list: result })
                this.setState({ arr: result.quiz })
            })
        })
    }
    fn(option, score, answer) {
        if (option === answer) {
            this.setState({ marks: this.state.marks + score })
            console.log(this.state.marks)
        }
    }
    render() {
        return (
            <>
                {
                    this.state.arr ?
                        <div>
                            <Container fluid="md">
                                <div>
                                    {
                                        this.state.arr.map((item, i) =>
                                            <div>

                                                {item.question} <br />

                                                <input type="radio" name={item.question} onChange={() => { this.fn(item.answer[0], item.points, item.correctans) }} />{item.answer[0]}<br />
                                                <input type="radio" name={item.question} onChange={() => { this.fn(item.answer[1], item.points, item.correctans) }} />{item.answer[1]}<br />
                                                <input type="radio" name={item.question} onChange={() => { this.fn(item.answer[2], item.points, item.correctans) }} />{item.answer[2]}<br />
                                                <input type="radio" name={item.question} onChange={() => { this.fn(item.answer[3], item.points, item.correctans) }} />{item.answer[3]}
                                                <br /><br />
                                            </div>

                                        )}
                                </div>
                            </Container>
                        </div>
                        : <p>Please wait....</p>
                }

            </>
        )
    }
}
