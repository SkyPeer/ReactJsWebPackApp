//let testFunc = require('./testfunc');
import testFunc from "./testfunc";
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
            todos: [
                {
                    title: 'Выучить Реакт',
                    complete: true
                },
                {
                    title: 'Не Выучить Реакт',
                    complete: false
                }
            ]
        }
    }
    toggleTodo(index){
        console.log(index);
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
                            this.state.todos.map((todo, index) => {
                                const todoresult = todo.complete ? 'complete' : '';
                                      console.log(index, '---1');
                                return <TodoList
                                    __key={index}
                                        key={index}
                                    title={todo.title}
                                    className={todoresult}
                                    toggleTodo={this.toggleTodo.bind()}
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