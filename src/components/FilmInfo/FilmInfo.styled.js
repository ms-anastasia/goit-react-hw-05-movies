import styled from "styled-components";

export const BackButton = styled.button`
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 8px 32px;
  text-align: center;
  text-decoration: none;
  display: block;
  font-size: 16px;
  border-radius: 12px;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin-left: 60px;
  margin-bottom: 30px;
  cursor: pointer;
`;

export const FilmTitle = styled.h3`
  display: inline-block;
  font-weight: 500;
  color: #2a363b;
  font-size: 18px;
  margin-top: 0px;
  margin-bottom: 15px;
`;

export const FilmContainer = styled.div`
  padding: 0px 60px;
`;
export const MainFilmInfo = styled.div`
  display: flex;
`;

export const Poster = styled.img`
  width: 350px;
  height: 500px;
  object-fit: cover;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const FilmInfo = styled.div`
  padding: 30px;
`;
