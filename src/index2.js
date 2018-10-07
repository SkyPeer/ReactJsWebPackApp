//let testFunc = require('./testfunc');
//import testFunc from "./testfunc";

import React, {Component} from 'react';
import ReactDOM from 'react-dom';


class TaskListClass extends Component {

   constructor(props){
        super(props);
        this.state = {
            array2: ['a1', 'a2']
        }
    };

    render(){

        return(
                <div>
                    <h1>{array3[1]}</h1>
                </div>
        )}

}
ReactDOM.render(
    <TaskListClass/>,
    document.getElementById('index2')
);