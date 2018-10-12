import React from 'react';
import { render } from 'react-dom';

class ChildComponent extends React.Component {
    state = {
        name: 'Бумеранг вернулся назад!!!!!!!!!!!!!!!!!!!!!!!!!'
    };

    render() {
        return (
            <div>
                <button onClick={ () => { this.props.updateData(this.state.name)} }>Запустить бумеранг</button>
            </div>
        )
    }
}

class ParentComponent extends React.Component {
    state = {
        name: 'Бумеранг не запущен'
    };

    updateData = (value) => {
        this.setState({ name: value })
    };

    render() {
        return (
            <div>
                <p>State: {this.state.name}</p>
                <ChildComponent updateData={this.updateData} />
            </div>
        )
    }
}

render(<ParentComponent />, document.getElementById('index3'));

