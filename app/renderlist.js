import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import createList from './createlist'
import Form from './addtolist'

function renderList(arg) {

    //console.log(arg);

    class TaskListComponent extends Component{

<<<<<<< HEAD
        constructor(props){
            super(props);

            this.state = {
=======
            state = {
>>>>>>> 51436d4515467515286e09a88c428354e9958729
                taskListArray: arg
            };


        /*}
        componentDidMount() {
            fetch('http://localhost:3000/test')
                .then(response => response.json())
                .then(data => {
                    let outPutArray = data;
                    console.log(outPutArray);
                    this.updateState(outPutArray);
                })
               // .then(this.setState(data));
<<<<<<< HEAD
        }
=======
        } */
>>>>>>> 51436d4515467515286e09a88c428354e9958729



        /*onClickFunc__ = (index) => {
        //console.log('onClickFunc:', index);
        //console.log(this.state);
            let taskListArray = this.state.taskListArray;
        //console.log(typeof taskListArray, Array.isArray(taskListArray)); // object array-true
            taskListArray.push({
        title: 'test: №' + index,
        complete: false});
        this.setState(taskListArray);
            console.log(taskListArray)
        }; */




        onClickFunc = (index) => {
            let taskListArray = this.state.taskListArray;
            console.log('------ onclickFunc', taskListArray[index].title, ' complete:', taskListArray[index].complete);
            let taskStatus = taskListArray[index].complete;
            !taskStatus ? taskListArray[index].complete = true : taskListArray[index].complete = false;
            this.setState(taskListArray);
        };


        delTaskFunc = (index) => {
            let taskListArray = this.state.taskListArray;

                taskListArray.splice(index, 1);

                this.setState(taskListArray)
        };


        addTaskFunc = (arg) => {
            console.log('addTaskFunc arg:  ', arg)
            let taskListArray = this.state.taskListArray;
            taskListArray.push(
                {
                    title: arg,
                    complete: false
                });
            this.setState(taskListArray)
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
                <div>
                    {createList(this.state.taskListArray, this.onClickFunc, this.delTaskFunc)}
                    <Form addTaskFunc = {(newtask)=>{this.addTaskFunc(newtask)}}/>
                </div>

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