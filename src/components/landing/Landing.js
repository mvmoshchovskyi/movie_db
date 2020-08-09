import React, {Component} from 'react';
import SearchField from "../search-field/SearchField";
import {connect} from 'react-redux'
import Spinner from "../spinner/Spinner";
import MoviesContainer from "../movies-container/MoviesContainer";

class Landing extends Component {
    render() {
        const {loading}=this.props
        return (
            <div>
                <SearchField/>
                {loading ? <Spinner/>: <MoviesContainer/>}
            </div>
        );
    }
}

const mapStateToProps = state=>({
    loading:state.movies.loading
})
export default connect(mapStateToProps)(Landing);
