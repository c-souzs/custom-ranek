import styled, { css } from 'styled-components';

export const Product = styled.main`
  background-color: ${(props) => props.theme.colors.primary};
  padding: 3.75rem 0;

  @media (max-width: 800px) {
    padding: 1.875rem 0;
  }
`;

export const Container = styled.div`
  display: grid;
  gap: 2.5rem;
  grid-template-columns: 1fr 1fr;

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
  font-size: 2.5rem;
`;

export const PriceProduct = styled.p`
  color: #b2b2b2;
  margin-bottom: 0.75rem;
`;

export const DescriptionProduct = styled.p`
  margin-bottom: 1rem;
`;

export const Button = styled.button`
  text-transform: uppercase;
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
