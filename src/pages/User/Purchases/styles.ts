import styled from 'styled-components';

export const Purchases = styled.section`
  padding: 1.875rem 0;
  background-color: ${(props) => props.theme.colors.primary};
`;

export const List = styled.ul`
  display: flex;
  gap: 1.875rem;
  justify-content: space-between;
  flex-wrap: wrap;
`;