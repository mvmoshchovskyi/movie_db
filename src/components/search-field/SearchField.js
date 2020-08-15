import React, {Component} from 'react';
import {connect} from "react-redux";
import {searchMovie, fetchMovies,setLoading} from "../../actions/searchActions";

class SearchField extends Component{


    onChange = e =>{
        this.props.searchMovie(e.target.value)
    }

    onSubmit = e =>{

        e.preventDefault()
        this.props.fetchMovies(this.props.text)
        this.props.setLoading()
    }


render(){
               return (
            <div className="container">
                <div className="row">
                    <section className="col s4 offset-s4">
                        <form id='searchForm' action="" onSubmit={this.onSubmit}>
                            <div className="input-field">
                                <input
                                    placeholder='Search movie'
                                    type="text"
                                    name='searchText'
                                    onChange={this.onChange}/>
                            </div>
                            <button type='submit' className='btn btn-primary btn-bg mt-3'>Search</button>
                        </form>
                    </section>
                </div>
            </div>
        );
}


}

const mapStateToProps = state =>({

    text: state.movies.text,


}
)
const mapDispatchToProps = ({
    searchMovie,
    fetchMovies,
    setLoading

});


export default connect(mapStateToProps,mapDispatchToProps)(SearchField)

