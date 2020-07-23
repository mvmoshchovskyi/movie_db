import React from "react";

export const MovieCard = (props) => {
    return (
        <div className="col s12 m6 l3">
            <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                    {props.image == null ? <img className=""
                                                src={`https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg`}
                                                alt="Card image cap" style={{
                        width: "100%",
                        height: 360
                    }}/> : <img className="" src={`http://image.tmdb.org/t/p/w185${props.image}`} alt="Card image cap"
                                style={{
                                    width: "100%",
                                    height: 360
                                }}/>}
                </div>
                <div className='card-content'>
                    <p><a href="">viev details</a></p>
                </div>
            </div>
        </div>
    )
}