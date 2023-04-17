import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "@/styles/Home.module.css";
import MovieList from "@/componets/movieList";
import { getTopMovies } from "@/services/APIs";

const TopRatedMovie = () => {
  const [topRatedMovie, setTopRatedMovies] = useState([]);
 
  const TopRatedMovie = () => {
    getTopMovies().then((result) => {
      if (result.data) {
        setTopRatedMovies(result.data);
      } else {
        setTopRatedMovies([]);
      }
    });
  };
  useEffect(() => {
    TopRatedMovie();
  }, []);
  return (
    <div>
      <>
        <div className="poster">
          <h1 className={styles.sub_title}>TOP RATED MOVIE</h1>
          <MovieList movieList={topRatedMovie} />
        </div>
      </>
    </div>
  );
};

export default TopRatedMovie;
