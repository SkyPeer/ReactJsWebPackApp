import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ReactDOM from 'react-dom';

const BasicExample = ({ match }) => (
    <Router>
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/topics">Topics</Link>
                </li>
            </ul>

            <hr />

            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/topics" component={Topics} />
        </div>
    </Router>
);

const Home = () => (
    <div>
        <h2>Home</h2>
    </div>
);

const About = () => (
    <div>
        <h2>About</h2>
    </div>
);

const Topics = ({ match }) => {

    return(

        <div>
            <h2>Topics</h2>
            <ul>
                <li>
                    <Link to={'/topics/rendering@@!!'}>Rendering with React</Link>
                </li>
                <li>
                    <Link to={`${match.url}/componentss`}>Components 1!</Link>
                </li>
                <li>
                    <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
                </li>
            </ul>

            <Route
                exact
                path={match.path} // "/topics"
                render={() => <h3>Please select a topic.</h3>}
            />

            <Route //exact
                   path={`${match.path}/:topicsId`}
                   component={Topic} />



        </div>
    );
};

const Topic = ({ match }) => (
    <div>
        <h3> ---- {match.params.topicsId}</h3>
    </div>
);

//export default BasicExample;

ReactDOM.render(<BasicExample/>, document.getElementById('router'));