import styled from 'styled-components';

export const Label = styled.label`
  color: ${(props) => props.theme.colors.text};
  font-size: 1.125rem;
  position: relative;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.625rem 0.938rem;
  border: 0.125rem solid #000;
  border-radius: 0.25rem;
  outline: none;
  background-color: #fff;
  color: #000;

  font-size: 1.125rem;
  margin-top: 0.375rem;

  display: block;

  transition: 0.2s;

  &:disabled {
    background-color: ${(props) => (props.theme.name === 'dark' ? '#545454' : '#CACACA')};
  }

  &:hover:not(&:disabled),
  &:focus:not(&:disabled) {
    border-color: #8877ff;
  }

  &[type='file'] {
    cursor: pointer;
  }

  &[type='file']:disabled {
    background-color: ${(props) => (props.theme.name === 'dark' ? '#1D1D1D' : '#F2F2F2')};
    color: ${(props) => (props.theme.name === 'dark' ? '#000' : '#b2b2b2')};
    cursor: auto;
  }
`;

export const Error = styled.p`
  position: absolute;
`;
