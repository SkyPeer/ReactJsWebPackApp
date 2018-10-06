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
    return(
        <li key={props.__key} className={props.className} data-from="Valyaaa" onClick={props.toggleTodo}>{props.title}</li>
    )
};


export default TodoList;