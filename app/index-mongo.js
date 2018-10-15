//let testFunc = require('./testfunc');
//import testFunc from "./testfunc";
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class MongoData extends Component {
    constructor(props){
        super(props);

    this.state = {
        mans: [
            {name: 'aaa'},
            {name: 'bbb'}
        ]
    }



    }

    componentWillMount() {
        fetch('http://localhost:3000/test')
            .then(response => console.log('response', response))

    }



    /*
    componentWillMount() {
        axios.get(`http://localhost:3000/test`)
            //.then(data => data.json)
            .then(data => {
                let outPutArray = data.data;
                console.log(outPutArray);
                this.state(outPutArray);
            })
    }*/


    render() {
        let {mans} = this.state; //деструкция
        return (<div>{mans.map((item, idx) => <h5 key={idx}>{item}</h5>)}</div>);
    }

} //endOfComponent

ReactDOM.render(
    <MongoData/>,
    document.getElementById('mongoindex')
);