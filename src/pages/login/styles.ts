import styled from 'styled-components';

import BackgroundImg from '../../assets/login.png';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  place-content: center;

  width: 100%;
  max-width: 1000px;

  form {
    display: grid;
    margin: 10px 0; 
    text-align: center;

    h1 {
      font-weight: lighter;
      color: #111;
      margin-bottom: 24px;
      font-size: 18px;
      margin-top: 10px;
    }

    input {
      border: none; 
      border-bottom: 2px solid #cccc;
      margin-top: 40px;

      &:placeholder {
        color: #111;
      }
    }

    button {
      width: 185px;
      height: 50px;
      border-radius: 4px;
      margin-top: 10px;
      margin-left: 120px;

      border-color: transparent;
      background: #FD622E;
      color: white;
      font-size: 18px;

      &:hover {
        border: 2px solid #FD622E;
        background: white;
        color: #FD622E;
      }
    }

    a {
      color: #FD622E;
      font-size: 15px;
      text-decoration: none;
      margin-top: 15px;
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${BackgroundImg}) no-repeat center;
  background-size: cover;
`;

export const Input = styled.div``;

export const Button = styled.div``;
