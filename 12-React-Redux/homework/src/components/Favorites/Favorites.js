import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import './Favorites.css';
import { removeMoviesFavorite } from "../../actions";

export class ConnectedList extends Component {

  render() {
    return (
      <div>
        <h2>Películas Favoritas</h2>
        <ul>
          {this.props.movies && this.props.movies.map(movie=>{
           return <li>
              <Link to={`/movie/${movie.id}`}>
                {movie.title}
              </Link>
             <button onClick={() => this.props.removeMoviesFavorite(movie.id)}>X</button>
           </li>
         })}
        </ul>
      </div>
    );
  }
}



function mapStateToProps(state) {
  return {
    movies: state.moviesFavourites
  };
}

function mapDispatchToProps(dispatch) {
  return {
    removeMoviesFavorite: movie => dispatch(removeMoviesFavorite(movie)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedList);
