import React, { useEffect, useState } from "react";
import Cards from "../card";
import styles from "@/styles/Home.module.css";

const MovieList: React.FC<{ movieList: any[] }> = ({ movieList }) => {
  const type = "Popular";

  console.log("Movie List Side ", movieList);

  return (
    <div className={styles.movie__list}>
      <div className={styles.list__cards}>
        {movieList?.map((movie) => (
          <Cards movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
