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

    render() {

        let {mans} = this.state; //деструкция

        return (
            <div>
                {
                    mans.map((item, idx) =>
                            <h5>{item}</h5>)}

            </div>

        );
    }


}


ReactDOM.render(
    <TaskListClass/>,
    document.getElementById('index-mongo')
);