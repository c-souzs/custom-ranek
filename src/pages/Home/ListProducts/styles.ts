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
  gap: 0.938rem;

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

interface CustomListProps {
  show: boolean
}

export const CustomList = styled(List)<CustomListProps>`
  display: ${(props) => (props.show ? 'flex' : 'none')};
`;
