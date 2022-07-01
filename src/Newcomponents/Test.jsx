import React, { Component } from 'react'
import Ques from './Ques';

export default class Test extends Component {
    constructor() {
        super();
        this.state = {
            list: null,
            arr: null,
            index: null,
            marksScored: 0
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
    getDataQues(){
        fetch("https://backend-quiz-examily.herokuapp.com/course/"+this.state.index).then((response) => {
            response.json().then((result) => {
                console.warn(result)
                this.setState({ arr: result.quiz })
            })
        })
    }
    render() {
        return (
            <>
                <div>
                    {
                        this.state.list ?


                            <div>
                                {
                                    this.state.list.map((item, i) =>
                                        <div>
                                            <div>
                                                {item.name}
                                            </div>
                                            <Ques id={item.id}/>
                                        </div>

                                    )}
                            </div>


                            : <p>Please wait....</p>
                    }
                </div>
            </>
        )
    }
}
