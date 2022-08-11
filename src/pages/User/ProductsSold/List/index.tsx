import React from 'react';
import Loader from '../../../../components/Loader';
import ProductData from '../../../../components/ProductData';
import useControlRedux from '../../../../hooks/useControlRedux';
import { productUser } from '../../../../store/productReducer';

import * as C from './styles';

const List = (): JSX.Element => {
  const { useAppDispatch, useAppSelector } = useControlRedux();
  const dispatch = useAppDispatch();
  const { loading, error, types } = useAppSelector((state) => state.product);
  const { data } = useAppSelector((state) => state.user);

  // Busca os produtos do usuário
  React.useEffect(() => {
    if (data.information) {
      dispatch(productUser(data.information.id));
    }
  }, [data.information, dispatch]);

  return (
    <div className="container">
      <h2 className="font-1-xl subtitleSectionUser">Produtos anunciados</h2>
      {error && <C.Error className="error">{error}</C.Error>}
      <C.ListProducts>
        {types.user.length
          && types.user.map((product) => (
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
      {loading && <Loader />}
    </div>
  );
};

export default List;
