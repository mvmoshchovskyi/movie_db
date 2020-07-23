import React, {Component} from 'react';
//import {Provider} from 'react-redux';
//import {moviesStore} from "./store";
import MainPage from "./MainPage";
import './App.css';

export class App extends Component {

    render() {
        return (
            <div>
                <MainPage/>
            </div>
        );
    }
}

export default App;
