import styled from 'styled-components';

export const Purchase = styled.section`
  grid-column: 1/-1;
`;

export const TitlePurchase = styled.h2`
  color: #8877ff;
  font-size: 2.5rem !important;

  margin-bottom: 1rem;

  &::after {
    content: '.';
    color: ${(props) => props.theme.colors.text};
  }
`;

export const FormPurchase = styled.form`
  display: grid;
  gap: 2.5rem;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 650px) {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }
`;

export const Buttons = styled.div`
  grid-column: 1/2;
  display: flex;
  gap: 1.25rem;
  flex-wrap: wrap;
`;

export const Button = styled.button`
  text-transform: uppercase;
  color: #fff;
  padding: 0.75rem 1.5rem;
  background-color: #8877ff;
  border: 2px solid #000;
  border-radius: 0.25rem;
  transition: 0.2s;
  cursor: pointer;
  font: 500 1.125rem/1.35 'Roboto', sans-serif;

  &:hover {
    background-color: #6655dd;
  }
`;
