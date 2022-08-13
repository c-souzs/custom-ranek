import React from 'react';
import useInformationPage from '../../../hooks/useInformationPage';
import List from './List';
import Register from './Register';

const ProductsSold = (): JSX.Element => {
  const dataInformationPage = {
    title: 'Anuncie aqui',
    description: 'Anuncie seus produtos aqui e veja a lista de produtos já anunciados.',
  };
  useInformationPage(dataInformationPage);
  return (
    <>
      <Register />
      <List />
    </>
  );
};

export default ProductsSold;
