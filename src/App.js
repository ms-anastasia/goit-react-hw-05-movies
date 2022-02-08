import { Suspense, lazy } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";

const HomePage = lazy(() => import("./components/Homepage/Homepage.js"));
const MainView = lazy(() => import("./components/MainView/MainView.js"));
const FilmInfo = lazy(() => import("./components/FilmInfo/FilmInfo.js"));
const Cast = lazy(() => import("./components/Cast/Cast.js"));
const Reviews = lazy(() => import("./components/Reviews/Reviews.js"));

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/:movieId" element={<FilmInfo />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="movies" element={<MainView />} />
            <Route path="movies/:movieId" element={<FilmInfo />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<HomePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
