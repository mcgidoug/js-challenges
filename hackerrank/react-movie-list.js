import React, { useState } from "react";
import "./index.css";

function MovieList() {
  const [year, setYear] = useState("");
  const [movies, setMovies] = useState(null);

  function onChange(event) {
    setYear(event.target.value);
  }

  async function onSubmit(year) {
    const response = await fetch(
      `https://jsonmock.hackerrank.com/api/movies?Year=${year}`
    );
    const result = await response.json();
    setMovies(result.data);
  }

  function renderMovies() {
    if (movies?.length) {
      const movieList = movies.map((movie) => {
        return (
          <li key={movie.imdbID} className="slide-up-fade-in py-10">
            {movie.Title}
          </li>
        );
      });
      return movieList;
    }
    return;
  }

  return (
    <div className="layout-column align-items-center mt-50">
      <section className="layout-row align-items-center justify-content-center">
        <input
          value={year}
          onChange={onChange}
          type="number"
          className="large"
          placeholder="Enter Year eg 2015"
          data-testid="app-input"
        />
        <button
          onClick={() => onSubmit(year)}
          className=""
          data-testid="submit-button"
        >
          Search
        </button>
      </section>

      <ul className="mt-50 styled" data-testid="movieList">
        {renderMovies()}
      </ul>
      {movies != null && !movies.length && (
        <div className="mt-50 slide-up-fade-in" data-testid="no-result">
          No Results Found
        </div>
      )}
    </div>
  );
}

export default MovieList;
