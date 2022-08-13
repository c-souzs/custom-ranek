import styled from 'styled-components';

interface ProductProps {
  show: boolean
}

export const Product = styled.main<ProductProps>`
  background-color: ${(props) => props.theme.colors.primary};
  position: relative;
  display: ${(props) => (props.show ? 'block' : 'none')};
`;

export const Container = styled.div`
  padding-top: 1.875rem;
  padding-bottom: 1.875rem;
`;

export const Information = styled.section`
  display: grid;
  gap: 1.875rem;
  grid-template-columns: 2fr 1fr;
  padding: 0.75rem 0;
  color: ${(props) => props.theme.colors.text};

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

export const DataProduct = styled.div`
  @media (max-width: 800px) {
    grid-column: 1/-1;
    grid-row: 1/2;
  }
`;

export const NameProduct = styled.h2`
  font: 600 3rem/1 'Poppins', sans-serif;

  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

export const PriceProduct = styled.p`
  font: 500 1.5rem/1 'Roboto', sans-serif;
  color: #b2b2b2;
  margin-bottom: 1.25rem;
`;

export const DescriptionProduct = styled.p`
  margin-bottom: 1rem;
  line-height: 1.3;
  font-size: 1.25rem;
  color: ${(props) => (props.theme.name === 'dark' ? '#b2b2b2' : '#404040')};

  &::before {
    width: 32px;
    height: 8px;

    content: '';
    display: inline-block;
    margin-right: 0.5rem;
    margin-bottom: 0.125rem;
    background-color: #6655dd;
    border-radius: 0.125rem;
  }
`;

export const ContainerSkeleton = styled.main`
  background-color: ${(props) => props.theme.colors.primary};
`;
