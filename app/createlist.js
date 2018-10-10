import React, {Component} from 'react';


    let createList = function (props, onClickFunc, delTaskFunc) {
        let taskList = [];
   // console.log('----- props', props);

        for (let i=0; i < props.length; i++){

            let complete = '';

            props[i].complete ? complete = 'taskname complete' : complete = 'taskname';

            taskList.push(

            <CreateListComponent
                key={i}
                onClick={ () => { onClickFunc(i) } }
                delClick = { () => { delTaskFunc(i) }}
                title = {props[i].title}
                className = {complete}

            />)

        }

        return (<div>
                    <ol>
                        {taskList}
                    </ol>
                </div>
        )
    };

let CreateListComponent = function (props) {
  // console.log('CreateListComponent', props);
    return(
        <li>
            <div className={props.className} onClick={props.onClick}>{props.title}</div><div className="delbutton" onClick={props.delClick}> - X - </div>
        </li>
    )
};
    /*
    return(
        <div>
            <h1>{props}</h1>
            <p>This is my first React Component.2312</p>
        </div>
    )
    */
/*
const TodoList = function (props) {
    // console.log(typeof props, Array.isArray(props));
    // console.log(Object.keys(props));
    // console.log('component key', props.__key);
    return (
        <div >
            <li>
                <div className={props.className} onClick={props.toggleTodo}>{props.title}</div>
                <div onClick={props.toggleDel}> X </div>
            </li>
        </div>
    )
};
*/

//console.log('----- createList:', createList);
export default createList