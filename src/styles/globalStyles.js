import styled, { createGlobalStyle } from 'styled-components';
import { primaryColor, primaryDarkColor } from '../config/colors';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: none;
  box-sizing: border-box;
  }

  body {
    color: ${primaryColor};
    font-family: sans-serif;
    background: ${primaryDarkColor};
  }

  html, body, #root {
    height: 100%;
  }

  button {
    cursor: pointer;
    background: ${primaryColor};
    border: none;
    color: #fff;
    padding: 10px 20px;
    border-radius: 4px;
    font-weight: 700;
  }

  a {
    color: ${primaryColor};
    text-decoration: none;
  }

  ul {
    list-style: none;
  }
`;

export const Container = styled.section`
  max-width: 360px;
  padding: 30px;
  background: #fff;
  margin: 30px auto;
  text-align: center;
  border-radius: 4px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
`;
