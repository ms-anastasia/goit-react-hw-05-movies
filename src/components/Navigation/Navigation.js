import { Outlet } from "react-router-dom";
import { NavigationLink } from "./Navigation.styled";

const Navigation = () => (
  <nav>
    <NavigationLink
      to="/"
      className={({ isActive }) => (isActive ? " active" : "")}
    >
      Homepage
    </NavigationLink>

    <NavigationLink
      to="/movies"
      className={({ isActive }) => (isActive ? " active" : "")}
    >
      Movies
    </NavigationLink>
    <Outlet />
  </nav>
);

export default Navigation;
