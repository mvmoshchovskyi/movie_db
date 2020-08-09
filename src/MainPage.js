import React, {Component} from 'react';


import {apiKey} from "./constants";
import SearchField from "./components/search-field/SearchField";
import {MoviesList} from "./components/movies-list/MoviesList";
import Landing from "./components/landing/Landing";
import {Route} from "react-router-dom";
import Pagination from "./components/pagination/Pagination";
import SearchArea from "./components/searchArea/searchArea";
import MovieInfo from "./components/movieInfo/MovieInfo";
import MoviePage from "./containers/MoviePage";



class MainPage extends Component {
    constructor() {
        super()
        this.state = {
            movies: [],
            searchTerm: '',
            totalResults: 0,
            currentPage: 1,
            currentMovie: null
        }
    }

    handleSubmit = (e) => {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchTerm}&language=en-US&page=${this.state.currentPage}`)
            .then(data => data.json())
            .then(data => {
                this.setState({movies: [...data.results], totalResults: data.total_results})
            })

        e.preventDefault()
    }
    handleChange = (event) => {
        this.setState({
            searchTerm: event.target.value
        })
    }

    viewMovieInfo = (id) => {
        const filteredMovie = this.state.movies.filter(movie => movie.id === id)
        const newCurrentMovie = filteredMovie.length > 0 ? filteredMovie[0] : null
        this.setState({currentMovie: filteredMovie})
    }

    nextPage = (pageNumber) => {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${this.state.searchTerm}&page=${pageNumber}`)
            .then(data => data.json())
            .then(data => {
                this.setState({movies: [...data.results], currentPage: pageNumber})
            })
    }

    closeMovieInfo = () => {
        this.setState({currentMovie: null})
    }

    render() {
        const numberPages = Math.floor(this.state.totalResults / 20)
        return (
            <div>
                {/*{this.state.currentMovie = null*/}
                {/*    ? <div>*/}
                {/*        <SearchArea handleSubmit={this.handleSubmit} handleChange={this.handleChnge}/>*/}
                {/*        <MoviesList viewMovieInfo={this.viewMovieInfo} movies={this.state.movies}/>*/}
                {/*    </div>*/}
                {/*    : <MovieInfo closeMovieInfo={this.closeMovieInfo} currentMovie={this.state.currentMovie} />}*/}

                <Route exact path="/" component={Landing}/>

                                <Route path="/movielist/:id"
                                        render={(routerProps) => {
                                                return (<MoviePage {...routerProps} />)
                                        }} >
                                </Route>

                {/*{this.state.totalResults > 20 ? <Pagination pages={numberPages} nextPage={this.nextPage}*/}
                {/*                                            currentPage={this.state.currentPage}/> : ''}*/}


            </div>


        )
    }
}

export default MainPage
