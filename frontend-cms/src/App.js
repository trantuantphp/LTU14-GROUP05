import React from 'react';
import Headers from './layouts/Header';
import './App.css';
import './assets/style.css';
import AppRouter from './layouts/Router';

function App() {
    return (
        <div className='App'>
            <Headers />
            <AppRouter />
        </div>
    );
}

export default App;
