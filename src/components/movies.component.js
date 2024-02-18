import React, { Component } from "react";
import Table from "./common/table.component";
import Rating from "./rating.component";
import getMovies from "../service/get-movies.service";

class Movies extends Component {
  state = {
    headers: ["ID", "Title", "IMDB Rating", "Your Rating", "Action"],
    movies: [],
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

  render() {
    const columns = [
      {
        label: "ID",
        path: "id",
        content: (movie, key) => <td>{movie[key]}</td>,
      },
      {
        label: "Title",
        path: "title",
        content: (movie, key) => <td>{movie[key]}</td>,
      },
      {
        label: "Poster",
        path: "posterUrl",
        content: (movie, key) => (
          <td>
            <img src={movie[key]} style={{ height: "100px", width: "auto" }} />
          </td>
        ),
      },
      {
        label: "Your Rating",
        path: "c_rating",
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
        content: (movie, key) => <td>{movie[key]}</td>,
      },
    ];
    return (
      <>
        <Table
          headers={this.state.headers}
          data={this.state.movies}
          columns={columns}
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
 ** for api call we call for data in componentDidUpdate
 ** which is Mountting Phase; [ after constructor(), and render()]
 ** for a single time render() shows an empty movies object
 ** then in componentDidUpdate the data is called upon and update the state
 ** onece state is updated the "Update Phase" starts
 ** and once angain render() is called and shows movies;
 */
