import styled, { css, keyframes } from 'styled-components';

interface LabelProps {
  loading: boolean | undefined
}

const animationLoader = keyframes`
    0%{
        transform: rotate(0);
    }
    100%{
        transform: rotate(360deg);
    }
`;

export const Label = styled.label<LabelProps>`
  color: ${(props) => props.theme.colors.text};
  font-size: 1.125rem;
  position: relative;

  ${({ loading }) => {
    if (loading) {
      return css`
        &::after {
          width: 15px;
          height: 15px;
          border-radius: 50%;
          content: '';
          display: block;
          position: absolute;
          right: -5px;
          top: 20px;
          border: 3px solid #8877ff;
          border-left-color: #6655dd;

          animation: ${animationLoader} 1s cubic-bezier(0, 0.25, 0.7125, 0.1) infinite;
        }
      `;
    }
    return null;
  }}
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.625rem 0.938rem;
  border: 2px solid #000;
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
`;

export const Error = styled.p`
  font-size: 0.875rem;
  margin-top: 0.25rem;
  font-weight: 500;
  color: #e54;

  position: absolute;
`;
