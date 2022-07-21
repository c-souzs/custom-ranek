import styled from 'styled-components';
import { Input } from '../Input/styles';

export const Label = styled.label`
  color: ${(props) => props.theme.colors.text};
  font-size: 1.125rem;
`;

export const Select = styled(Input)`
  cursor: pointer;

  &:disabled {
    cursor: auto;
    background-color: ${(props) => (props.theme.name === 'dark' ? '#545454 !important' : '#b3b3b3 !important')};
    color: #000;
  }

  &:hover:not(&:disabled),
  &:focus:not(&:disabled) {
    border-color: #8877ff;
  }
`;
