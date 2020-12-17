import React, { useState } from 'react';
import { FiClock, FiPower } from 'react-icons/fi';
import {
  Container,
  Header,
  HeaderContent,
  Profile,
  Content,
  Schedule,
  NextAppointment,
  Section,
  Appointment,
  Calendar,
} from './styles';

import LogoImg from '../../assets/logo.svg';
import { useAuth } from '../../Hooks/auth';

const Dashboard: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const { signOut, user } = useAuth();

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={LogoImg} alt="GoBarber" />

          <Profile>
            <img src={user.avatar_url} alt={user.name} />
            <div>
              <span>Bem vindo,</span>
              <strong>{user.name}</strong>
            </div>
          </Profile>

          <button type="button" onClick={signOut}>
            <FiPower />
          </button>
        </HeaderContent>
      </Header>

      <Content>
        <Schedule>
          <h1>Horários agendados</h1>
          <p>
            <span>Hoje</span>
            <span>Dia 06</span>
            <span>Segunda-feira</span>
          </p>

          <NextAppointment>
            <strong>Próximo atendimento</strong>
            <div>
              <img
                src="https://avatars3.githubusercontent.com/u/59208261?s=460&u=ec733620de214fef7f2ce938d6bc22a80d145b02&v=4"
                alt="João Rangel"
              />
              <strong>João Rangel</strong>
              <span>
                <FiClock />
                8:00
              </span>
            </div>
          </NextAppointment>

          <Section>
            <strong>Manhã</strong>
            <Appointment>
              <span>
                <FiClock />
                8:00
              </span>
              <div>
                <img
                  src="https://avatars3.githubusercontent.com/u/59208261?s=460&u=ec733620de214fef7f2ce938d6bc22a80d145b02&v=4"
                  alt="João Rangel"
                />
                <strong>João Rangel</strong>
              </div>
            </Appointment>
            <Appointment>
              <span>
                <FiClock />
                8:00
              </span>
              <div>
                <img
                  src="https://avatars3.githubusercontent.com/u/59208261?s=460&u=ec733620de214fef7f2ce938d6bc22a80d145b02&v=4"
                  alt="João Rangel"
                />
                <strong>João Rangel</strong>
              </div>
            </Appointment>
          </Section>

          <Section>
            <strong>Tarde</strong>
            <Appointment>
              <span>
                <FiClock />
                8:00
              </span>
              <div>
                <img
                  src="https://avatars3.githubusercontent.com/u/59208261?s=460&u=ec733620de214fef7f2ce938d6bc22a80d145b02&v=4"
                  alt="João Rangel"
                />
                <strong>João Rangel</strong>
              </div>
            </Appointment>
          </Section>
        </Schedule>
        <Calendar />
      </Content>
    </Container>
  );
};

export default Dashboard;
