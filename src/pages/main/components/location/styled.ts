import styled from 'styled-components';

export const Wrapper = styled.section`
  .swiper {
    width: 100%;
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
  }
`;

export const Title = styled.h2``;

export const Description = styled.p``;

export const Subtitle = styled.h3``;

export const Button = styled.button`
  padding: 32px 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #8d201a;
  color: #f9f6ed;
  font-size: 54px;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  outline: none;
  border: none;

  @media (max-width: 1024px) {
    font-size: 32px;
    padding: 16px 40px;
  }

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;
