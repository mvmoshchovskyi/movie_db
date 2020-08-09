import React, {Component} from 'react';
import {connect} from 'react-redux'
import {fetchMovie, setLoading} from "../../actions/searchActions";
import Spinner from "../spinner/Spinner";
import {Link} from "react-router-dom";

class MovieDetails extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {

        this.props.fetchMovie(this.props.match.params.id)
        this.props.setLoading()
    }

    render() {
        debugger
        const {movie, loading } = this.props

         // const movieFindIndex = movie.findIndex(item => item.id === this.props.match.params.id);

        // const {
        //     poster_path,
        //     popularity,
        //     title,
        //     release_date,
        //     genre_ids,
        //     overview,
        //     vote_average,
        //     original_language,
        //     backdrop_path,
        //     adult,
        //     id,
        //     video,
        //     vote_count,
        // } = movie[movieFindIndex]

        let movieInfo = (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 card card-body">
                            <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}// className="thumbnail"
                                 alt="Poster"/>
                        </div>
                        <div className="col-md-8">
                            <h2 className="mb-4">{movie.id}</h2>
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <strong>Genre:</strong> {movie.title}
                                </li>
                                <li className="list-group-item">
                                    <strong>Released:</strong> {movie.release_date}
                                </li>
                                <li className="list-group-item">
                                    <strong>Rated:</strong> {movie.Rated}
                                </li>
                                <li className="list-group-item">
                                    <strong>IMDB Rating:</strong> {movie.overview}
                                </li>
                                <li className="list-group-item">
                                    <strong>Director:</strong> {movie.Director}
                                </li>
                                <li className="list-group-item">
                                    <strong>Writer:</strong> {movie.Writer}
                                </li>
                                <li className="list-group-item">
                                    <strong>Actors:</strong> {movie.Actors}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="card card-body bg-dark my-5 text-light">
                            <div className="col-md-12">
                                <h3>About </h3>
                                {movie.Plot}
                                <hr/>
                                <a
                                    href={'https://www.themoviedb.org//'}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-primary"
                                >
                                    View on MovieDB
                                </a>
                                <Link to="/" className="btn btn-default text-light">
                                    Go Back To Search
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
        let content = loading ? <Spinner/> : movieInfo
        return (
            <div>
                {content}
            </div>

        );
    }
}

const mapStateToProps = state => (
    {
        loading: state.movies.loading,
        movie: state.movies.movie
    })
export default connect(mapStateToProps, {fetchMovie, setLoading})(MovieDetails);
