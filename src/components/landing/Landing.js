import React, {Component} from 'react';
import SearchField from "../search-field/SearchField";
import {connect} from 'react-redux'
import Spinner from "../spinner/Spinner";
import MoviesContainer from "../movies-container/MoviesContainer";
import {Pagination} from "../pagination/Pagination";


class Landing extends Component {
    render() {
        const {loading}=this.props
        return (
            <div>
                <SearchField/>
                {loading ? <Spinner/> : <MoviesContainer/>
                }

            </div>
        );
    }
}

const mapStateToProps = state=>({
    loading:state.movies.loading,
    movies: state.movies.movies
})
export default connect(mapStateToProps)(Landing);


