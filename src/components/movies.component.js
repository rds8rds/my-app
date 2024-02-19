import React, { Component } from "react";
import Table from "./common/table.component";
import Rating from "./rating.component";
import getMovies from "../service/get-movies.service";
import _ from "lodash";

class Movies extends Component {
  state = {
    movies: [],
    sortColumn: { path: "id", order: "asc" },
  };

  handleToggleRating = (movieId) => {
    const movies = [...this.state.movies];
    const movie = movies.find((movie) => movie.id === movieId);
    movie.c_rating = !movie.c_rating;
    this.setState({ movies });
  };

  componentDidMount() {
    const currState = { ...this.state };
    const movies = getMovies();
    currState.movies = movies;
    this.setState(currState);
  }

  handleSort = (sortColumn) => {
    this.setState({ ...this.state, sortColumn }); // copy then change only sortColumn
  };

  sortMovies = (movies) => {
    const { sortColumn } = this.state;
    const sortedMovies = _.orderBy(
      movies,
      [sortColumn.path],
      [sortColumn.order]
    );
    return sortedMovies;
  };

  render() {
    const movies = this.sortMovies(this.state.movies);
    const columns = [
      {
        label: "ID",
        path: "id",
        sorting: true,
        content: (movie, key) => <td>{movie[key]}</td>,
      },
      {
        label: "Title",
        path: "title",
        sorting: true,
        content: (movie, key) => <td>{movie[key]}</td>,
      },
      {
        label: "Poster",
        path: "posterUrl",
        sorting: false,
        content: (movie, key) => (
          <td>
            <img src={movie[key]} style={{ height: "100px", width: "auto" }} />
          </td>
        ),
      },
      {
        label: "Your Rating",
        path: "c_rating",
        sorting: false,
        content: (movie, key) => (
          <td>
            <Rating
              isRated={movie[key]}
              id={movie.id}
              handleToggleRating={this.handleToggleRating}
            />
          </td>
        ),
      },
      {
        label: "Action",
        path: "action",
        sorting: false,
        content: (movie, key) => <td>{movie[key]}</td>,
      },
    ];
    return (
      <>
        <Table
          columns={columns}
          items={movies}
          sortColumn={this.state.sortColumn}
          sortFunc={this.handleSort}
        />
      </>
    );
  }
}

export default Movies;

/*
 ** columns array টা মুভি table এর কয়টা column আছে সেই info পাস করে
 ** npm i bootstrap-icons
 **
 **  / implementing apis call /
 **
 ** for api call we call for items in componentDidUpdate
 ** which is Mountting Phase; [ after constructor(), and render()]
 ** for a single time render() shows an empty movies object
 ** then in componentDidUpdate the items is called upon and update the state
 ** onece state is updated the "Update Phase" starts
 ** and once angain render() is called and shows movies;
 */
