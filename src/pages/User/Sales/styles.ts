import styled from 'styled-components';

export const Sales = styled.div`
  position: relative;
`;

export const List = styled.ul`
  display: grid;
  gap: 1.875rem;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

interface CustomListProps {
  show: boolean
}

export const CustomList = styled(List)<CustomListProps>`
  display: ${(props) => (props.show ? 'grid' : 'none')};
`;
