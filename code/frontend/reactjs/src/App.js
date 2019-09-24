import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import AppRouter from 'layouts/Router/Router';
import Footer from 'layouts/Footer/Footer';
import Header from 'layouts/Header/Header';

@inject('NewsStore')
@observer
class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <AppRouter />
                <Footer />
            </div>
        );
    }
}

export default App;
