import React, { useState } from 'react';
import { FaGooglePlay, FaInstagram } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import {
  Container, Content, NavBar, Form, Footer,
} from './styles';

import Logo from '../../assets/logo.svg';
import Celular from '../../assets/celular.svg';
// import Esquerda from '../../assets/sombra.svg';
// import Cofrinho from '../../assets/cofrinho.svg';
// import Mulheres from '../../assets/mulheres.svg';
// import Carrinho from '../../assets/carrinho.svg';

// import WhoWeAre from '../whoWeAre';
// import Benefits from '../benefits';
// import ForYou from '../forYou';
// import ForYoourCompany from '../forYourCompany';
// import OurTeam from '../team';

const LandingPage: React.FC = () => {
  const [email, setEmail] = useState('');

  function addEmail() {
    try {
      setEmail(email);
      console.log(email);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Container>
      <NavBar>
        <img src={Logo} alt="Logo" />
        <ul>
          <Link to="/">Quem Somos</Link>
          <Link to="/">Para você</Link>
          <Link to="/">Para sua empresa</Link>
          <Link to="/">Benefícios</Link>
          <Link to="/">Equipe</Link>
        </ul>
      </NavBar>
      <Content>
        <section>
          <h2>
            Suas moedas esquecidas
            {' '}
            <p><b>farão toda a diferença agora!</b></p>
          </h2>
          <button type="submit">
            <FaGooglePlay size="50px" />
            <p>
              <b>Em breve no</b>
              <br />
              Google Play
            </p>
          </button>
        </section>
        <img src={Celular} alt="Celular" />
      </Content>

      <Form>
        <h1>Conheça mais sobre a meu troco</h1>
        <span>Deixe seu e-mail abaixo para entrarmos em contato</span>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onSubmit={addEmail}
        />

      </Form>
      <Footer>
        <div>
          <h2>Meu Troco</h2>
          <small>
            Onde cada centavo conta
            {' '}
            <br />
            {' '}
            Receba seu troco de forma rápida e segura
            {' '}
            <br />
            {' '}
            O troco agora é certo
            {' '}
            <br />
            {' '}
            Segurança e agilidade
          </small>
        </div>

        <div>
          <h2>Parceiros</h2>
          <span>
            Praia
            {' '}
            <br />
            {' '}
            Nutec
            {' '}
            <br />
            Corredores digitais
            {' '}
            <br />

          </span>
        </div>
        <div>
          <section>
            <AiOutlineMail size={30} />
            <span>contatomeutroco@gmail.com</span>
          </section>
          <section>
            <FaInstagram size={30} />
            <span>@meu_troco</span>
          </section>
        </div>

      </Footer>

      {/*
      <InfoSection>
      <h1>
        O que é a meu troco?
      </h1>
      <section>
        <img src={Cofrinho} alt="cofrinho" />
        <p>
          Somos uma carteira virtual que irá
          {' '}
          <br />
          {' '}
          digitalizar suas moedas, trazendo
          <br />
          {' '}
          conforto, segurança e uma
          {' '}
          <br />
          educação financeira. Uma startup
          {' '}
          <br />
          100% cearense, criada para
          {' '}
          <br />
          facilitar o repasse de troco em
          {' '}
          <br />
          estabelecimentos comercias.
        </p>
      </section>
    </InfoSection>
    <BusinessSection>
      <h1>
        Utilize seu troco em qualquer lugar
      </h1>
      <section>
        <p>
          Nossa aplicação irá simplificar e
          {' '}
          <br />
          {' '}
          facilitar o modo de você receber o
          <br />
          {' '}
          troco em estabelecimentos
          {' '}
          <br />
          comerciais, além de realizar
          {' '}
          <br />
          pagamentos, transferências para
          {' '}
          <br />
          amigos, compras online e
          {' '}
          <br />
          compras em lojas físicas.
        </p>
        <img src={Mulheres} alt="mulheres" />
      </section>
    </BusinessSection>
    <InfoSection>
      <h1>
        Você pode usar agora na sua
        {' '}
        <br />
        empresa
      </h1>
      <section>
        <img src={Carrinho} alt="cofrinho" />
        <p>
          Iremos digitalizar o seu troco
          {' '}
          <br />
          {' '}
          comerciante, facilitando o repasse
          <br />
          {' '}
          de troco para seus clientes de
          {' '}
          <br />
          maneira eficiente e segura. Você
          {' '}
          <br />
          não terá mais quebra de caixa,
          {' '}
          <br />
          grandes gastos com transporte de
          {' '}
          <br />
          valores e com seguros.
        </p>
      </section>
    </InfoSection>
    <Promo>
      <div>
        <h1>Para você</h1>
        <p>
          Vamos ajudar a voce controlar e receber seu
          {' '}
          <br />
          troco sempre
        </p>
        <button type="submit">Saiba mais</button>
      </div>
      <section>
        <h1>Para você</h1>
        <p>
          Vamos ajudar a voce controlar e receber seu
          {' '}
          <br />
          troco sempre
        </p>
        <button type="submit">Saiba mais</button>
      </section>
    </Promo>

    <Team>
      <h1>Conheça nossa equipe</h1>
      <>
        <img src="" alt="" />
        <span />
        <p />
        icones
      </>
      <>
        <img src="" alt="" />
        <span />
        <p />
        icones
      </>
      <>
        <img src="" alt="" />
        <span />
        <p />
        icones
      </>
    </Team>
     */}
    </Container>
  );
};

export default LandingPage;
