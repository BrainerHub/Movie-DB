import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";

export const getMoviesBySearchQuery = async (query: string) => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/search/movie?api_key=4e44d9029b1270a757cddc766a1bcb63&query=${query}`
    );

    return {
      data: data.results,
      error: false,
    };
  } catch (error) {
    return {
      data: null,
      error: true,
    };
  }
};

export const getMovieById = async (id: string) => {
  if (id) {
    try {
      const { data } = await axios.get(
        `${BASE_URL}/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
      );

      return {
        data: data,
        error: false,
      };
    } catch (error) {
      return {
        data: null,
        error: true,
      };
    }
  } else {
    return {
      data: null,
      error: true,
    };
  }
};

export const getPopularMovie = async () => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
    );

    return {
      data: data.results,
      error: false,
    };
  } catch (error) {
    return {
      data: null,
      error: true,
    };
  }
};

export const getTopMovies = async () => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/movie/top_rated?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
    );

    return {
      data: data.results,
      error: false,
    };
  } catch (error) {
    return {
      data: null,
      error: true,
    };
  }
};

export const getUpcomingMovie = async () => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/movie/upcoming?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
    );

    return {
      data: data.results,
      error: false,
    };
  } catch (error) {
    return {
      data: null,
      error: true,
    };
  }
};

export const getMovieDetails = async (id:string) => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
    );

    return {
      data: data,
      error: false,
    };
  } catch (error) {
    return {
      data: null,
      error: true,
    };
  }
};
