
import React, {Component} from 'react';
// import Headers from './layouts/Header';
import './App.css';
import './assets/style.css';
import Router from './layouts/Router/Router';
import MainApp from './layouts/MainApp';

class App extends Component {
    render() {
    return (
        <div className='App'>
            <MainApp />
            {/* <AppRouter /> */}
        </div>
    );
// =======
// import React, { Component } from 'react';
// import { inject, observer } from 'mobx-react';
// import PreRouter from 'layouts/Router/PreRouter';

// class App extends Component {
//     render() {
//         return (
//             <div>
//                 <PreRouter />
//             </div>
//         );
//     }
// >>>>>>> 9d639826ebe7f00372e049c39b123fc01aefb96f
}
}
export default App;
