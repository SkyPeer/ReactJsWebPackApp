import React from 'react'
import { render } from 'react-dom'
import { Link } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import { Switch, Route } from 'react-router-dom'


const Main = () => (

        <div>
            <h2>Routes</h2>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to={`/rendering`}>Rendering with React</Link>
                </li>
                <li>
                    <Link to={`/componentss`}>Components 1!</Link>
                </li>
                <li>
                    <Link to={`/props-v-state`}>Props v. State</Link>
                </li>
            </ul>
        </div>
);


let fooFunc = (arggg) => {
    return <span>{arggg}</span>
};

const DefaultComponet = (props) => (
    <div>
        <h3> - - DefaultComponet - -  match.params.... shmarams: = {fooFunc(props.match.params.topicsId)}</h3>
        {console.log(props.match.params.topicsId)}
        <Link to={'/'}>home</Link>
    </div>
);

const Routing = () => (
        <Switch>
            <Route exact path='/' component={Main}/>
            <Route path='/:number' component={DefaultComponet}/>
        </Switch>
    );


