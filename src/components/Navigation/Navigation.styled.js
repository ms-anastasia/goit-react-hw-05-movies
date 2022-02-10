import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavigationLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 30px;
  font-weight: 500;
  color: #2a363b;
  font-size: 18px;
  margin-left: 30px;

  &.active {
    color: #4caf50;
  }
`;
