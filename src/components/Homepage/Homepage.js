import { useState, useEffect } from "react";
import { fetchPopularFilms } from "../../services/api";
import FilmView from "../FilmView/FilmView";
import { GalleryHeader } from "../FilmView/FilmView.styled";

const Homepage = () => {
  const [popularfilms, setPopularFilms] = useState([]);

  useEffect(() => {
    fetchPopularFilms().then((data) =>
      setPopularFilms((state) => [...state, ...data.results])
    );
  }, []);
  return (
    <>
      <GalleryHeader>Trending Movies</GalleryHeader>
      <FilmView films={popularfilms} />;
    </>
  );
};
export default Homepage;
