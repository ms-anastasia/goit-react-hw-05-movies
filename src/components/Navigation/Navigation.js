import { Outlet } from "react-router-dom";
import { NavigationLink } from "./Navigation.styled";

const Navigation = () => (
  <nav>
    <NavigationLink
      to="/"
      style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}
    >
      Homepage
    </NavigationLink>

    <NavigationLink
      to="/movies"
      style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}
    >
      Movies
    </NavigationLink>
    <Outlet />
  </nav>
);

export default Navigation;
