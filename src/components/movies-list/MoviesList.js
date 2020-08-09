import React from "react";
import MovieCard from "../movie-card/MovieCard";

export const MoviesList = (props) => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col s12">
                    {
                        props.movies.map((movie,i)=>{
                            return(
                                <MovieCard key={i} viewMovieInfo={props.viewMovieInfo} movieId={movie.id} title={movie.title} overview={movie.overview} image={movie.poster_path} date={movie.release_date} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
