import styled from 'styled-components';

export const Testimony = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;

  background-color: #000;
  overflow: hidden;

  @media (max-width: 800px) {
    display: block;

    br {
      display: none;
    }
  }
`;

export const ImageTestimony = styled.img`
  width: 100%;
  max-height: 520px;
  height: 100%;

  @media (max-width: 800px) {
    max-height: 300px;
  }
`;

export const TextContent = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 2.5rem;
`;

export const TextTestimony = styled.p`
  max-width: 625px;

  font-family: 'Merriweather', serif !important;
  font-style: italic !important;
  font-weight: 900;
  color: #8877ff;

  margin-bottom: 2rem;
  position: relative;

  &::before {
    content: '“';
    left: -70px;
    top: -20px;
  }

  &::after {
    content: '”';
  }

  &::before,
  &::after {
    font-size: 5rem;
    font-family: inherit;
    color: #090909;

    position: absolute;
  }

  @media (max-width: 800px) {
    align-self: center;
    text-align: center;

    &::before {
      left: -50px;
    }
  }
`;

export const AuthorTestimony = styled.span`
  width: 100%;
  display: block;

  color: #8877ff;
  text-transform: uppercase;

  @media (max-width: 800px) {
    text-align: center;
  }
`;
