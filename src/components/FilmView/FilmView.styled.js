import styled from "styled-components";

export const GalleryHeader = styled.h1`
  padding: 12px;
  font-weight: 800;
  color: #2a363b;
  font-size: 35px;
  text-align: center;
  margin-top: 0px;
`;

export const FilmGallery = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

export const ListItem = styled.li`
  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const GalleryImage = styled.img`
  width: 100%;
  height: 500px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;

export const FilmTitle = styled.p`
  display: inline-block;
  padding: 12px;
  font-weight: 500;
  color: #2a363b;
  font-size: 18px;
`;
