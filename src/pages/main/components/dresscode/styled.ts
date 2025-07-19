import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  img {
    max-width: 600px;
  }
`;

export const Title = styled.h2``;

export const DetailText = styled.div`
  font-weight: 400;
  font-size: 48px;
  line-height: 167%;
  text-align: center;
  color: #000;

  span {
    font-size: 80px;
    color: #8d201a;
  }

  @media (max-width: 1024px) {
    font-size: 32px;

    span {
      font-size: 48px;
    }
  }

  @media (max-width: 768px) {
    font-size: 24px;

    span {
      font-size: 32px;
    }
  }
`;
