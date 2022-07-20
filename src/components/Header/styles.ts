import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  background-color: #000000;
`;

export const Container = styled.div`
  display: flex;
  gap: 1.125rem;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  padding-top: 1.125rem;
  padding-bottom: 1.125rem;
`;

export const ContentActions = styled.div`
  display: flex;
  gap: 1.25rem;
  align-items: center;
`;

export const ListMenu = styled.ul`
  display: flex;
  gap: 2.5rem;
  align-items: center;
  flex-wrap: wrap;

  li {
    font-family: inherit;
  }
`;

export const LinkCustom = styled(Link)`
  display: inline-block;

  padding: 1rem 0px;
  position: relative;

  color: #fff;
  font-family: inherit;

  &:hover {
    &::after {
      width: 100%;
    }
  }

  &::after {
    width: 0px;
    height: 2px;
    content: '';
    display: block;
    background-color: #8877ff;
    margin-top: 0.25rem;
    position: absolute;

    transition: 0.2s;
  }
`;

export const LinkAccount = styled(Link)`
  color: ${(props) => props.theme.colors.text};
  font-family: inherit;

  padding: 0.5rem 1rem;
  background-color: #8877ff;
  border-radius: 0.25rem;

  transition: 0.2s;

  &:hover {
    background-color: #6655dd;
  }
`;

export const ThemeContainer = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
`;
