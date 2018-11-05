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
        inputValue : ''
    };

    fornSubmitFunc = (event) => {
        event.preventDefault();
    };

    onChangeInputFunc = (event) => {
        console.log(event.target.value);
        this.setState({inputValue : event.target.value});
    };

    onClickButton = () =>
    {
        this.props.addTaskFunc(this.state.inputValue)
    };


    render() {
        return(<div>
                <form onSubmit={this.fornSubmitFunc}>
                    <input onChange={this.onChangeInputFunc} value={this.state.inputValue} />
                    <button onClick={this.onClickButton}> -- AddNewTask -- </button>
                </form>
            </div>
        )
    }

} // end of component (class)

export default Form