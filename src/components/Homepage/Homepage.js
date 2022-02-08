import { useState, useEffect } from "react";
import { fetchPopularFilms } from "../../services/api";
import FilmView from "../FilmView/FilmView";
import { GalleryHeader } from "../FilmView/FilmView.styled";

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
  return ( 
    <>
  <GalleryHeader>Trending Movies</GalleryHeader>
      <FilmView films={popularfilms} onClick={onLoadMoreClick} />;
      </>
  )
};
export default Homepage;
