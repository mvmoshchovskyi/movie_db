import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import Landing from "./components/landing/Landing";
import MoviePage from "./containers/MoviePage";
import MoviesContainer from "./components/movies-container/MoviesContainer";

import './MainPage.scss'
class MainPage extends Component {


    render() {

        return (
            <div className='main'>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Landing}/>

                        <Route path="/movielist/:id"
                               render={(routerProps) => {
                                   return (<MoviePage {...routerProps} />)
                               }}>
                        </Route>

                        <Route path="/found-movies" exact>
                            <MoviesContainer
                            />

                        </Route>

                    </Switch>

                </Router>
            </div>


        )
    }
}


export default MainPage;
