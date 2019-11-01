import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import PreRouter from 'layouts/Router/PreRouter';

class App extends Component {
    render() {
        return (
            <div>
                <PreRouter />
            </div>
        );
    }
}

export default App;
