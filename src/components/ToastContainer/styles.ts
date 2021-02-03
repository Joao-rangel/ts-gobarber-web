import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  padding: 30px;
  overflow: hidden;

  @media (max-width: 500px) {
    padding: 5vw;
  }
`;
