import React from 'react';
import { render } from 'react-dom';

/*class ChildComponent extends React.Component {

    render() {
        return (
            <div>
                <p>myComponent text Props: {this.props.nameprop.name}</p>
            </div>
        )
    }
}*/

class NewChildComponent extends React.Component {

    passedData = 'new_data2';

    clickFunc = () => {this.props.getNewDataFunc(this.passedData);}

    render() {
        return (
            <button onClick={() => {this.clickFunc()} }> TestButton </button>
        );
    }
}

class ParentComponent extends React.Component {

    state = {
        name: 'Yulia',
        lastname: 'Ivanova',
        age: 25
    };

    getNewDataFunc = (data) => {
        console.log(this.state);
        console.log('getNewDataFunc:',data);
        this.state.newdate = data;
        let newState = this.state;
        this.setState({ newState })
    };

    render() {
        return (
            <div>
                <p>State: {this.state.name + ' ' + this.state.lastname + ' age: ' + this.state.age + ' newDate: ' + this.state.newdate}</p>
                <NewChildComponent getNewDataFunc={ ( arg ) => { this.getNewDataFunc(arg); console.log('render arg: ',aaaa) }  } />
            </div>
        )
    }
}

render(<ParentComponent />, document.getElementById('index4'));

