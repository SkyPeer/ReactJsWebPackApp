import React, {Component} from "react";

/*const TodoList = (props) => {

 //console.log(props);
 return(

 <li data-from="Valyaaa">{props.title}</li>
 )
 };*/

const TodoList = function (props) {
    // console.log(typeof props, Array.isArray(props));
    // console.log(Object.keys(props));
    // console.log('component key', props.__key);
    return (
        <div >
            <li className={props.className} onClick={props.toggleTodo}>{props.title}</li>
            <div onClick={props.toggleDel}> X</div>
        </div>
    )
};


export default TodoList;