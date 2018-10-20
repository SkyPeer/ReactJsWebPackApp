import React, {Component} from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import { render } from 'react-dom'

class RouterComponent extends Component{
    state = {
        data: []
    };

    componentDidMount() {
        fetch(`/mongoose`)
            .then(res => res.json())
            .then(json => this.setState({data: json}))
    }

    render(){
        return(
            <div>
                <span>index-mongo.js</span>
                <ul>
                    {
                        this.state.data.map((el) => (
                            <li key={el._id}>
                                <div>
                                    <Link to={`${el._id}`}>{el.title}</Link>
                                </div>
                            </li>
                        ))}
                </ul>
            </div>
        )
    }
}// end of RouterComponent


class NewDeafultComponent extends Component{
    state =
        {
            data : {}
        };


    arg = this.props.match.params.number;
    foo = console.log('NewDeafultComponent, this.arg: ',this.arg);

    componentDidMount() {

        fetch('/mongoosefind', {
            method: 'post',
            body: JSON.stringify({_id: this.arg}),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(json => this.setState({data: json}))
        .then(()=>{console.log(this.state.data)})
    };


    render(){
        return(
            <div>

            <h5>Title: {this.state.data.title}</h5>
            <h5>Desc: {this.state.data.desc}</h5>
                <h5>Complete: {this.state.data.complete ? <span>Выполнена</span> : <span>Не выполнена</span>}</h5>
            <Link to={'/'}>home</Link>
        </div>);
    }

} //NewDeafultComponent


const Routing = () => (
    <Switch>
        <Route exact path='/' component={RouterComponent}/>
        <Route path='/:number' component={NewDeafultComponent}/>
    </Switch>
);


const Api = () => (
    <RouterComponent />,
        <Routing />
);

render(
    <BrowserRouter>
        <Api/>
    </BrowserRouter>,
    document.getElementById('reactRouterMongo'));