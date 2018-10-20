import React, {Component} from 'react'
import { render } from 'react-dom'
import { Link } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import { Switch, Route } from 'react-router-dom'





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
}// end of component

const Routing = () => (
    <Switch>
        <Route exact path='/' component={RouterComponent}/>
        <Route path='/:number' component={DefaultComponet}/>
    </Switch>
    );

let fooFunc = (arggg) => {
    return <span>{arggg}</span>
};

const DefaultComponet = (props) =>
{
    let arg = props.match.params.number;
    return(<div>
        <h3> - - DefaultComponet - -  match.params.... shmarams: = {fooFunc(arg)}</h3>
        {console.log(arg)}
        <Link to={'/'}>home</Link>
    </div>);
};


const Api = () => (
    <RouterComponent />,
    <Routing />
);

render(
    <BrowserRouter>
        <Api/>
    </BrowserRouter>,
    document.getElementById('reactRouterMongo'));
