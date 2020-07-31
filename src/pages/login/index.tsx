import React from 'react';

import {
  Container, Content, Background,
} from './styles';

import Logo from '../../assets/logo.svg';

const LogInPage: React.FC = () => (
  <Container>
    <Background />
    <Content>
      <img src={Logo} alt="meutroco" />

      <form>
        <h1>
          Bem-vindo Admnistrador
          <br />
          Utilize seu email e senha para acessar
        </h1>

        <input type="email" placeholder="Login" />

        <input type="password" placeholder="Senha" />

        <a href="forgot">Esqueci a senha</a>

        <button type="submit">Login</button>

        <h1>Não tem cadastro? Sem problema, click em cadastrar</h1>

        <button type="submit">Cadastrar</button>
      </form>
    </Content>
  </Container>
);

export default LogInPage;
