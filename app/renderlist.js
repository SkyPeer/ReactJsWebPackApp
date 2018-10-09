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

        onClickFunc = function(index){
            console.log('onClickFunc:', index)
        };
        /*onClickFunc = (idx) => {
            console.log(idx)
        }; */

        render() {
            return(
                /*<div>
                    <h1>{this.state.taskListArray}</h1>
                </div> */

                    createList(this.state.taskListArray, this.onClickFunc)

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