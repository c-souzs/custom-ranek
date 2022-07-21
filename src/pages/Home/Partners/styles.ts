import styled from 'styled-components';

export const Partners = styled.section`
  padding-top: 3.75rem;
  padding-bottom: 7.5rem;
  background-color: ${(props) => props.theme.colors.primary};

  @media (max-width: 800px) {
    padding-bottom: 3.75rem;
  }
`;

export const ListPartners = styled.ul`
  max-width: 1400px;

  padding: 0 1.25rem;
  margin: 0 auto;

  display: grid;
  grid-template-columns: repeat(4, 1fr);

  & li:first-child,
  & li:nth-child(5) {
    border-left: none;
  }

  & li:nth-child(1),
  & li:nth-child(2),
  & li:nth-child(3),
  & li:nth-child(4) {
    border-bottom: 0.125rem solid ${(props) => (props.theme.name === 'dark' ? '#000' : '#eee')};
  }

  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);

    & li {
      border-bottom: 0.125rem solid ${(props) => (props.theme.name === 'dark' ? '#000' : '#eee')};
    }

    & li:nth-child(7),
    & li:nth-child(8) {
      border-bottom: 0;
    }

    & li:nth-child(3),
    & li:nth-child(7) {
      border-left: 0;
    }
  }
`;

export const Partner = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 2rem;
  border-left: 0.125rem solid ${(props) => (props.theme.name === 'dark' ? '#000' : '#eee')};
`;

export const ImagePartner = styled.img`
  margin: auto;
`;
