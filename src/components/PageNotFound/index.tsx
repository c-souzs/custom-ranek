import React from 'react';

import pageNotFoundImage from '../../assets/PageNotFound.svg';

import * as C from './styles';

const PageNotFound = (): JSX.Element => (
  <C.Container className="container">
    <C.ImageAlert src={pageNotFoundImage} alt="Alert not found page." />
  </C.Container>
);

export default PageNotFound;
