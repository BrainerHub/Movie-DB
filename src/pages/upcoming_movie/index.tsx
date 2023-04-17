import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "@/styles/Home.module.css";
import MovieList from "@/componets/movieList";
import { getUpcomingMovie } from "@/services/APIs";

const UpcomingMovie = () => {
  const [upcomingMovie, setUpcomingMovies] = useState([]);
 
  const UpcomingMovie = () => {
    getUpcomingMovie().then((result) => {
      if (result.data) {
        setUpcomingMovies(result.data);
      } else {
        setUpcomingMovies([]);
      }
    });
  };
  useEffect(() => {
    UpcomingMovie();
  }, []);
  return (
    <div>
      <>
        <div className="poster">
          <h1 className={styles.sub_title}>UPCOMING MOVIE</h1>
          <MovieList movieList={upcomingMovie} />
        </div>
      </>
    </div>
  );
};

export default UpcomingMovie;
