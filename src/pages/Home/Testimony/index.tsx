import React from 'react';

import imageTestimony from '../../../assets/testimony.jpg';

import * as C from './styles';

const Testimony = (): JSX.Element => (
  <C.Testimony>
    <C.ImageTestimony src={imageTestimony} alt="Image client smartphone textimony" />
    <C.TextContent>
      <C.TextTestimony className="font-1-xl">
        {/* eslint-disable max-len */}
        Desde que conheci a ranek o medo de golpes em compras online sumiu! Meu smartphone veio rápido
        {' '}
        <br />
        {' '}
        e seguro.
      </C.TextTestimony>
      <C.AuthorTestimony className="font-1-m-b">Gabrielly Silva</C.AuthorTestimony>
    </C.TextContent>
  </C.Testimony>
);

export default Testimony;
