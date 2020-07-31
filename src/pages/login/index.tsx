import React from 'react';

import {
  Container, Content, Background, Input,
} from './styles';

const LogInPage: React.FC = () => (
  <Container>
    <Background />
    <Content>
      <img src={} alt="meutroco" />

      <form>
        <h2>
          Bem-vindo Admnistrador
          <br />
          Utilize seu email e senha para acessar
        </h2>

        <Input name="email" placeholder="Login" />
        <Input name="password" type="password" placeholder="Senha" />

        <a href="">Esqueci a senha</a>
        <Button type="submit">Login</Button>

        <Button type="submit">Cadastrar</Button>
      </form>
    </Content>
  </Container>
);

export default LogInPage;
