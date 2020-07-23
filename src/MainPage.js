import React, {Component} from 'react';

import {MoviesList} from "./components/movies-list/MoviesList";
import {Header} from "./components/header/Header";
import {apiKey} from "./constants/Index";
import {SearchField} from "./components/search-field/SearchField";

class MainPage extends Component {
    constructor() {
        super()
        this.state = {
            movies: [],
            searchTerm: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${this.state.searchTerm}`)
            .then(data => data.json())
            .then(data => {
                this.setState({movies: [...data.results]})
                console.log(this.movies)
            })
    }
    handleChange = (event) => {
        this.setState({
            searchTerm: event.target.value
        })
    }

    render() {
        return (
            <div>
                <Header/>
                <SearchField handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
                <MoviesList movies={this.state.movies}/>
            </div>


        )
    }
}

export default MainPage
