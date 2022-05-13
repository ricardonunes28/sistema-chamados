import styled from "styled-components";
import cover from "../../assets/cover.png";

export const Sidebar = styled.div`
  margin: 0;
  padding: 0;
  width: 200px;
  background-color: #181c2e;
  position: fixed;
  height: 100%;
  overflow: auto;

  div {
    background: url(${cover});
    background-color: #181c2e;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 150px;
    padding-top: 30px;

    @media (max-width: 700px) {
        display: none;
    }
  }

  img {
    border-radius: 50%;
    display: block;
    margin: auto;
    width: 90px;
    height: 90px;
    -webkit-filter: drop-shadow(2px 3px 6px #121212);
    filter: drop-shadow(2px 3px 6px #121212);
    object-fit: cover;
  }

  @media(max-width: 700px) {
    width: 100%;
    height: auto;
    position: relative;
  }
`;

export const Options = styled.a`
  display: block;
  color: rgba(255, 255, 255, 0.7);
  padding: 16px;
  text-decoration: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;

  svg {
    margin-right: 0.5em;
  }

  &:hover {
    background-color: #121212;
    color: #fff;
  }

  @media(max-width: 700px) {
    float:left;
  }
`;
