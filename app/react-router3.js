import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'

const MyRouting = () => (
<Router>
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

            <Route
                exact
                path={'/'} // "/topics"
                component={HomeComponent}/>

            <Route //exact
                path={`/:topicsId`}
                component={DefaultComponet}

            />



        </div>
</Router>);

let fooFunc = (arggg) => {
    return <span>{arggg}</span>
};

const DefaultComponet = (props) => (
    <div>
        <h3> - - DefaultComponet - -  match.params.... shmarams: = {fooFunc(props.match.params.topicsId)}</h3>
        {console.log(props.match.params.topicsId)}
        <Link to={`/`}>home</Link>
    </div>
);

const HomeComponent = (props) =>(
  <div>
      <h3>---- HomeComponent!</h3>

  </div>

);



//export default BasicExample;

ReactDOM.render(<MyRouting/>, document.getElementById('myrouter'));