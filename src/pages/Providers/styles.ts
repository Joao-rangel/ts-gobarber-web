import styled from 'styled-components';

export const Container = styled.div``;

export const Header = styled.header`
  padding: 32px;
  background: #28262e;
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
  margin-top: 30px;

  > strong {
    color: #999591;
    font-size: 20px;
    line-height: 26px;
    display: block;
    padding-bottom: 16px;
    margin-bottom: 16px;
  }
  > p {
    color: #999591;
  }
`;

export const ProviderCard = styled.div`
  margin-top: 32px;
  background: #3e3b47;
  display: flex;
  align-items: center;
  padding: 16px 24px;
  border-radius: 10px;
  margin-top: 24px;

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
    color: #fff;
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
`;
