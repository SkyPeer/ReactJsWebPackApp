import React, {Component} from "react";
import ReactDOM from "react-dom";
import './style.css';
import TodoList from './todo-list';
import 'index2';

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

    constructor(props) {
        super(props);

        this.state = {

            appName: 'Todo App!',

            array: [
                {
                    title: 'Выучить Реакт',
                    complete: false
                },
                {
                    title: 'НЕ Выучить Реакт',
                    complete: false
                },
                {
                    title: 'Выучить Ангуляр',
                    complete: false
                },
                {
                    title: 'НЕ Выучить Ангуляр',
                    complete: false
                }
            ]
        }
    }

    toggleTodoFunc(index) {
        // console.log(index);
        console.log('toggleTodoFunc = ', this.state.array);
        const array = this.state.array;
        let completeTask = array[index].complete;
        array[index].complete = !completeTask;
        this.setState({array})
    }

    toggleDelFunc(index) {
        console.log('toggleDelFunc  - index = ', index)
    }

    render() {
        return (
            <div>
                <div>
                    <h1>{this.state.appName}</h1>
                </div>

                <div>
                    <ol>
                        {
                            this.state.array.map((array, index) => {
                                const todoresult = array.complete ? 'complete' : '';
                                    return <TodoList
                                                     key={index}
                                                     title={array.title}
                                                     className={todoresult}
                                                     toggleTodo={() => this.toggleTodoFunc(index)}
                                                     toggleDel={() => this.toggleDelFunc(index)}/>
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