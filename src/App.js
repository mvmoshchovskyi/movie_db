import React, {Component} from 'react';
import {Provider} from "react-redux";
//import {moviesStore} from "./store";
import MainPage from "./MainPage";
import './App.css';
import store from "./store/store";

export class App extends Component {


    render() {
        return (
            <Provider store={store}>
                <MainPage/>
            </Provider>
        );
    }
}

export default App;
