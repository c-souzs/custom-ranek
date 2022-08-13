import styled from 'styled-components';

export const Introduction = styled.section`
  background-color: #000;
  box-shadow: inset 0 -120px ${(props) => props.theme.colors.primary};

  padding-top: 1.875rem;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0rem 2.5rem;

  @media (max-width: 800px) {
    display: block;
  }
`;

export const TextContent = styled.div`
  align-self: end;
  padding-bottom: 12.5rem;

  @media (max-width: 800px) {
    padding-bottom: 2.5rem;
  }
`;

export const Description = styled.p`
  color: #b2b2b2;
  margin-bottom: 1.25rem;
`;

export const ImageEmphasis = styled.img`
  width: 100%;
  height: 100%;
  max-height: 700px;

  border-radius: 0.25rem;

  @media (max-width: 1200px) {
    max-height: 550px;
  }

  @media (max-width: 800px) {
    max-height: 300px;
  }
`;
