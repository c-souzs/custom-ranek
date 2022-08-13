import styled from 'styled-components';

export const Subtitle = styled.h3`
  color: #6655dc;
  font-size: 2.5rem !important;

  padding-bottom: 1.875rem;

  @media (max-width: 600px) {
    font-size: 1.625rem !important;
    padding-bottom: 0.938rem;
  }
`;

export const Decoration = styled.span`
  font-family: inherit;
  color: ${(props) => props.theme.colors.text};
`;
