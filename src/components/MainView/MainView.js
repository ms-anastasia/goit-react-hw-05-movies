import { useState, useEffect } from "react";
import Searchbar from "../Searchbar/Searchbar";
import { fetchFilms } from "../../services/api";
import FilmView from "../FilmView/FilmView";
import { Message } from "./MainView.styled";

const Films = () => {
  const [films, setFilms] = useState([]);
  const [request, setRequest] = useState("");
  const [page, setPage] = useState(1);
  const [error, setError] = useState("");
  const [status, setStatus] = useState("idle");

  const handleFormSubmit = (request) => {
    setRequest(request);
    setPage(1);
    setFilms([]);
  };
  const onLoadMoreClick = () => {
    setPage((state) => state + 1);
  };

  useEffect(() => {
    if (request === "") {
      return;
    }
    setStatus("pending");
    fetchFilms(page, request)
      .then((data) => {
        if (data.total_results) {
          setFilms((state) => [...state, ...data.results]);
          setStatus("resolved");
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth",
          });
        } else {
          throw new Error("Information is not found");
        }
      })
      .catch((error) => {
        setError(error);
        setStatus("rejected");
      });
  }, [request, page]);

  return (
    <div>
      <Searchbar onSubmit={handleFormSubmit} />
      {status === "idle" && <Message>Please enter your query</Message>}
      {status === "pending" && <Message>Loading...</Message>}
      {status === "resolved" && (
        <FilmView films={films} onClick={onLoadMoreClick} error={error} />
      )}
      {status === "rejected" && <Message> {error.message}</Message>}
    </div>
  );
};
export default Films;
