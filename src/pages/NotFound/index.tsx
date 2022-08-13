import React from 'react';

import pageNotFoundImage from '../../assets/PageNotFound.svg';

import * as C from './styles';

const NotFound = (): JSX.Element => (
  <C.PageNotFound className="paddingDistanceHeader">
    <C.Container className="container">
      <C.ImageAlert src={pageNotFoundImage} alt="Alert not found page." />
    </C.Container>
  </C.PageNotFound>
);

export default NotFound;
