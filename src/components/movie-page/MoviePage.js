import React, {useEffect} from 'react';

import {Button} from 'semantic-ui-react';
import {withRouter} from 'react-router';
import './MoviePage.scss';
import {Link} from "react-router-dom";
import {DarkThemeContext} from "../../context/DarkThemeContext";

function MoviePageComponent({match: {params: {id}}, movieFromId, getMovieFromId, movieFromId: {vote_average}}) {


    useEffect(() => {
        getMovieFromId(id);
    }, []);


    const {adult, title, release_date, genres, original_language, original_title, overview, poster_path, popularity} = movieFromId;

    return (
        <DarkThemeContext.Consumer>
            {
                (data) => {

                    return (
                        <div className={`movie-container ${data.isDarkTheme && 'dark'}`}>
                            {/*<div className="container">*/}
                                <div className="row">
                                    <div className="col-md-4 card card-body">
                                        <img src={`https://image.tmdb.org/t/p/w300${poster_path}`} className="thumbnail"
                                             alt="Poster"/>
                                    </div>
                                    <div className="col-md-8">
                                        <h2 className="mb-4">{original_title}</h2>
                                        <ul className="list-group">
                                            <li className="list-group-item">
                                                <strong>Original title:</strong> {title}
                                            </li>
                                            <li className="list-group-item">
                                                <strong>Released:</strong> {release_date}
                                            </li>
                                            <li className="list-group-item">
                                                <div className='movieCard-content-info-rating'>Rating: <Button circular
                                                                                                               size='medium'
                                                                                                               color='yellow'>{vote_average}</Button>
                                                </div>

                                            </li>
                                            <li className="list-group-item">
                                                <strong>Overwiew:</strong> {overview}
                                            </li>
                                            <li className="list-group-item">
                                                <strong>Popularity: </strong>{popularity}
                                            </li>
                                            <li className="list-group-item">
                                                <strong>Original_language: </strong>{original_language}
                                            </li>
                                            <li className="list-group-item">
                                                <strong>Actors:</strong>
                                            </li>
                                            <li className="list-group-item">
                                                <Button color='green'>Watch trailer</Button>
                                            </li>
                                            <li className="list-group-item">
                                                {genres && genres.map(genre => (
                                                    <Button
                                                        size='medium'
                                                        compact
                                                        basic
                                                        // color={dark ? 'black' : 'red'}
                                                        key={genre.id}>{genre.name}</Button>))}
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="card card-body bg-dark my-5 text-light">
                                        <div className="col-md-12">
                                            <h3>About </h3>

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
                            {/*</div>*/}
                        </div>
                    )
                }
            }


        </DarkThemeContext.Consumer>


    )
}

export const MoviePage = withRouter(MoviePageComponent)
