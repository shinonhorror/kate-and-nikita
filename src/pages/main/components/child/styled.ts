import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  position: relative;
  color: #f4eee4;

  img {
    max-width: 900px;
    width: 100%;
    display: block;
    z-index: 2;
  }
`;

export const Title = styled.h2`
  z-index: 2;
  margin-top: 120px;

  @media (max-width: 1024px) {
    margin-top: 64px;
  }

  @media (max-width: 768px) {
    margin-top: 24px;
  }
`;

export const Description = styled.p`
  z-index: 2;
`;

export const Subtitle = styled.h3`
  z-index: 2;
`;

export const ColorfulBlock = styled.div`
  position: absolute;
  width: 100vw;
  height: 90%;
  background-color: #8d201a;
  z-index: 1;
`;
