import React from 'react';
import styled from 'styled-components';
import List from './List';
import Register from './Register';

const ProductsDataUser = styled.main`
  background-color: ${(props) => props.theme.colors.primary};
  padding: 1.875rem 0;
`;

const ProductsSold = (): JSX.Element => (
  <ProductsDataUser>
    <Register />
    <List />
  </ProductsDataUser>
);

export default ProductsSold;
