import React, {Component} from 'react';

import {MoviesList} from "./components/movies-list/MoviesList";
import {Header} from "./components/header/Header";
import {apiKey} from "./constants";
import SearchField from "./components/search-field/SearchField";
import {Footer} from "./components/footer/Footer";
import Landing from "./components/landing/Landing";


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
    onChange = (event) => {
        this.setState({
            searchTerm: event.target.value
        })
    }

    render() {
        return (
            <div>
                <Header />
                {/*<SearchField handleSubmit={this.handleSubmit} handleChange={this.onChange}/>*/}
                <Landing/>
                {/*<MoviesList movies={this.state.movies}/>*/}
                <Footer/>
            </div>


        )
    }
}

export default MainPage
