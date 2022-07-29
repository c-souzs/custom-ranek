import styled from 'styled-components';
import { Input, Label } from '../../../../components/Form/Input/styles';

export const FormAddProduct = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.875rem;

  position: relative;
`;

export const LabelFiles = styled(Label)``;

export const InputFiles = styled(Input)`
  cursor: pointer;
`;

export const OrientationPhotos = styled.p`
  font-size: 0.875rem;
  margin-top: 0.25rem;
  font-weight: 500;
  color: #16c70b;
`;
