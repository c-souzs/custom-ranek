import styled, { css } from 'styled-components';

export const Product = styled.main`
  background-color: ${(props) => props.theme.colors.primary};
  padding: 3.75rem 0;
  padding-bottom: 3.75rem;
  padding-top: 11.063rem;

  @media (max-width: 800px) {
    padding-bottom: 1.875rem;
  }

  @media (max-width: 696px) {
    padding-top: 8.125rem;
  }
`;

export const Container = styled.div`
  display: grid;
  gap: 2.5rem;
  grid-template-columns: 1fr 1fr;
  position: relative;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

export const ContainerImages = styled.section`
  display: flex;
  overflow-x: hidden;
`;

export const ImageSlide = styled.img`
  width: 100%;
  max-height: 350px;
  height: 100%;

  flex-shrink: 0;

  border-radius: 0.25rem;
  margin-bottom: 0.75rem;

  border: 2px solid #000;

  @media (max-width: 800px) {
    max-height: 300px;
  }
`;

export const NavImages = styled.nav`
  display: flex;
  gap: 1.25rem;
  align-items: center;
  justify-content: center;
`;

interface CircleNavProps {
  active?: boolean
}

export const CircleNav = styled.span<CircleNavProps>`
  width: 15px;
  height: 15px;

  border: 2px solid #000;
  border-radius: 50%;

  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: #8877ff;
  }

  ${({ active }) => {
    if (active) {
      return css`
        background-color: #8877ff;
      `;
    }

    return null;
  }}
`;

export const Information = styled.section`
  color: ${(props) => props.theme.colors.text};

  @media (max-width: 800px) {
    grid-row: 1/2;
  }
`;

export const NameProduct = styled.h2`
  font: 600 3rem/1 'Poppins', sans-serif;

  display: flex;
  align-items: center;

  &::before {
    width: 24px;
    height: 8px;

    content: '';
    display: inline-block;
    margin-right: 0.5rem;
    background-color: #8877ff;
    border-radius: 0.125rem;

    transition: 0.2s;
  }
`;

export const PriceProduct = styled.p`
  font: 500 1.5rem/1 'Roboto', sans-serif;
  color: #b2b2b2;
  margin-bottom: 0.75rem;
  margin-top: 0.5rem;
`;

export const DescriptionProduct = styled.p`
  margin-bottom: 1rem;
  font-size: 1.125rem;
  line-height: 1.3;
  color: ${(props) => (props.theme.name === 'dark' ? '#b2b2b2' : '#404040')};
`;

export const Button = styled.button`
  text-transform: uppercase;
  color: #fff;
  padding: 0.75rem 1.5rem;
  background-color: #8877ff;
  border: 2px solid #000;
  border-radius: 0.25rem;
  transition: 0.2s;
  cursor: pointer;
  font: 500 1.125rem/1.35 'Roboto', sans-serif;

  &:hover {
    background-color: #6655dd;
  }
`;

export const Error = styled.p`
  text-align: center;
`;
