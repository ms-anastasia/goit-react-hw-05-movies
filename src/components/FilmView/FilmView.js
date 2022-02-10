import { useLocation, Link } from "react-router-dom";
import {
  FilmGallery,
  ListItem,
  GalleryImage,
  FilmTitle,
} from "./FilmView.styled";

const FilmView = ({ films }) => {
  const location = useLocation();

  return (
    <>
      <FilmGallery>
        {films &&
          films.map(({ id, title, poster_path }) => (
            <Link to={`/movies/${id}`} state={{ from: location }} key={id}>
              <ListItem key={id}>
                <GalleryImage
                  src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                  alt={title}
                />
                <FilmTitle>{title}</FilmTitle>
              </ListItem>
            </Link>
          ))}
      </FilmGallery>
    </>
  );
};
export default FilmView;
