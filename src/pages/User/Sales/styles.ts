import styled from 'styled-components';

export const Sales = styled.section`
  padding: 1.875rem 0;
  background-color: ${(props) => props.theme.colors.primary};
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.875rem;
`;
