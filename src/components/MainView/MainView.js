import { useState, useEffect } from "react";
import Searchbar from "../Searchbar/Searchbar";
import { fetchFilms } from "../../services/api";
import FilmView from "../FilmView/FilmView";
import { Message } from "./MainView.styled";
import { ToastContainer } from "react-toastify";

const Films = () => {
  const [films, setFilms] = useState([]);
  const [request, setRequest] = useState("");
  const [error, setError] = useState("");
  const [status, setStatus] = useState("idle");

  const handleFormSubmit = (request) => {
    setRequest(request);
    setFilms([]);
  };

  useEffect(() => {
    if (request === "") {
      return;
    }
    setStatus("pending");
    fetchFilms(request)
      .then((data) => {
        if (data.total_results) {
          setFilms((state) => [...state, ...data.results]);
          setStatus("resolved");
        } else {
          throw new Error("Information is not found");
        }
      })
      .catch((error) => {
        setError(error);
        setStatus("rejected");
      });
  }, [request]);

  return (
    <div>
      <Searchbar onSubmit={handleFormSubmit} />
      {status === "idle" && <Message>Please enter your query</Message>}
      {status === "pending" && <Message>Loading...</Message>}
      {status === "resolved" && <FilmView films={films} error={error} />}
      {status === "rejected" && <Message> {error.message}</Message>}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};
export default Films;
