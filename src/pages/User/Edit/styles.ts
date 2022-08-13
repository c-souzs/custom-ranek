import styled from 'styled-components';

export const Edit = styled.div`
  position: relative;
`;

export const Title = styled.h2`
  color: #8877ff;
  font-size: 2.5rem !important;

  margin-bottom: 1.875rem;

  &::after {
    content: '.';
    color: #fff;
  }
`;

export const Form = styled.form`
  width: 100%;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.875rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const ElementColumn = styled.div`
  grid-column: 1/2;
`;
