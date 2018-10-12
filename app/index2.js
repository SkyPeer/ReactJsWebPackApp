//let testFunc = require('./testfunc');
//import testFunc from "./testfunc";
import React, {Component} from 'react';
import ReactDOM from 'react-dom';


class TaskListClass extends Component {

    state = {
        mans: [
            'Петя',
            'Вася',
            'Богдан'
        ]
    };
    inputValue = '';


    delMan = (index) => {
        let {mans} = this.state;
        mans.splice(index, 1);
        this.setState({mans})
    };



    changeInputFunc = (event) => {
        this.inputValue = event.target.value;
        console.log(event.target);
        console.log('this.inputValue:', this.inputValue)
    };


    clickButtonFunc = () => {
        let {mans} = this.state;
        mans.push(this.inputValue);
        this.setState({mans})
    };

    formSubmitFunc = (event) => {
        event.preventDefault();
    };

    /*
    componentDidMount() {
        console.log(`TaskListClass примонтирован`)
    }
       */

    render() {

        let {mans} = this.state; //деструкция

        return (
            <div>
                {
                    mans.map((item, idx) =>
                        <div onClick={/*() => console.log(' *** index = ', idx)*/ () => this.delMan(idx)} key={idx}>
                            <h5>{item}</h5>
                        </div>
                    )}


                    <form onSubmit={this.formSubmitFunc}>

                        <label>Введи нового MAN'а: <input onChange = { this.changeInputFunc } /></label>

                        <button onClick={this.clickButtonFunc}>Ввести</button>

                    </form>

            </div>

        );
    }


}


ReactDOM.render(
    <TaskListClass/>,
    document.getElementById('index2')
);