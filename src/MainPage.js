import React, {Component} from 'react';
import {apiKey} from "./constants";
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import {connect} from 'react-redux'
import Landing from "./components/landing/Landing";
import MoviePage from "./containers/MoviePage";
import MoviesContainer from "./components/movies-container/MoviesContainer";
import SearchField from "./components/search-field/SearchField";


class MainPage extends Component {
    state = {
        isMovieSearch: false,
        errorSearch: '',
        searchTerm: '',
        totalResults: 0,
        currentPage: 1,
    }

    handleChange = (e) => {
        this.setState({searchTerm: e.target.value})
    }

    handleSubmit = async (e) => {
        if (this.state.searchTerm === '') return;
        e.preventDefault()
        const {searchMovies} = this.props;
        this.setState({isMovieSearch: true});
        let response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${this.state.searchTerm}`);
        if (response.ok) {
            let json = await response.json();
            this.setState({totalResults: json.total_results})
            const {results} = json;
            if (Array.isArray(results)) {
                this.setState({
                    isMovieSearch: false,
                    errorSearch: '',
                    currentPage: 1
                });
                searchMovies(results)
            } else {
                this.setState({
                    isMovieSearch: false,
                    errorSearch: response.status,
                });
            }
        }
    }

    nextPage = async (pageNumber) => {
        window.scrollTo(0, 0);
        const {searchMovies} = this.props;
        let response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${this.state.searchTerm}&page=${pageNumber}`);
        if (response.ok) {
            let json = await response.json();
            this.setState({totalResults: json.total_results, currentPage: pageNumber})
            const {results} = json;
            if (Array.isArray(results)) {
                searchMovies(results)
            }
        }
    }


    render() {
        const numberPages = Math.floor(this.state.totalResults / 20)
        return (
            <div>
                <Router>
                    {/*<SearchField searchTerm={this.state.searchTerm}*/}
                    {/*             handleSubmit={this.handleSubmit}*/}
                    {/*             handleChange={this.handleChange}*/}
                    {/*/>*/}

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

const mapStateToProps = state => ({
    foundMovies: state.movies.movies
})

export default connect(mapStateToProps,)(MainPage);
