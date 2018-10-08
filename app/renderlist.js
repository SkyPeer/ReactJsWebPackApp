import React, {Component} from 'react'
import ReactDOM from 'react-dom';



let a = 'Hello World';

class TaskList extends Component{

    constructor(props){
        super(props)


    } // end of construcor


    render(){
        return (
            <div>{a}</div>
        ) // end of return

    }// end of render

} // end of Component

export default TaskList


