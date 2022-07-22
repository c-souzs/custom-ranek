import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Introduction = styled.section`
  background-color: #000;
  box-shadow: inset 0 -120px ${(props) => props.theme.colors.primary};

  padding-top: 9.188rem;

  @media (max-width: 696px) {
    padding-top: 8.125rem;
  }
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
  padding-bottom: 200px;

  @media (max-width: 800px) {
    padding-bottom: 2.5rem;
  }
`;

export const Description = styled.p`
  color: #b2b2b2;
  margin-bottom: 1.25rem;
`;

export const LinkProduct = styled(Link)`
  display: inline-block;
  padding: 1rem 2rem;
  border-radius: 0.25rem;
  box-shadow: 0 1px 2px rgb(0 0 0 / 10%);
  border: none;
  background-color: #8877ff;

  text-transform: uppercase;
  color: #fff;
  font: 600 1.125rem/1.35 'Poppins', sans-serif;

  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: #6655dd;
  }

  @media (max-width: 800px) {
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
  }
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
