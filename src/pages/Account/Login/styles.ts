import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.section`
  background-color: ${(props) => props.theme.colors.primary};
`;

export const Form = styled.form`
  width: 100%;

  padding: 3.75rem 0;

  display: flex;
  gap: 1.875rem;
  flex-direction: column;

  @media (max-width: 800px) {
    padding: 1.875rem 0;
  }
`;

export const Information = styled.div`
  display: flex;
  gap: 0.375rem 0;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-end;
`;

export const LostPassword = styled.p`
  color: #b2b2b2;
`;

export const LinkLostPassword = styled(Link)`
  color: inherit;
  transition: 0.2s;
  margin-left: 0.25rem;

  &:hover {
    color: #8877ff;
  }
`;
