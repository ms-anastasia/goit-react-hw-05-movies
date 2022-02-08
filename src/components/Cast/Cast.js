import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchActors } from "../../services/api";
import defaultImage from "../../images/avatar.png";
import { CastGallery, CastItem, CastImage } from "./Cast.styled";

const Cast = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchActors(movieId)
      .then((data) => {
        if (data.cast.length) {
          return setActors(data.cast);
        } else {
          throw new Error("Information is not found");
        }
      })
      .catch((error) => {
        setError(error);
      });
  }, [movieId]);

  return (
    <>
      <h2>Cast</h2>
      {error && (
        <p>We don't have any information about the cast for this movie.</p>
      )}
      <CastGallery>
        {actors.map((actor) => {
          let imgURL = "";
          if (actor.profile_path) {
            imgURL = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;
          } else {
            imgURL = defaultImage;
          }
          return (
            <CastItem key={actor.id}>
              <CastImage src={imgURL} alt={actor.name} />
              <div>
                <h3>{actor.name}</h3>
                <p>
                  <i>Character:</i> {actor.character}
                </p>
              </div>
            </CastItem>
          );
        })}
      </CastGallery>
    </>
  );
};
export default Cast;
