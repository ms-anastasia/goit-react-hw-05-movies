import { fetchFilmInfo } from "../../services/api";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link, Outlet } from "react-router-dom";
import { BackButton, FilmTitle, FilmContainer, Poster, MainFilmInfo, FilmInfo } from "./FilmInfo.styled";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchFilmInfo(movieId)
      .then((data) => {
        return setMovie(data);
      })
      .catch((error) => {
        setError(error);
      });
  }, [movieId]);

  const imgURL = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <>
      <BackButton onClick={() => navigate(-1)}> Back </BackButton>
      {movie && (
        <FilmContainer>
            <FilmTitle>{movie.original_title}</FilmTitle>
            
            <MainFilmInfo>
              <Poster src={imgURL}></Poster>
              <FilmInfo>
              <p>Vote Average: {movie.vote_average}</p>
              <h4>Overview</h4>
              <p>{movie.overview}</p>
              <h4>Genres</h4>
              {movie.genres && (
                <ul>
                  {movie.genres.map((genre, index) => (
                    <li key={index}>{genre.name}</li>
                  ))}
                </ul>
                )}
                </FilmInfo>
            </MainFilmInfo>

          <div>
            <h4>Additional Information</h4>
            <ul>
              <li>
                <Link to="cast">Cast</Link>
              </li>
              <li>
                <Link to="reviews">Reviews</Link>
              </li>
            </ul>
          </div>
          <Outlet />
        </FilmContainer>
      )}
    </>
  );
};
export default MovieDetailsPage;
