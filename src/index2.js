//let testFunc = require('./testfunc');
//import testFunc from "./testfunc";

import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class TaskListClass extends Component {

    constructor(props){
        super(props);
        

    }


    render(){






        return(

        <div>
            <h1>Hello!</h1>
        </div>

        )}

}
ReactDOM.render(
    <TaskListClass/>,
    document.getElementById('index2')
);