import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  text-align: center;
  button {
    display: inline-block;
    min-width: 180px;
    padding: 8px 16px;
    background-color: var(--brand);
    border-color: var(--brand);
    border-radius: 8px;
    color: #fff;
    text-align: center;
    text-decoration: none;
    font-family: inherit;
    font-size: 18px;
    line-height: 24px;
    font-weight: 500;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
      0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
    cursor: pointer;
    &:hover {
      background-color: var(--accent);
    }
  }
`;
