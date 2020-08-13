import React, {Component} from 'react';
import {Provider} from "react-redux";
import {HashRouter as Router, Route} from "react-router-dom";
import MainPage from "./MainPage";
import './App.css';
import store from "./store/store";
import {Header} from "./components/header/Header";
import {Footer} from "./components/footer/Footer";


export class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div>
                        <Header/>
                        <MainPage/>
                        <Footer/>
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
