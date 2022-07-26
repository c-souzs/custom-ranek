import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { AppDispatch, RootState } from '../../store/configure';
import { productPage } from '../../store/productReducer';
import FormPruchase from './FormPurchase';

import * as C from './styles';

const Product = (): JSX.Element => {
  const { slug } = useParams();

  const dispatch = useDispatch<AppDispatch>();
  const stateProduct = useSelector((state: RootState) => state.product);

  React.useEffect(() => {
    const getProduct = async (): Promise<void> => {
      const fixSlug = slug!;
      await dispatch(productPage(fixSlug));
    };

    getProduct();
  }, []);

  return (
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
          <C.NameProduct>Notebook</C.NameProduct>
          <C.PriceProduct>R$ 2.300,00</C.PriceProduct>
          <C.DescriptionProduct>
            {/* eslint-disable max-len */}
            Gostaria de enfatizar que o início da atividade geral de formação de atitudes pode nos levar a considerar.
          </C.DescriptionProduct>
          <C.Button>Comprar</C.Button>
        </C.Information>
        <FormPruchase />
      </C.Container>
    </C.Product>
  );
};

export default Product;
