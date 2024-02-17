import React, { Component } from "react";
import Table from "./common/table.component";
import Rating from "./rating.component";

class Movies extends Component {
  state = {
    headers: ["Rank", "Title", "IMDB Rating", "Your Rating", "Action"],
    movies: [
      {
        rank: 1,
        title: "The Shawshank Redemption",
        rating: 9.2,
        c_rating: true,
        action: "",
      },
      {
        rank: 2,
        title: "The Godfather",
        rating: 9.1,
        c_rating: false,
        action: "",
      },
      {
        rank: 3,
        title: "The Godfather: Part 2",
        rating: 9.0,
        c_rating: false,
        action: "",
      },
      {
        rank: 4,
        title: "The Dark Kinght",
        rating: 9.0,
        c_rating: true,
        action: "",
      },
      {
        rank: 5,
        title: "12 Angry Men",
        rating: 8.9,
        c_rating: true,
        action: "",
      },
    ],
  };

  handleToggleRating = (movieRank) => {
    const movies = [...this.state.movies];
    const movie = movies.find((movie) => movie.rank === movieRank);
    movie.c_rating = !movie.c_rating;
    this.setState({ movies });
  };

  render() {
    const columns = [
      {
        label: "Rank",
        path: "rank",
        content: (movie, key) => <td>{movie[key]}</td>,
      },
      {
        label: "Title",
        path: "title",
        content: (movie, key) => <td>{movie[key]}</td>,
      },
      {
        label: "IMDB Rating",
        path: "rating",
        content: (movie, key) => <td>{movie[key]}</td>,
      },
      {
        label: "Your Rating",
        path: "c_rating",
        content: (movie, key) => (
          <td>
            <Rating
              isRated={movie[key]}
              rank={movie.rank}
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
 */
