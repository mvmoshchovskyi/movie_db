import React, {Component} from 'react';
import {connect} from "react-redux";
import {apiKey} from "../../constants";
import {getMovies } from '../../actions/getMovies'
import MovieCard from "../movie-card/MovieCard";
import Pagination from "../pagination/Pagination"

import './MoviesContainer.scss';
import {DarkThemeContext} from "../../context/DarkThemeContext";

class MoviesContainer extends Component {

static contextType=DarkThemeContext

    state = {
        isLoading: false,
        error: '',
        movieTotalResults: 0,
        movieCurrentPage: 1,
    }

        componentDidMount() {
            this.loadMovies();
        }

    loadMovies = async () => {

        const {getMovies} = this.props;
        this.setState({isLoading: true});
        let response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`);
        if (response.ok) {
            let json = await response.json();
            this.setState({movieTotalResults: json.total_results})
            const {results} = json;
            if (Array.isArray(results)) {
                this.setState({
                    isLoading: false,
                    error: '',
                });
                getMovies(results)
            }
        } else {
            this.setState({
                isLoading: false,
                error: response.status,
            });
        }
    }

    movieNextPage = async (pageNumber) => {
        window.scrollTo(0, 0);

        const {getMovies} = this.props;
        let response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&page=${pageNumber}`);
        if (response.ok) {
            let json = await response.json();
            this.setState({movieTotalResults: json.total_results, movieCurrentPage: pageNumber})
            const {results} = json;
            if (Array.isArray(results)) {
                getMovies(results)
            }
        }
    }


    render() {
        const {movies} = this.props;
        const {isLoading, error} = this.state;
        const movieNumberPages = Math.floor(this.state.movieTotalResults / 20);

        const darkThemeContextValue=this.context

        return (
             <DarkThemeContext.Consumer>
                 {
                     (data)=>{
                         return(
                              <div className={`movie-container ${darkThemeContextValue.isDarkTheme && 'dark'}`}>

                {
                    isLoading && (
                        <div className="text-center m-2">
                            <div className="spinner-border text-secondary" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>)
                }


                <div className="card-container">

                    {
                        !isLoading && movies.map(movie => <MovieCard movie={movie} key={movie.id}/>)
                    }


                </div>

                {
                    this.state.movieTotalResults > 20 &&
                    <Pagination
                        debugger
                        pages={movieNumberPages}
                        nextP={this.movieNextPage}
                        currentPage={this.state.movieCurrentPage}/>
                }
            </div>
                         )
                     }
                 }


             </DarkThemeContext.Consumer>
        );
    }
}

const mapStateToProps = state => ({
    movies: state.movies.movies,
        text: state.movies.text,

})

const mapDispatchToProps = ({
    getMovies,

});

export default connect(mapStateToProps, mapDispatchToProps)(MoviesContainer);

