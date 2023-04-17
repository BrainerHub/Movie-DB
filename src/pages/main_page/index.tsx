import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import styles from "@/styles/Home.module.css";
import MovieList from "@/componets/movieList";
import router from "next/router";
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
          <Carousel
            showThumbs={false}
            autoPlay={true}
            transitionTime={1}
            infiniteLoop={true}
            showStatus={false}
          >
            {popularMovies.map((movie: any) => (
              <div
                style={{ textDecoration: "none", color: "white" }}
                onClick={() => {
                  router.push(`/movie_detailsPage/${movie.id}`);
                }}
              >
                <div className={styles.posterImage}>
                  <img
                    src={`https://image.tmdb.org/t/p/original${
                      movie && movie.backdrop_path
                    }`}
                  />
                </div>
                <div className={styles.posterImage__overlay}>
                  <div className={styles.posterImage__title}>
                    {movie ? movie.original_title : ""}
                  </div>
                  <div className={styles.posterImage__runtime}>
                    {movie ? movie.release_date : ""}
                    <span className={styles.posterImage__rating}>
                      {movie ? movie.vote_average : ""}
                      <i className="fas fa-star" />{" "}
                    </span>
                  </div>
                  <div className={styles.posterImage__description}>
                    {movie ? movie.overview : ""}
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
          <h1 className={styles.sub_title}>ALL MOVIE</h1>
          <MovieList movieList={popularMovies} />
        </div>
      </>
    </div>
  );
};

export default PopularMovie;
