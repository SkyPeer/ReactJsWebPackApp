//import './index2'
import React, {Component} from "react";
import ReactDOM from "react-dom";
import './style.css';
import TodoList from './todo-list'
/*
//const testText = testFunc();
const Index = () => {
    return <div className="helloworld">React App isOk! {testFunc[0]()}</div>;
};
ReactDOM.render(<Index />, document.getElementById("index"));
console.log('____', 1, testFunc[0]());
*/
//console.log(testFunc());

class TodoApp extends Component {

    constructor(props){
        super(props);

        this.state = { // состояние
            array: [
                {
                    title: 'Выучить Реакт',
                    complete: false
                },
                {
                    title: 'Не Выучить Реакт',
                    complete: false
                }
            ]
        }
    }
    toggleTodo(index){
        // console.log(index);
        console.log('toggleTodo = ', this.state.array);
        const array = this.state.array;
        let complete = array[index].complete;
        array[index].complete = !complete;
        this.setState({array})
    }

    toggleDel(index){
        console.log('toggleDel --- index = ', index)
    }

    render(){
        return(
            <div>
                <div>
                    <h1>Todo App</h1>
                </div>

                <div>
                    <ol>
                        {
                            this.state.array.map((array, index) => {
                                const todoresult = array.complete ? 'complete' : '';
                                   //   console.log(index, '---1');
                                return <TodoList
                                    /*__key={index}
                                        key={index}*/
                                    title={array.title}
                                    className={todoresult}
                                    toggleTodo={this.toggleTodo.bind(this, index)}
                                    //toggleDel={this.toggleDel.bind(this, index)}
                                />
                            })
                        }
                    </ol>
                </div>
            </div>



        );
    }
}

ReactDOM.render(
    <TodoApp/>,
    document.getElementById('index')
);