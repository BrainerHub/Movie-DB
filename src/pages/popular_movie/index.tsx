import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "@/styles/Home.module.css";
import MovieList from "@/componets/movieList";
import { data } from "autoprefixer";
import { getPopularMovie } from "@/services/APIs";

const PopularMovie = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  const popularMovie = () => {
    getPopularMovie().then((result) => {
      if (result.data) {
        setPopularMovies(result.data);
      } else {
        setPopularMovies([]);
      }
    });
  };

  useEffect(() => {
    popularMovie();
  }, []);

  return (
    <div>
      <>
        <div className="poster">
          <h1 className={styles.sub_title}>POPULAR MOVIES</h1>
          <MovieList movieList={popularMovies} />
        </div>
      </>
    </div>
  );
};

export default PopularMovie;
