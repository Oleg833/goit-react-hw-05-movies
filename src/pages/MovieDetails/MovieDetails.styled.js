import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Btn = styled.button`
  border: none;
  background-color: transparent;
  margin: 20px 0 0 35px;
  padding: 0;
  font-size: 24px;
  font-weight: 700;
  cursor: pointer;
`;

export const MovieContainer = styled.div`
  display: flex;
  padding: 30px;
  background-color: #3f51b542;
  margin: 20px 30px 30px;
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
`;

export const Img = styled.img`
  border-radius: 25px;
  max-width: 300px;
`;

export const MovieInfo = styled.div`
  padding-left: 3px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const MovieTitle = styled.h2`
  text-align: center;
  margin-left: 0;
`;

export const AddInfo = styled.h3`
  text-align: center;
  margin-left: 35px;
  margin-bottom: 0;
`;

export const InfoList = styled.ul`
  text-align: center;
  list-style: none;
  margin-left: 0;
  margin-top: 0;
`;

export const InfoLink = styled(NavLink)`
  text-align: center;
  color: black;
  text-decoration: none;
  font-weight: 600;
  &.active {
    color: blueviolet;
    font-weight: 700;
    transform: scale(1.3);
  }
`;
