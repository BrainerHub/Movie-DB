import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "@/styles/Home.module.css";
import { getMovieDetails } from "@/services/APIs";

const MovieDetailPage: React.FC<{ movie: any }> = ({ movie }) => {
  const [currentMovieDetail, setMovie] = useState<any>();
  const router = useRouter();
  const movieId = router.query["details"];

  console.log("Movie id ", movieId);

  const movieDetail = () => {
    getMovieDetails(movieId as string).then((result) => {
      if (result.data) {
        setMovie(result.data);
      } else {
        setMovie([]);
      }
    });
  };

  useEffect(() => {
    if (movieId) {
      movieDetail();
    }
  }, []);

  return (
    <div className={styles.movie}>
      <div className={styles.movie__intro}>
        <img
          className={styles.movie__backdrop}
          src={`https://image.tmdb.org/t/p/original${
            currentMovieDetail ? currentMovieDetail.backdrop_path : ""
          }`}
        />
      </div>
      <div className={styles.movie__detail}>
        <div className={styles.movie__detailLeft}>
          <div className={styles.movie__posterBox}>
            <img
              className={styles.movie__poster}
              src={`https://image.tmdb.org/t/p/original${
                currentMovieDetail ? currentMovieDetail.poster_path : ""
              }`}
            />
          </div>
        </div>
        <div className={styles.movie__detailRight}>
          <div className={styles.movie__detailRightTop}>
            <div className={styles.movie__name}>
              {currentMovieDetail ? currentMovieDetail.original_title : ""}
            </div>
            <div className={styles.movie__tagline}>
              {currentMovieDetail ? currentMovieDetail.tagline : ""}
            </div>
            <div className="movie__rating">
              {currentMovieDetail ? currentMovieDetail.vote_average : ""}{" "}
              <i className="fas fa-star" />
              <span className="movie__voteCount">
                {currentMovieDetail
                  ? "(" + currentMovieDetail.vote_count + ") votes"
                  : ""}
              </span>
            </div>
            <div className={styles.movie__runtime}>
              {currentMovieDetail ? currentMovieDetail.runtime + " mins" : ""}
            </div>
            <div className="movie__releaseDate">
              {currentMovieDetail
                ? "Release date: " + currentMovieDetail.release_date
                : ""}
            </div>
            <div className={styles.movie__genres}>
              {currentMovieDetail && currentMovieDetail.genres
                ? currentMovieDetail.genres.map(
                    (genre: {
                      id: string | undefined;
                      name:
                        | string
                        | number
                        | boolean
                        | React.ReactElement<
                            any,
                            string | React.JSXElementConstructor<any>
                          >
                        | React.ReactFragment
                        | React.ReactPortal
                        | null
                        | undefined;
                    }) => (
                      <>
                        <span className={styles.movie__genre} id={genre.id}>
                          {genre.name}
                        </span>
                      </>
                    )
                  )
                : ""}
            </div>
            <div className={styles.movie__detailRightBottom}>
              <div className={styles.synopsisText}>Synopsis</div>
              <div className={styles.details}>
                {currentMovieDetail ? currentMovieDetail.overview : ""}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailPage;
