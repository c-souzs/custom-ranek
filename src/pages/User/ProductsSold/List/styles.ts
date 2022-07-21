import styled from 'styled-components';

export const List = styled.section`
  padding-top: 3.75rem;

  @media (max-width: 600px) {
    padding: 1.875rem 0;
  }
`;

export const ListProducts = styled.ul`
  display: flex;
  gap: 1.875rem;
  justify-content: space-between;
  flex-wrap: wrap;
`;
