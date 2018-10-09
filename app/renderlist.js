import React, {Component} from 'react'

function RenderList(arg) {
    class TaskListComponent extends Component{
        constructor(props){
            super(props);

            this.state = {
                array: arg
            }

        }

        render() {
            return( <div>
                <h1>{this.state.array}</h1>
                <p>This is my first React Component.</p>
            </div> )
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
export default RenderList