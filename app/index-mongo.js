//let testFunc = require('./testfunc');
//import testFunc from "./testfunc";
import React, {Component} from 'react';
import ReactDOM from 'react-dom';


class MongoData extends Component {
    constructor(){
        super();
    this.state = {data: []}
    }

    componentDidMount() {
        fetch(`/test`)
            .then(res => res.json())
            .then(json => this.setState({data: json}))
    }

    addToMongo = () => {
      /*  fetch('/add', {
            method: 'POST',
            contentType: "application/json",
            dataType: "json",
            body: JSON.stringify({
                email: '123'
            }),
        }).then(function(response) {
            return response
        }).then(function(body) {
            console.log(body);
        });*/

        fetch('/add', {
            method: 'put',
            body: JSON.stringify({a: 'test'}),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(checkStatus)
            .then(()=>console.log('updated!!!'));

        function checkStatus(response) {
            if (response.status >= 200 && response.status < 300) {
                return response
            } else {
                let error = new Error(response.statusText);
                error.response = response;
                throw error
            }
        }

    };


    onClickFunction = () =>{
        let taskAddFunc = this.state.data;
        taskAddFunc.push({title:'wait....', complete: false});
        this.setState({taskAddFunc});
        this.componentDidMount()
    };



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

        //let {arrayForRender} = this.state.data;
        console.log(this.state.data);
        return (
            <div>
                <span>index-mongo.js</span>
                <ul>
                    {this.state.data.map((el) => (
                        <li key={el.id} onClick={()=>{this.onClickFunction()}}>
                            {el.title}
                        </li>
                    ))}


                </ul>
                <button onClick={()=>{this.addToMongo()}}>ADD test</button>
            </div>
        );
    }

} //endOfComponent

ReactDOM.render(
    <MongoData />,
    document.getElementById('indexmongo'));