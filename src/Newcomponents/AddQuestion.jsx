import React, { Component } from 'react';
import './style.css';

export default class AddQuestion extends Component {
    constructor() {
        super();
        this.state = {
            name:null,
            totalmarks:0,
            passmarks:0,
            arr:null,
            question: null,
            answer: ["", "", "", ""],
            correctans: null,
            points: 0
        }
    }
    componentDidMount() {
        fetch("https://backend-quiz-examily.herokuapp.com/course/" + this.props.match.params.id).then((response) => {
            response.json().then((result) => {
                console.warn(result)
                this.setState({
                    name:result.name,
                    totalmarks:result.totalmarks,
                    passmarks:result.passmarks,
                    arr:result.quiz
                })
            })
        })
    }
    Add() {
        let data={question:this.state.question,answer:this.state.answer,correctans:this.state.correctans,points:this.state.points};
        console.log(this.state.arr.length);
        let d={name:this.state.name,totalmarks:this.state.totalmarks,passmarks:this.state.passmarks,quiz:this.state.arr.concat(data)};
        //console.log(arr.length);
        console.log(d)
        fetch("https://backend-quiz-examily.herokuapp.com/course/"+this.props.match.params.id,{
            method:"Put",
            headers:{
                'Content-type':'application/json'
            },
            body: JSON.stringify(d)
        }).then((result)=>{
            result.json().then((resp)=>{
                console.warn(resp)
            })
        })
        window.location.reload();
    }
    ArrData(arg, value) {
        this.state.answer[arg] = value;
    }
   /*  Delete(id) {
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
    } */
    /* Update(){
        fetch("https://random-data-test.herokuapp.com/restaurant/"+this.state.id,{
            method:"Put",
            headers:{
                'Content-type':'application/json'
            },
            body: JSON.stringify(this.state)
        }).then((result)=>{
            result.json().then((resp)=>{
                console.warn(resp)
            })
        })
    } */
    render() {
        return (
            <div className='container box'>
                <h2>Add Question</h2>

                <textarea cols="60" rows="2" placeholder='Write question....' onChange={(event) => { this.setState({ question: event.target.value }) }}></textarea><br />
                <label>Write option:</label><br />
                Option 1 <input type="text" onChange={(event) => { this.ArrData(0, event.target.value) }} /><br /><br />
                Option 2 <input type="text" onChange={(event) => { this.ArrData(1, event.target.value) }} /><br /><br />
                Option 3 <input type="text" onChange={(event) => { this.ArrData(2, event.target.value) }} /><br /><br />
                Option 4 <input type="text" onChange={(event) => { this.ArrData(3, event.target.value) }} /><br /><br />

                Correct answer <input type="text" onChange={(event) => { this.setState({ correctans: event.target.value }) }} /><br /><br />
                <label for="points">Choose points for this question </label>
                <select name="points" id="marks" onChange={(event) => { this.setState({ points: event.target.value }) }}>
                    <option value="1">Select</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select><br />
                <button className='btn btn-primary' onClick={() => { this.Add() }}>Add</button>
            </div>
        )
    }
}
