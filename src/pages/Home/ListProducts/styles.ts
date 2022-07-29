import styled from 'styled-components';

export const ListProducts = styled.section`
  background-color: ${(props) => props.theme.colors.primary};
  padding-top: 3.75rem;
  padding-bottom: 7.5rem;

  position: relative;
`;

export const List = styled.ul`
  max-width: 1400px;

  display: flex;
  gap: 2.5rem;

  padding: 0 1.25rem 1.25rem 1.25rem;
  margin-left: auto;
  margin-right: auto;
  overflow-x: auto;

  ::-webkit-scrollbar {
    width: 25px;
    height: 25px;
  }

  ::-webkit-scrollbar-track {
    background-color: ${(props) => (props.theme.name === 'dark' ? '#1d1d1d' : '#f2f2f2')};
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${(props) => (props.theme.name === 'dark' ? '#161616' : '#E0E0E0')};

    border-radius: 4px;
    border-top: 4px solid ${(props) => (props.theme.name === 'dark' ? '#1d1d1d' : '#f2f2f2')};
    border-bottom: 4px solid ${(props) => (props.theme.name === 'dark' ? '#1d1d1d' : '#f2f2f2')};
  }
`;

export const Product = styled.li`
  flex: 1;
  min-width: 280px;

  &:hover > a > h3::before {
    width: 32px;
  }
`;

export const ImageProduct = styled.img`
  width: 100%;
  height: 375px;

  margin-bottom: 1rem;
  border-radius: 0.25rem;

  @media (max-width: 800px) {
    height: 350px;
  }
`;

export const TitleProduct = styled.h3`
  color: ${(props) => props.theme.colors.text};
  margin-bottom: 0.5rem;

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
  padding-left: 1.875rem;
  color: #b2b2b2;

  font-weight: 400 !important;
`;

export const Error = styled.p`
  width: 100%;
  text-align: center;
`;
