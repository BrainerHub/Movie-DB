import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { getMovieById, getMoviesBySearchQuery, getPopularMovie } from "@/services/APIs";
import { IconButton, InputBase, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useRouter } from "next/router";

const SearchbyMovieName = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState<any[]>([]);
  const [showView, setShowView] = useState(false);

  const getByQuery = () => {
    getMoviesBySearchQuery(searchQuery).then((result) => {
      if (!result.error) {
        setMovies(result.data);
        setShowView(result.data.length === 0 ? false : true);
      } else {
        setShowView(false);
        alert("API getting failed");
      }
    });
  };

  useEffect(() => {
    getByQuery();
  }, [searchQuery]);

  return (
    <div>
      <>
        <div style={{ position: "relative",marginTop:"30px",marginLeft:"56px" }}>
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "right",
              width: "95%",
            }}
          >
            <InputBase
              onChange={(e) => {
                setSearchQuery(e.target.value);
              }}
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search by Movie Name"
            />
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>

          {showView && (
            <div
              style={{
                width: "95.5%",
                height: 500,
                backgroundColor: "#f1f1f1",
                position: "absolute",
                zIndex: 999,
                overflowY: "scroll",
                cursor: "pointer",
              }}
            >
              {movies.map((movie: any, index) => {
                return (
                  <>
                    <div
                      onClick={() => {
                        router.push(`/movie_detailsPage/${movie.id}`);
                        setShowView(false);
                      }}
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        margin: "10px",
                      }}
                    >
                      <img
                        style={{
                          width: "80px",
                          height: "80px",
                          borderRadius: 10,
                        }}
                        src={`https://image.tmdb.org/t/p/original${
                          movie ? movie.poster_path : ""
                        }`}
                      />
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          marginLeft: 10,
                        }}
                      >
                        <span
                          style={{
                            fontSize: "18px",
                            fontWeight: "bold",
                            marginTop: "5px",
                          }}
                        >
                          {movie.original_title}
                        </span>
                        <span
                          style={{
                            fontSize: "14px",
                            fontWeight: "400",
                            marginTop: "10px",
                          }}
                        >
                          {movie?.overview?.slice(0, 60) + "..."}
                        </span>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          )}
        </div>
      </>
    </div>
  );
};

export default SearchbyMovieName;
