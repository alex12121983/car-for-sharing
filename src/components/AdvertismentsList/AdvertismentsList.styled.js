import styled from 'styled-components';

export const ListAdvertisments = styled.ul`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 24px;
  padding: 24px 0 40px 0;

  @media (min-width: 768px) {
    column-gap: 32px;
    row-gap: 24px;
  }
`;

export const NotFoundCarMessage = styled.p`
  color: var(--black);
  font-weight: 700;
  font-size: 24px;
  margin: 40px auto;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 48px;
  }
`;
