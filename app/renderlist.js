import React, {Component} from 'react';
import createList from './createlist'

function renderList(arg) {

    //console.log(arg);

    class TaskListComponent extends Component{
        /*constructor(props){
            super(props);

            this.state = {
                taskListArray: arg
            }
        } */

        state = {
            taskListArray: arg
        };

        onClickFunc = (index) => {
        //console.log('onClickFunc:', index);
        //console.log(this.state);
            let taskListArray = this.state.taskListArray;
        //console.log(typeof taskListArray, Array.isArray(taskListArray)); // object array-true
            taskListArray.push({
        title: 'test',
        complete: false});
        this.setState(taskListArray);
            console.log(taskListArray)
    };
/*
        delTaskFunc = (index) =>{
            let taskListArray = this.state.taskListArray;
            this.setState( taskListArray.split(index, 1) )
        }; */

        delTaskFunc = (index) => {
            let {taskListArray} = this.state;
            taskListArray.splice(index, 1);
            this.setState({taskListArray})
        };

        /*
        onClickFunc = function(index){
            console.log('onClickFunc:', index);
            let {taskListArray} = this.state;
            taskListArray.push({
                title: 'test',
                complete: false
            });
            this.setState({taskListArray})
        }; */

        /*
        delMan = (index) => {
            let {mans} = this.state;
            mans.splice(index, 1);
            this.setState({mans})
        };
        */

        /*onClickFunc = (idx) => {
            console.log(idx)
        }; */

        render() {
            return(
                /*<div>
                    <h1>{this.state.taskListArray}</h1>
                </div> */

                    createList(this.state.taskListArray, this.onClickFunc, this.delTaskFunc)

            )
        }
    }

    return TaskListComponent
}
/*
class TaskList extends Component{

    constructor(props){
        super(props)
    } // end of construcor

    render(){
        return (
            <div>{a + '  ' + 22}</div>
        ) // end of return

    }// end of render

} // end of Component
*/
export default renderList