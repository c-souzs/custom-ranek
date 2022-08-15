import styled from 'styled-components';

interface IOrientation {
  amountPhotos: number
}

export const Register = styled.div`
  position: relative;
`;

export const FormAddProduct = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.875rem;
  margin-bottom: 1.875rem;
  position: relative;
`;

export const ContainerActionsFiles = styled.div`
  display: flex;
  align-items: end;
  gap: 1rem;
  margin-top: 0.5rem;
`;

export const ButtonClearPhotos = styled.button`
  background-color: transparent;
  color: ${(props) => (props.theme.name === 'dark' ? '#404040' : '#b2b2b2')};
  padding: 0.25rem 0.5rem;
  border-radius: 0.5rem;
  border: 1px solid #8877ff;
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    border-color: #6655dd;
    color: ${(props) => props.theme.colors.text};
  }
`;

export const Orientation = styled.p<IOrientation>`
  color: ${(props) => (props.amountPhotos >= 3 ? '#16C70B' : '#e54')};
`;
