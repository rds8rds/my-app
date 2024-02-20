import React, { Component } from "react";
import Table from "./common/table.component";
import Rating from "./rating.component";
import getMovies from "../service/get-movies.service";
import _ from "lodash";
import Paging from "./common/pagination.component";
import getGenres from "../service/get-genres.service";
import Filtering from "./common/filtering.component";

class Movies extends Component {
  state = {
    movies: [],
    sortColumn: { path: "id", order: "asc" },
    pageLen: 5,
    currentPage: 2,
    genres: [],
    selectedGenre: "All Genres",
  };

  handleToggleRating = (movieId) => {
    const movies = [...this.state.movies];
    const movie = movies.find((movie) => movie.id === movieId);
    movie.c_rating = !movie.c_rating;
    this.setState({ movies });
  };

  componentDidMount() {
    //const currState = { ...this.state };
    const movies = getMovies();
    const genres = ["All Genres", ...getGenres()];
    //currState.movies = movies;
    //this.setState(currState);
    this.setState({ ...this.state, movies, genres });
  }

  handleSort = (sortColumn) => {
    this.setState({ ...this.state, sortColumn }); // copy then change only sortColumn
  };

  handlePageChange = (currentPage) => {
    this.setState({ ...this.state, currentPage });
  };
  handleSelectedGenereChange = (selectedGenre) => {
    this.setState({ ...this.state, selectedGenre });
  };

  paginatedMovies = (movies) => {
    const { currentPage, pageLen } = this.state;
    const start = (currentPage - 1) * pageLen;
    const paginatedMovies = movies.slice(start, start + pageLen);
    return paginatedMovies;
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

  filterMovies = () => {
    const { movies, selectedGenre } = this.state;
    const filteredMovies = movies.filter((movie) => {
      if (selectedGenre === "All Genres") return true;

      // যদি selectedGenre genres এর মধ্যেই থাকে তাইলে filteredMovies এ add হয়ে যাবে;
      if (movie.genres.includes(selectedGenre)) return true;
      else return false;
    });

    return filteredMovies;
  };

  render() {
    const filteredMovies = this.filterMovies(this.state.movies);
    const paginatedMovies = this.paginatedMovies(filteredMovies);
    const movies = this.sortMovies(paginatedMovies);
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
        <div className="container">
          <div className="row">
            <Filtering
              items={this.state.genres}
              selectedItem={this.state.selectedGenre}
              handleSelectedItemChange={this.handleSelectedGenereChange}
            />

            <div className="col-lg-8">
              <Table
                columns={columns}
                items={movies}
                sortColumn={this.state.sortColumn}
                sortFunc={this.handleSort}
              />
              <Paging
                movieLen={filteredMovies.length} // এখানে filteredMovies.length যাবে;
                pageLen={this.state.pageLen}
                currentPage={this.state.currentPage}
                handlePageChange={this.handlePageChange}
              />
            </div>
          </div>
        </div>
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
