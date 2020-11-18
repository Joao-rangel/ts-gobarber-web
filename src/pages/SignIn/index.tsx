import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import LogoImg from '../../assets/logo.svg';

import { Background, Container, Content } from './styles';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={LogoImg} alt="GoBarber" />

      <form>
        <h1>Faça seu logon</h1>

        <input placeholder="E-mail" />

        <input type="password" placeholder="Senha" />

        <button type="submit">Entrar</button>

        <a href="forgot">Esqueci minha senha</a>
      </form>
      <a href="login">
        <FiLogIn />
        Criar Conta
      </a>
    </Content>

    <Background />
  </Container>
);

export default SignIn;
