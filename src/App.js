import React, {Component, createContext} from 'react';
import {Provider} from "react-redux";
import {HashRouter as Router, Route} from "react-router-dom";

import MainPage from "./MainPage";
import './App.css';
import store from "./store/store";
import {Header} from "./components/header/Header";
import {Footer} from "./components/footer/Footer";

const isDarkTheme = true
export const DarkThemeContext = createContext({isDarkTheme})

export class App extends Component {
    render() {
        return (
     <DarkThemeContext.Provider value={{isDarkTheme}}>
                <Provider store={store}>
                    <Router>
                        <div>
                            <Header/>
                            <MainPage/>
                            <Footer/>
                        </div>
                    </Router>
                </Provider>
 </DarkThemeContext.Provider>
        );
    }
}

export default App;
