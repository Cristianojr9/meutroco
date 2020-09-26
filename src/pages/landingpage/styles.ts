import styled from 'styled-components';
import { shade } from 'polished';

import PromoDireita from '../../assets/direita.png';
import PromoEsquerda from '../../assets/esquerda.png';

export const Container = styled.div`
  width: 100%;
`;

export const NavBar = styled.div`
  width: 100%;
  height: 170px;

  display: flex;
  justify-content: center;
  align-items: center;
  
  ul {
    @media (max-width: 780px) {
      & { 
        display: none;
      }
    }
    margin-left: 20%;
  } 

  a {
    font-size: 23px;
    font-weight: bold;
    cursor: pointer;
    text-decoration: none;
    margin-right: 20px;
    color: #747474;

    transition: 0.2s;

    @media (max-width: 780px) {
      & {

        font-size: 10px;
      }
    }

    &:hover {
      color: ${shade(0.5, '#747474')};
    }
  }

  img {
    cursor: pointer;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  
  @media (max-width: 780px) {
    & {
      display: grid;
      align-items: center;
      justify-content: center;
      width: 160px;

      img {
        display: none;
      }
    }
  }

  section {
    text-align: center;
  }

  h2 {
    font-size: 78px;
    font-weight: lighter;

    @media (max-width: 780px) {
      & {
        margin-top: -10px;
        font-size: 30px;
        margin: auto 0;
        margin-left: 42%;
      }
    }
  }

  button {
    width: 350px;
    height: 90px;
    background: #FD622E;
    border: none;
    border-radius: 10px;
    font-size: 28px;

    margin-left: 350px;
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    
    color: white;
    transition: 0.2s;

    @media (max-width: 780px) {
      & {
        margin: auto 2;
        width: 350px;
        height: 70px;
        font-size: 24px;
        padding: 26px;
        margin-left: 240px;
      }
    }

    &:hover {
      border: 2px solid #FD622E;
      background: white;
      color: #FD622E;
    }

    img {
      margin-right: 10px;
    }
  }
`;

export const InfoSection = styled.div`
  margin-top: 160px;
  height: 82vh;

  h1 {
    display: flex;
    align-items: center;
    justify-content: center;

    text-align: center;

    font-weight: bolder;
  }

  section {
    display: flex;
    justify-content: space-around;
    align-items: center;

    margin-top: 4%;

    p {
      font-size: 52px;
      font-weight: lighter;
      position: relative;
    }

    p::before {
      content: '';
      width: 100px;
      height: 5px;
      margin-top: -10px;
      position: absolute;
      background: #FD622E;
      margin-left: 3px;
    }
  }
`;

export const BusinessSection = styled.div`
  height: 100vh;
  margin-top: 42px;

  background: #FD622E ;

  display: grid;
  justify-content: center;

  h1 {
    display: flex;
    align-items: center;
    justify-content: center;

    font-weight: bolder;
    color: #fff;
  }

  section {

    display: flex;
    justify-content: space-around;
    align-items: center;
    
    p {
      font-size: 52px;
      font-weight: lighter;
      position: relative;
      margin-left: 50px;
      color: #fff;
    }

    p::before {
      content: '';
      width: 100px;
      height: 5px;
      margin-top: -10px;
      position: absolute;
      background: #fff;
      margin-left: 3px;
    }
  }
`;

export const Promo = styled.div`
  margin-top: 10%;

  height: 800px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    place-content: center;

    text-align: center;

    width: 100%;
    height: 100%;

    background: url(${PromoEsquerda}) no-repeat center;
    background-size: cover;

    button {
      margin-top: 10px;

      width: 350px;
      height: 80px;

      border-color: transparent;
      border-radius: 58px;

      font-size: 35px;
      background-color: white;
      
      transition: 0.2s;

      &:hover {
        background: #FD622E;
        color: white;
        box-shadow: 2px 2px #1111;
      }
    }  

    p {
      margin-top: 10px;
      font-size: 35px;
      font-weight: lighter;
      color: white;
    }

    h1 {
      margin-top: 5px;
      font-size: 67px;
      color: white;
    }
  }

  section {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    place-content: center;
    text-align: center;

    background: url(${PromoDireita}) no-repeat center;
    background-size: cover;
    background-color: black;
    
    button {
      width: 350px;
      height: 80px;
      margin-top: 10px;

      border-color: transparent;
      border-radius: 58px;

      font-size: 35px;
      background-color: white;

      transition: 0.2s;

      &:hover {
        background: #FD622E;
        color: white;
        box-shadow: 2px 2px #1111;
      }
    }

    p {
      margin-top: 10px;

      font-size: 35px;
      font-weight: lighter;
      color: white;
    }

    h1 {
      margin-top: 10px;
      font-size: 67px;
      color: white;
    }
  }
  
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 6%;

  @media (max-width: 780px) {
    & {
      display: flex;
      align-items: center;
    }
  }

  h1 {
    font-weight: normal;
    font-size: 45px;

    @media (max-width: 780px) {
      & {
        font-size: 25px;
      }
    }
  }

  span {
    font-size: 35px;
    font-weight: lighter;

    margin-top: 3%;
    position: relative;

    @media (max-width: 780px) {
      & {
        font-size: 25px;
        margin-top: 60px;
        text-align: center;
      }
    }
  }

  span::before {
    content: '';
    width: 377px;
    height: 5px;
    margin-top: -5%;
    margin-left: 25%;
    position: absolute;
    background: #FD622E;

    @media (max-width: 780px) {
      & {
        margin-top: -35px;
        width: 277px;
        margin-left: 20%;
      }
    }
  }

  input {
    width: 500px;
    height: 30px;

    font-size: 35px;
    border-radius: 15px;
    border-color: transparent;

    background: #C9C9C9;
    transition: 0.2s;

    margin-top: 2%;
    margin-left: -20px;
    flex: 1;
    padding: 15px;


    &::placeholder {
      margin-left: 50px;
      font-size: 25px;
    }

    &:hover {
      border-color: #FD622E;
      background-color: white;
    }

    @media (max-width: 780px) {
      & {
        width: 350px;
        height: 70px;
        margin-left: 1px;
      }
    }
  }
`;

export const Team = styled.div`
  margin-top: 10%;
  
  h1 {

  }
`;

export const Footer = styled.div`
  margin-top: 70px;
  height: 400px;
  background: #1A1A1A;

  display: flex;
  align-items: center;
  justify-content: space-around;

  color: #ffff;

  flex: 1;

  @media (max-width: 780px) {
    & {
      display: grid;
      align-items: center;
      justify-content: space-around;
    }
  }

  h2 {
    font-weight: bold;
  }

  section {
    display: flex;
    align-items: center;

    span {
      margin-left: 10px;
    }
  }
`;
