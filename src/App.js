import React, {Component, createContext} from 'react';
import {Provider} from "react-redux";
import {HashRouter as Router, Route} from "react-router-dom";

import MainPage from "./MainPage";
import './App.css';
import store from "./store/store";
import {Header} from "./components/header/Header";
import {Footer} from "./components/footer/Footer";
import {DarkThemeContextWrapper} from "./context/DarkThemeContextWrapper";
import {DarkThemeContext,isDarkTheme} from "./context/DarkThemeContext";



export class App extends Component {
    render() {
        return (
     <DarkThemeContextWrapper>
                <Provider store={store}>
                    <Router>
                        <div>
                            <Header/>
                            <MainPage/>
                            <Footer/>
                        </div>
                    </Router>
                </Provider>
     </DarkThemeContextWrapper>
        );
    }
}

export default App;
