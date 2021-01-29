import React, { useEffect, useState } from 'react';
import { FiClock, FiPower, FiCalendar } from 'react-icons/fi';
import 'react-day-picker/lib/style.css';

import { Link } from 'react-router-dom';
import {
  Container,
  Header,
  HeaderContent,
  Profile,
  Content,
  ProviderCard,
  ProvidersList,
} from './styles';

import logoImg from '../../assets/logo.svg';
import avatarImg from '../../assets/avatar-gobarber.svg';
import { useAuth } from '../../hooks/auth';
import api from '../../services/api';

interface Provider {
  id: string;
  name: string;
  avatar_url: string;
}

const Providers: React.FC = () => {
  const { signOut, user } = useAuth();

  const [providers, setProviders] = useState<Provider[]>([]);

  useEffect(() => {
    api.get('/providers').then(response => {
      setProviders(response.data);
    });
  }, []);

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="GoBarber" />

          <Profile>
            <Link to="/profile">
              <img src={user.avatar_url || avatarImg} alt={user.name} />
            </Link>
            <div>
              <span>Bem vindo,</span>
              <Link to="/profile">
                <strong>{user.name}</strong>
              </Link>
            </div>
          </Profile>

          <button type="button" onClick={signOut}>
            <FiPower />
          </button>
        </HeaderContent>
      </Header>

      <Content>
        <h1>Barbearias</h1>

        <ProvidersList>
          {providers.map(provider => (
            <ProviderCard key={provider.id}>
              <img src={provider.avatar_url || avatarImg} alt={provider.name} />
              <strong>{user.name}</strong>
              <div>
                <span>
                  <FiCalendar />
                  <strong>Segunda à Sexta</strong>
                </span>
                <span>
                  <FiClock />
                  <strong>8h às 18h</strong>
                </span>
              </div>
            </ProviderCard>
          ))}
        </ProvidersList>
      </Content>
    </Container>
  );
};

export default Providers;
