import styled from 'styled-components';

interface PurchaseProps {
  show: boolean
}

export const Purchase = styled.section<PurchaseProps>`
  grid-column: 1/-1;
  display: ${(props) => (props.show ? 'block' : 'none')};
  margin-top: 1.875rem;
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

export const DescriptionPurchase = styled.div`
  display: grid;
  gap: 3.75rem;
  grid-template-columns: 1fr auto;
  color: ${(props) => (props.theme.name === 'dark' ? '#b2b2b2' : '#404040')};

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 0.938rem;
  }

  margin-bottom: 1.875rem;
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
  border: 0.125rem solid #000;
  border-radius: 0.25rem;
  transition: 0.2s;
  cursor: pointer;
  font: 500 1.125rem/1.35 'Roboto', sans-serif;

  &:hover {
    background-color: #6655dd;
  }
`;
