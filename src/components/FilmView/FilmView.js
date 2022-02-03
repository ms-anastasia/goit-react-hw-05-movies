const FilmView = ({ movies, onClick, error }) => {
  return (
    <div>
      <ul>
        {movies.map((movie) => {
          let imgUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

          return (
            <li key={movie.id}>
              <link to={`${movie.id}`}>
                <div>
                  <img src={imgUrl} alt={movie.original_title} />
                </div>
                <div>
                  {movie.original_title && (
                    <p>{movie.original_title}</p>
                  )}
                  <p>{movie.original_name}</p>
                  <p>{movie.vote_average}</p>
                </div>
              </link>
            </li>
          );
        })}
      </ul>
      
        <div>
          <button type="button" onClick={onClick}>
            Load more...
          </button>
        </div>
    </div>
  );
};
export default FilmView;