import React from 'react';
import Loader from '../../../../components/Loader';
import ProductData from '../../../../components/ProductData';
import useControlRedux from '../../../../hooks/useControlRedux';
import { productsAnnounced } from '../../../../store/userReducer';

import * as C from './styles';

const List = (): JSX.Element => {
  const { useAppDispatch, useAppSelector } = useControlRedux();
  const dispatch = useAppDispatch();
  const { loading, error, data } = useAppSelector((state) => state.user);

  React.useEffect(() => {
    if (data.information) {
      dispatch(productsAnnounced(data.information.id));
    }
  }, []);

  return (
    <C.List>
      <div className="container">
        <h2 className="font-1-xl subtitleSectionUser">Produtos anunciados</h2>
        {error && <C.Error className="error">{error}</C.Error>}
        <C.ListProducts>
          {data.productsAnnounced.length
            && data.productsAnnounced.map((product) => (
              <ProductData
                key={product.id}
                id={product.id}
                type="product"
                image={product.fotos[0].src}
                name={product.nome}
                price={product.preco}
                description={product.descricao}
              />
            ))}
        </C.ListProducts>
      </div>
      {loading && <Loader />}
    </C.List>
  );
};

export default List;
