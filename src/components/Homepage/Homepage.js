import { useState, useEffect } from "react";
import fetchPopularFilms from "../../services/api";

const Homepage = () => {
  const [popularfilms, setPopularFilms] = useState([]);
  const [page, setPage] = useState(1);

  const onLoadMoreClick = () => {
    setPage((s) => s + 1);
  };

  useEffect(() => {
    fetchPopularFilms(page).then((data) =>
      setPopularFilms((state) => [...state, ...data.results])
    );
  }, [page]);
  return <MoviesView movies={popularMovies} onClick={onLoadMoreClick} />;
};
export default Homepage;