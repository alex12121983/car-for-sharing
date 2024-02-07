import { styled } from 'styled-components';

export const ModalWrapper = styled.div`
  height: 100%;
  width: 100%;
  background-color: #61616199;
  backdrop-filter: blur(10px);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${props => (props.$primary ? 1 : 0)};
  pointer-events: ${props => (props.$primary ? 'all' : 'none')};
  transition: 0.5s;
  z-index: 999;
`;
export const ModalContent = styled.div`
  border-radius: 20px;
  background-color: var(--white);
  transform: ${props => (props.$primary ? 'scale(1)' : 'scale(0.5)')};
  transition: 0.4s all;
  max-width: 280px;
  @media screen and (min-width: 768px) {
    border-radius: 40px;
    max-width: 681px;
  }
`;
export const ModalCloseBtn = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 24px;
  height: 24px;
  padding: 0;
  background-color: transparent;
  color: var(--blueLink);
  border: none;
  cursor: pointer;
  & svg {
    width: 24px;
    height: 24px;
  }
  &:hover {
    color: var(--yellow);
  }
  @media screen and (min-width: 768px) {
    top: 24px;
    right: 24px;
  }
`;

export const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 13px;
  padding: 44px 12px 0 12px;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    gap: 24px;
    padding: 32px 32px 0 32px;
  }
`;

export const Image = styled.img`
  width: 240px;
  height: 240px;
  object-fit: cover;
  border-radius: 0 0 40px 40px;

  @media screen and (min-width: 768px) {
    width: 262px;
    height: 298px;
  }
`;

export const TextCategory = styled.p`
  position: absolute;
  top: 60px;
  left: 20px;
  border-radius: 0 16px 16px 0;
  padding: 11px 22px 11px 12px;
  background-color: var(--blueLight);
  font-size: 14px;
  font-weight: 500;
  line-height: 19.12px;
  @media screen and (min-width: 768px) {
    top: 48px;
    left: 32px;
  }
`;

export const AdvertisementContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    gap: 20px;
    padding-right: 10px;
  }
`;

export const Title = styled.h3`
  font-size: 24px;
  font-weight: 700;
  line-height: 32.78px;
  overflow: hidden;
  text-overflow: ellipsis;
  @media screen and (min-width: 768px) {
    height: 76px;
    font-size: 28px;
    line-height: 38.25px;
  }
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;
  @media screen and (min-width: 768px) {
    width: 100%;
    gap: 50px;
  }
`;

export const LeftList = styled.ul`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 30%;
  gap: 8px;
`;

export const LeftListItem = styled.li`
  display: block;
  overflow: hidden;
  font-size: 14px;
  font-weight: 600;
  line-height: 19.12px;
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 21.86px;
  }
`;

export const RightList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  overflow: hidden;
`;

export const RightListItem = styled.li`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 12px;
  font-weight: 500;
  line-height: 19.12px;
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 21.86px;
  }
`;

export const LinkContact = styled.a`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: var(--yellow);
  &:hover,
  :focus {
    text-decoration: underline;
  }
`;

export const MiddleContentText = styled.p`
  padding: 13px 12px 0 12px;
  font-size: 14px;
  font-weight: 500;
  line-height: 19.12px;
  letter-spacing: 0.56px;
  overflow-wrap: break-word;
  @media screen and (min-width: 768px) {
    padding: 28px 32px 0 32px;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0.64px;
  }
`;

export const HightLitedText = styled.span`
  font-size: 14px;
  font-weight: 600;
  line-height: 19.12px;
  letter-spacing: 0.56px;
  @media screen and (min-width: 768px) {
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0.64px;
  }
`;

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  padding: 12px 12px 16px 12px;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: flex-start;
    gap: 17px;
    padding: 70px 32px 24px 32px;
  }
`;
