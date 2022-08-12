import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
`;

export const ImageAlert = styled.img`
  max-height: 500px;
  min-height: 350px;
  margin: 0 auto;
`;
