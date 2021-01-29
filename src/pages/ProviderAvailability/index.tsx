import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { FiPower } from 'react-icons/fi';
import 'react-day-picker/lib/style.css';

import { Link, useRouteMatch } from 'react-router-dom';
import DayPicker, { DayModifiers } from 'react-day-picker';
import { format, isToday, isTomorrow } from 'date-fns'; // eslint-disable-line import/no-duplicates
import { ptBR } from 'date-fns/locale'; // eslint-disable-line import/no-duplicates
import {
  Container,
  Header,
  HeaderContent,
  Profile,
  Content,
  Availability,
  Calendar,
  Section,
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

interface Availability {
  day: number;
  hour: number;
  available: boolean;
}

interface MonthAvailabilityItem {
  day: number;
  available: boolean;
}

const Providers: React.FC = () => {
  const { signOut, user } = useAuth();
  const { params } = useRouteMatch<Provider>();

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [dayAvailability, setDayAvailability] = useState<Availability[] | null>(
    null,
  );

  useEffect(() => {
    api
      .get(`providers/${params.id}/day-availability`, {
        params: {
          year: selectedDate.getFullYear(),
          month: selectedDate.getMonth() + 1,
          day: selectedDate.getDate(),
        },
      })
      .then(response => {
        setDayAvailability(response.data);
      });
  }, [params, selectedDate]);

  const morningAvailability = useMemo(() => {
    return dayAvailability?.filter(availability => availability.hour < 12);
  }, [dayAvailability]);

  const afternoonAvailability = useMemo(() => {
    return dayAvailability?.filter(availability => availability.hour >= 12);
  }, [dayAvailability]);

  const [monthAvailability, setMonthAvailability] = useState<
    MonthAvailabilityItem[]
  >([]);

  const handleDateChange = useCallback((day: Date, modifiers: DayModifiers) => {
    if (modifiers.available && !modifiers.disabled) {
      setSelectedDate(day);
    }
  }, []);

  const handleMonthChange = useCallback((month: Date) => {
    setCurrentMonth(month);
  }, []);

  useEffect(() => {
    api
      .get(`/providers/${user.id}/month-availability`, {
        params: {
          year: currentMonth.getFullYear(),
          month: currentMonth.getMonth() + 1,
        },
      })
      .then(response => {
        setMonthAvailability(response.data);
      });
  }, [currentMonth, user.id]);

  const disabledDays = useMemo(() => {
    const dates = monthAvailability
      .filter(monthDay => monthDay.available === false)
      .map(monthDay => {
        const year = currentMonth.getFullYear();
        const month = currentMonth.getMonth();

        return new Date(year, month, monthDay.day);
      });

    return dates;
  }, [currentMonth, monthAvailability]);

  const selectedDateAsText = useMemo(() => {
    return format(selectedDate, "'Dia' dd 'de' MMMM", { locale: ptBR });
  }, [selectedDate]);

  const selectedWeekDay = useMemo(() => {
    return format(selectedDate, 'cccc', { locale: ptBR });
  }, [selectedDate]);

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
        <Availability>
          <h1>Selecione um horário</h1>
          <p>
            {isToday(selectedDate) && <span>Hoje</span>}
            {isTomorrow(selectedDate) && <span>Amanhã</span>}
            <span>{selectedDateAsText}</span>
            <span>{selectedWeekDay}</span>
          </p>

          <Section>
            <strong>Manhã</strong>
            {morningAvailability &&
            morningAvailability.some(({ available }) => available === true) ? (
              morningAvailability?.map(({ hour, available }) => (
                <button key={hour} type="submit" disabled={!available}>
                  <strong>
                    {hour}
                    :00
                  </strong>
                </button>
              ))
            ) : (
              <p>Nenhum horário disponível neste período.</p>
            )}
          </Section>

          <Section>
            <strong>Tarde</strong>
            {afternoonAvailability &&
            afternoonAvailability.some(
              ({ available }) => available === true,
            ) ? (
              afternoonAvailability?.map(({ hour, available }) => (
                <button key={hour} type="submit" disabled={!available}>
                  <strong>
                    {hour}
                    :00
                  </strong>
                </button>
              ))
            ) : (
              <p>Nenhum horário disponível neste período.</p>
            )}
          </Section>
        </Availability>

        <Calendar>
          <DayPicker
            weekdaysShort={['D', 'S', 'T', 'Q', 'Q', 'S', 'S']}
            fromMonth={new Date()}
            disabledDays={[{ daysOfWeek: [0, 6] }, ...disabledDays]}
            modifiers={{ available: { daysOfWeek: [1, 2, 3, 4, 5] } }}
            onDayClick={handleDateChange}
            onMonthChange={handleMonthChange}
            selectedDays={selectedDate}
            months={[
              'Janeiro',
              'Fevereiro',
              'Março',
              'Abril',
              'Maio',
              'Junho',
              'Julho',
              'Agosto',
              'Setembro',
              'Outubro',
              'Novembro',
              'Dezembro',
            ]}
          />
        </Calendar>
      </Content>
    </Container>
  );
};

export default Providers;