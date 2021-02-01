import styled from 'styled-components';

export const Container = styled.div``;

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

  img {
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

export const Content = styled.main`
  margin: 38px auto;
  padding: 0 26px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 900px;

  h1 {
    font-size: 36px;
    padding-bottom: 8px;
    border-bottom: 1px solid #3e3b47;
  }
`;

export const ProvidersList = styled.section`
  margin-top: 24px;

  a {
    margin-bottom: 12px;

    &:hover {
      transform: translateX(10px);

      &::before {
        position: absolute;
        height: 80%;
        top: 10%;
        width: 2px;
        left: 0;
        content: '';
        background: #ff9000;
      }
    }
    background: #3e3b47;
    display: flex;
    align-items: center;
    padding: 16px 24px;
    border-radius: 10px;
    text-decoration: none;
    color: #f4ede8;

    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
    }
    > strong {
      font-size: 24px;
      margin-left: 24px;
      margin-right: auto;
      padding-right: 16px;
    }
    div {
      position: relative;

      &::before {
        position: absolute;
        height: 80%;
        top: 10%;
        width: 2px;
        left: 0;
        content: '';
        background: #ff9000;
      }
      span {
        display: flex;
        margin: 10px 0 10px 20px;

        svg {
          color: #ff9000;
          align-self: center;
          width: 18px;
          height: 18px;
        }
        strong {
          margin-left: 8px;
        }
      }
    }
  }

  @media (max-width: 500px) {
    a {
      padding: 10px;

      display: grid;
      grid-template-columns: 2fr 3fr;
      grid-template-rows: 1fr auto;

      img {
        width: 65px;
        height: 65px;
        grid-row-start: 2;
        grid-row-end: 3;
        justify-self: center;
      }

      > strong {
        grid-column-start: 1;
        grid-column-end: 3;
        margin-bottom: 6px;
      }

      div::before {
        content: none;
      }
      div span {
        margin: 5px auto;
      }
    }
  }
`;
