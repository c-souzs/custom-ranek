import styled from 'styled-components';

export const List = styled.ul`
  display: grid;
  gap: 30px;
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

export const Error = styled.p`
  text-align: center;
`;
