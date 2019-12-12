import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import stores from 'stores';
import App from './App';
import { Provider } from 'mobx-react';

ReactDOM.render(
    <Provider {...stores}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
