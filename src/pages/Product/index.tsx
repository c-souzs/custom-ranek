import React from 'react';
import FormPruchase from './FormPurchase';

import * as C from './styles';

const Product = (): JSX.Element => (
  <C.Product>
    <C.Container className="container">
      <section>
        <C.ContainerImages>
          <C.ImageSlide src="https://ranekapi.origamid.dev/wp-content/uploads/2019/03/smartwatch-2.jpg" />
          <C.ImageSlide src="https://ranekapi.origamid.dev/wp-content/uploads/2019/03/smartwatch-2.jpg" />
          <C.ImageSlide src="https://ranekapi.origamid.dev/wp-content/uploads/2019/03/smartwatch-2.jpg" />
          <C.ImageSlide src="https://ranekapi.origamid.dev/wp-content/uploads/2019/03/smartwatch-2.jpg" />
        </C.ContainerImages>
        <C.NavImages>
          <C.CircleNav active />
          <C.CircleNav />
          <C.CircleNav />
          <C.CircleNav />
        </C.NavImages>
      </section>
      <C.Information>
        <C.NameProduct className="font-1-xl">Notebook</C.NameProduct>
        <C.PriceProduct className="font-2-m">R$ 2.300,00</C.PriceProduct>
        <C.DescriptionProduct className="font-2-s">
          {/* eslint-disable max-len */}
          Gostaria de enfatizar que o início da atividade geral de formação de atitudes pode nos levar a considerar.
        </C.DescriptionProduct>
        <C.Button>Comprar</C.Button>
      </C.Information>
      <FormPruchase />
    </C.Container>
  </C.Product>
);

export default Product;
