import React, {Component} from 'react';
import ReactDOM from 'react-dom'

let Form = function (addToListFunc) {

    //let a = event.preventDefault();
    let a = 79;

    return(
        <div>
            <input/>
            <button onClick={()=> {addToListFunc(a)}}> Добавить </button>
        </div>)
};
export default Form;