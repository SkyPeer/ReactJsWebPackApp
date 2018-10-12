import React, {Component} from 'react';
import ReactDOM from 'react-dom'
/*
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


*/

class Form extends Component
{
    state = {

    };

    inputValue = '';

    fornSubmitFunc = (event) => {
        event.preventDefault();
    };

    onChanheInputFunc = (event) => {
        console.log(event.target.value);
        this.inputValue = event.target.value;
    };

    onClickButton = () =>
    {
        this.props.addTaskFunc(this.inputValue)
    };


    render() {
        return(<div>
                <form onSubmit={this.fornSubmitFunc}>
                    <input onChange={this.onChanheInputFunc} />
                    <button onClick={this.onClickButton}> -- AddNewTask -- </button>
                </form>
            </div>
        )
    }

} // end of component (class)

export default Form