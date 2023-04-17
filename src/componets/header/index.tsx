import React from "react";
import styles from "@/styles/Home.module.css";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  return (
    <div className={styles.header}>
      <div className={styles.headerLeft}>
        <div
          onClick={() => {
            router.push("/main_page");
          }}
        >
          <img
            className={styles.header__icon}
            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
          />
        </div>
        <div
          onClick={() => {
            router.push("/popular_movie");
          }}
          style={{ textDecoration: "none" }}
        >
          <span className={styles.title}>Popular</span>
        </div>
        <div
          onClick={() => {
            router.push("/topRated_movie");
          }}
          style={{ textDecoration: "none" }}
        >
          <span className={styles.title}>Top Rated</span>
        </div>
        <div
          onClick={() => {
            router.push("/upcoming_movie");
          }}
          style={{ textDecoration: "none" }}
        >
          <span className={styles.title}>Upcoming</span>
        </div>
        <div
          onClick={() => {
            router.push("/SearchbyMovieName");
          }}
          style={{ textDecoration: "none" }}
        >
          <span className={styles.title}>Search by Movie Name</span>
        </div>
        <div
          onClick={() => {
            router.push("/SearchbyMovieId");
          }}
          style={{ textDecoration: "none" }}
        >
          <span className={styles.title}>Search by Movie ID</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
