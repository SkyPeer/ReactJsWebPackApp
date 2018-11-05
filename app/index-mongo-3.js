// FILE: App.js
import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
    constructor() {
        super();
        this.state = { data: [] };
    }

    componentDidMount() {
        fetch(`http://localhost:3000/test`)
            .then(res => res.json())
                .then(json => this.setState({ data: json }));
    }

    render() {
        return (
            <div>
                <span>index-mongo-3.js</span>
                <ul>
                    {this.state.data.map(el => (
                        <li>
                            {el.title}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

//export default App;

ReactDOM.render(<App />, document.getElementById("app"));
