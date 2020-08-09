import React, {Component} from 'react';
import {Link} from "react-router-dom";

class MovieCard extends Component {

    render() {

        const {movie} = this.props

        return (
            <div className="col-md-3 mb-5">
                <div className="card card-body bg-dark text-center h-100">
                    <img
                        className="w-100 mb-2"
                        src={`http://image.tmdb.org/t/p/w185${movie.poster_path}`}
                        alt="Movie Cover"
                    />1
                    <h5 className="text-light card-title">
                        {movie.title} - {movie.release_date}
                    </h5>
                    <Link className="btn btn-primary"   to={'/movie/ '+  movie}>
                        Movie Details
                        <i className="fas fa-chevron-right"/>
                    </Link>
                    {/*<div className='card-content'>*/}
                    {/*    <p><a href="#">view details</a></p>*/}

                    {/*</div>*/}
                </div>
            </div>
        );
    }
}

export default MovieCard;
// import React from "react";
//
//  const MovieCard = (props) => {
//     return (
//         <div className="col s12 m6 l3">
//             <div className="card">
//                 <div className="card-image waves-effect waves-block waves-light">
//                     {props.image == null ? <img className=""
//                                                 src={`https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg`}
//                                                 alt="Card image cap" style={{
//                         width: "100%",
//                         height: 360
//                     }}/> : <img className="" src={`http://image.tmdb.org/t/p/w185${props.image}`} alt="Card image cap"
//                                 style={{
//                                     width: "100%",
//                                     height: 360
//                                 }}/>}
//                 </div>
//                 <div className='card-content'>
//                     <p><a href="">viev details</a></p>
//                 </div>
//             </div>
//         </div>
//     )
// }
// export default MovieCard;
