import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route, Link} from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory();

const Home = () => (
    <div>
        <h2>Home</h2>
    </div>
);

const About = (props) => (

    <div>
        <h3>{foo(props)}</h3>
        <h2>About</h2>
    </div>
);



const Contacts = (props) => (

    <div>
        <h3>{foo(props)}</h3>
        <h2>Contacts</h2>

    </div>
);

let foo = (props) => {
    console.log('props: ',props.match);
    return (<div>fooFuncReturn{props.match.path}</div>)
};




class Navigation extends React.Component {
    render(){
        return (

            <BrowserRouter history={history} >
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contacts">Contacts</Link></li>
                </ul>

                <hr/>

                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/contacts" component={Contacts}/>
            </div>
        </BrowserRouter>
        )
    }
}

ReactDOM.render(<Navigation />, document.getElementById('router2'));