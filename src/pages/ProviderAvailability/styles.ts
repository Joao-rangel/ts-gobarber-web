import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

interface BookAppointmentButtonProps {
  selected: boolean;
}

export const Container = styled.div`
  @media (max-width: 500px) {
    font-size: 14.5px;
  }
`;

export const Header = styled.header`
  padding: 32px;
  background: #28262e;

  @media (max-width: 500px) {
    padding: 20px;
  }
`;

export const HeaderContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  align-items: center;

  > img {
    height: 80px;
  }
  button {
    margin-left: auto;
    background: transparent;
    border: 0;

    svg {
      color: #999591;
      width: 20px;
      height: 20px;
    }
  }

  @media (max-width: 500px) {
    > img {
      height: 60px;
      margin-right: 6px;
    }
    button {
      display: none;
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 80px;

  img {
    width: 56px;
    height: 56px;
    border-radius: 50%;

    &:hover {
      opacity: 0.9;
    }
  }
  div {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    line-height: 24px;

    span {
      color: #f4ede8;
    }
    a {
      text-decoration: none;
      color: #ff9000;

      &:hover {
        opacity: 0.8;
      }
    }
  }

  @media (max-width: 500px) {
    margin: 0 auto;
  }
`;

const appearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(80px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Content = styled.main`
  max-width: 1120px;
  margin: 64px auto;
  padding: 0 26px;
  display: flex;

  animation: ${appearFromRight} 0.7s;

  @media (max-width: 750px) {
    aside {
      display: none;
    }
  }
`;

export const Availability = styled.section`
  flex: 1;
  margin-right: 120px;

  position: relative;

  @media (max-width: 1200px) {
    margin-right: 6vw;
  }
  @media (max-width: 500px) {
    margin-right: 0;
  }

  > span {
    position: absolute;
    top: -50px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
      color: #999591;
      text-decoration: none;
      gap: 2px;
      font-size: 16px;
      display: flex;
      align-items: center;
    }

    Button {
      width: 112px;
      height: 40px;
      font-size: 14px;
      margin: 0;
    }
    @media (min-width: 750px) {
      button {
        display: none;
      }
    }
  }

  h1 {
    font-size: 36px;

    @media (max-width: 500px) {
      font-size: 28px;
    }
  }
  p {
    margin-top: 8px;
    color: #ff9000;
    display: flex;
    align-items: center;
    font-weight: 500;

    span {
      display: flex;
      align-items: center;
    }
    span + span::before {
      content: '';
      width: 1px;
      height: 12px;
      background: #ff9000;
      margin: 0 8px;
    }
  }
`;

export const Section = styled.section`
  margin-top: 30px;

  > strong {
    color: #999591;
    font-size: 20px;
    line-height: 26px;
    display: block;
    padding-bottom: 16px;
    margin-bottom: 10px;
    border-bottom: 1px solid #3e3b47;
  }
  > p {
    color: #999591;
  }
`;

export const BookAppointmentButton = styled.button<BookAppointmentButtonProps>`
  background: #3e3b47;
  margin: 8px 12px 0 0;
  padding: 9px 18px;
  border-radius: 10px;
  border: none;

  :hover {
    background: ${shade(0.1, '#3e3b47')};
  }
  strong {
    font-size: 18px;
    color: #fff;
  }
  :disabled {
    background: ${props => (props.selected ? '#ff9000' : 'transparent')};
    cursor: unset;
    strong {
      color: ${props => (props.selected ? '#232129' : '#666360')};
    }
  }
`;
