import React, { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import styles from "@/styles/Home.module.css";
import { useRouter } from "next/router";

const Cards: React.FC<{ movie: any }> = ({ movie }) => {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className={styles.cards}>
          <SkeletonTheme
            enableAnimation={true}
            direction="ltr"
            baseColor="#202020"
            highlightColor="#444"
          >
            <Skeleton height={300} duration={2} enableAnimation={true} />
          </SkeletonTheme>
        </div>
      ) : (
        <div
          onClick={() => {
            router.push(`/movie_detailsPage/${movie.id}`);
          }}
          style={{ textDecoration: "none", color: "white" }}
        >
          <div className={styles.cards}>
            <img
              className={styles.cards__img}
              src={`https://image.tmdb.org/t/p/original${
                movie ? movie.poster_path : ""
              }`}
            />
            <div className={styles.cards__overlay}>
              <div className={styles.card__title}>
                {movie ? movie.original_title : ""}
              </div>
              <div className={styles.card__runtime}>
                {movie ? movie.release_date : ""}
                <span className={styles.card__rating}>
                  {movie ? movie.vote_average : ""}
                  <i className="fas fa-star" />
                </span>
              </div>
              <div className={styles.card__description}>
                {movie ? movie?.overview?.slice(0, 118) + "..." : ""}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cards;
