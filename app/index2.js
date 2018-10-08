//let testFunc = require('./testfunc');
//import testFunc from "./testfunc";
import React, {Component} from 'react';
import ReactDOM from 'react-dom';


class TaskListClass extends Component {

    state = {
        mans: [
            'Петя',
            'Вася',
            'Богдан'

        ]
    };

    delMan = (index) => {
        let {mans} = this.state;
        mans.splice(index, 1);
        this.setState({mans})
    };

    /*
    componentDidMount() {
        console.log(`TaskListClass примонтирован`)
    }
       */

    render() {

        let {mans} = this.state; //деструкция

        return (
            <div>
                {
                    mans.map((item, idx) =>
                        <div onClick={/*() => console.log(' *** index = ', idx)*/ () => this.delMan(idx)} key={idx}>
                            <h5>{item}</h5>
                        </div>
                    )}
            </div>
        );
    }


}


ReactDOM.render(
    <TaskListClass/>,
    document.getElementById('index2')
);