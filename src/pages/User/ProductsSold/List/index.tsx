import React from 'react';
import ProductData from '../../../../components/ProductData';

import * as C from './styles';

const List = (): JSX.Element => (
  <C.List>
    <div className="container">
      <h2 className="font-1-xl subtitleSectionUser">Produtos anunciados</h2>
      <C.ListProducts>
        <ProductData
          type="product"
          image="https://ranekapi.origamid.dev/wp-content/uploads/2019/03/notebook-2.jpg"
          name="Compiuter"
          price="122,00"
          description="Usado por 2 anos"
        />
        <ProductData
          type="product"
          image="https://ranekapi.origamid.dev/wp-content/uploads/2019/03/notebook-2.jpg"
          name="Compiuter"
          price="122,00"
          description="Usado por 2 anos"
        />
        <ProductData
          type="product"
          image="https://ranekapi.origamid.dev/wp-content/uploads/2019/03/notebook-2.jpg"
          name="Compiuter"
          price="122,00"
          description="Usado por 2 anos"
        />
        <ProductData
          type="product"
          image="https://ranekapi.origamid.dev/wp-content/uploads/2019/03/notebook-2.jpg"
          name="Compiuter"
          price="122,00"
          description="Usado por 2 anos"
        />
      </C.ListProducts>
    </div>
  </C.List>
);

export default List;
