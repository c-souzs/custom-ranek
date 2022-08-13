import React from 'react';

import pageNotFoundImage from '../../assets/PageNotFound.svg';
import useInformationPage from '../../hooks/useInformationPage';

import * as C from './styles';

const NotFound = (): JSX.Element => {
  // Altera o titúlo e a descrição da página.
  const dataInformationPage = {
    title: 'Página não encontrada',
    description: 'Verifique a url e tente novamente.',
  };
  useInformationPage(dataInformationPage);

  return (
    <C.PageNotFound className="paddingDistanceHeader">
      <C.Container className="container">
        <C.ImageAlert src={pageNotFoundImage} alt="Alert not found page." />
      </C.Container>
    </C.PageNotFound>
  );
};

export default NotFound;
