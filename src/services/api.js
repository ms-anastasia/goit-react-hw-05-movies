const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "f4a11e197d605aa881cfd3a8718b9d77";

export function fetchPopularFilms(page) {
  return fetch(
    `${BASE_URL}/trending/all/day?api_key=${API_KEY}&language=en-US&page=${page}&include_adult=false`
  ).then((response) => {
    if (!response.ok) {
      throw new Error("Something went wrong");
    }
    return response.json();
  });
}
export function fetchFilms(page, request) {
  return fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&page=${page}&include_adult=false&query=${request}`
  ).then((response) => {
    if (!response.ok) {
      throw new Error("Something went wrong");
    }
    return response.json();
  });
}
export function fetchFilmInfo(filmId) {
  return fetch(
    `${BASE_URL}/movie/${filmId}?api_key=${API_KEY}&language=en-US`
  ).then((response) => {
    if (!response.ok) {
      throw new Error("Something went wrong");
    }
    return response.json();
  });
}
export function fetchActors(filmId) {
  return fetch(
    `${BASE_URL}/movie/${filmId}/credits?api_key=${API_KEY}&language=en-US`
  ).then((response) => {
    if (!response.ok) {
      throw new Error("Something went wrong");
    }
    return response.json();
  });
}
export function fetchReviews(filmId) {
  return fetch(
    `${BASE_URL}/movie/${filmId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  ).then((response) => {
    if (!response.ok) {
      throw new Error("Something went wrong");
    }
    return response.json();
  });
}