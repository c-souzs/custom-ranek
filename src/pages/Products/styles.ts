import styled from 'styled-components';

export const Products = styled.section`
  background-color: ${(props) => props.theme.colors.primary};
  padding-bottom: 3.75rem;
  padding-top: 7.313rem;
  position: relative;

  @media (max-width: 800px) {
    padding-bottom: 1.875rem;
  }

  @media (max-width: 696px) {
    padding-top: 6.25rem;
  }
`;

export const Search = styled.div`
  padding-top: 3.75rem;

  @media (max-width: 800px) {
    padding-top: 1.875rem;
  }
`;

export const FormSearch = styled.form`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr auto auto;
`;

export const ButtonsSearch = styled.div`
  display: flex;
  gap: 0.938rem;
  align-items: center;

  margin-left: -78px;
  z-index: 111;
`;

export const ButtonSearch = styled.button`
  background-color: transparent;
  border: 0;
  cursor: pointer;
`;

export const List = styled.ul`
  display: grid;
  gap: 2.5rem;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 2.5rem 1.875rem;
  padding-bottom: 0;

  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const Error = styled.p`
  text-align: center;
  margin-top: 1rem;
`;
