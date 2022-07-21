import React, { ReactNode } from 'react';
import styled from 'styled-components';

const ButtonSubmitStyled = styled.button`
  width: fit-content;
  display: inline-block;

  padding: 0.75rem 1.5rem;
  border-radius: 0.25rem;
  box-shadow: 0 1px 2px rgb(0 0 0 / 10%);
  border: none;
  background-color: #8877ff;

  text-transform: uppercase;
  color: #000;
  font: 600 1.125rem/1.35 'Poppins', sans-serif;

  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: #6655dd;
  }
`;

interface ButtonSubmitProps {
  children: ReactNode
}

const ButtonSubmit = ({ children }: ButtonSubmitProps): JSX.Element => (
  <ButtonSubmitStyled type="submit">{children}</ButtonSubmitStyled>
);

export default ButtonSubmit;
