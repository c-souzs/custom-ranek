import { NavLink as BaseNavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderUser = styled.header`
  background-color: #000;
  padding-top: 11.063rem;
  padding-bottom: 3.75rem;

  @media (max-width: 696px) {
    padding-top: 8.125rem;
    padding-bottom: 1.875rem;
  }
`;

export const Container = styled.div`
  display: flex;
  gap: 1.875rem;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;

export const Subtitle = styled.h3`
  margin-bottom: 0.25rem;
  color: #b2b2b2;

  font-weight: 400 !important;
`;

export const Nav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  align-self: flex-end;
  gap: 0.938rem 1.875rem;

  @media (max-width: 600px) {
    width: 100%;
    justify-content: space-between;
  }
`;

export const LinkCustom = styled(BaseNavLink)`
  height: 50px;
  width: 50px;

  background-color: #111;
  border-radius: 0.25rem;
  border: 0.125rem solid #111;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: 0.2s;
  cursor: pointer;

  &:hover,
  &.active {
    border-color: #8877ff;
  }

  @media (max-width: 800px) {
    height: 40px;
    width: 40px;
  }
`;

export const LinkLogout = styled(LinkCustom)``;
