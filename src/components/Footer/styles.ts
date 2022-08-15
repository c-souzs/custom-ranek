import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

interface ILi {
  border?: boolean
}

export const Footer = styled.footer`
  background-color: #000;
`;

export const Container = styled.div`
  display: grid;
  gap: 2.5rem;
  grid-template-columns: 3fr 5fr 4fr;

  padding-top: 3.75rem;
  padding-bottom: 3.75rem;

  @media (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const LinkLogo = styled(Link)`
  height: fit-content;

  @media (max-width: 800px) {
    display: none;
  }
`;

export const Title = styled.h3`
  margin-bottom: 2rem;

  color: #fff;
  font-weight: 400 !important;
`;

export const Li = styled.li<ILi>`
  margin-bottom: 1rem;

  color: #b2b2b2;
  font-family: inherit;
  font-weight: 400;

  ${({ border }) => {
    if (border) {
      return css`
        &::after {
          content: '';
          max-width: 360px;
          height: 2px;

          display: block;
          background-color: #111111;
          margin-top: 1rem;
        }
      `;
    }
    return null;
  }}
`;

export const LiFlex = styled.li`
  margin-top: 2rem;

  display: flex;
  gap: 2rem;
`;

export const LinkCustom = styled(Link)`
  color: inherit;
  font-family: inherit;

  transition: 0.2s;

  &:hover {
    color: #fff;
  }
`;

export const RightsReserved = styled.div`
  margin-top: 2.5rem;

  color: #9c9c9c;
  font-weight: 400 !important;

  grid-column: 1/-1;
  display: flex;
  flex-wrap: wrap;
  gap: 1.25rem 0;
  justify-content: space-between;
  align-items: center;
`;

export const LinkAuthor = styled.a`
  transition: 0.2s;
  color: inherit;
  margin-left: 0.25rem;

  &:hover {
    color: #6655dd;
  }
`;
