import React from 'react';

import { productUser } from '../../../../store/productReducer';
import useControlRedux from '../../../../hooks/useControlRedux';
import { useInterval } from '../../../../hooks/useInterval';

import Loader from '../../../../components/Loader';
import ProductSampleCardSkeleton from '../../../../components/ProductSampleCard/Skeleton';
import ProductUserCard from '../../../../components/ProductUserCard';
import Subtitle from '../../../../components/Subtitle';
import ToastError from '../../../../components/ToastError';

import * as C from './styles';

const List = (): JSX.Element => {
  const { useAppDispatch, useAppSelector } = useControlRedux();
  const dispatch = useAppDispatch();
  const { loading, error, types } = useAppSelector((state) => state.product);
  const { data } = useAppSelector((state) => state.user);
  const [showItems, setShowItems] = React.useState(false);

  useInterval(() => setShowItems(true), 7000);

  React.useEffect(() => {
    if (data.information) {
      dispatch(productUser(data.information.id));
    }
  }, [data.information, dispatch]);

  return (
    <C.ListProperties className="container">
      <Subtitle text="Produtos anunciados" />
      {error && <p className="error">{error}</p>}
      {!showItems && (
        <C.List>
          <ProductSampleCardSkeleton amount={4} width="100%" height="250px" />
        </C.List>
      )}
      <C.CustomList show={showItems}>
        {types.user.length ? (
          types.user.map((product) => (
            <ProductUserCard
              key={product.id}
              id={product.id}
              type="product"
              image={product.fotos[0].src}
              name={product.nome}
              price={product.preco}
              description={product.descricao}
            />
          ))
        ) : (
          <p className="error">Nenhum dado foi encontrado.</p>
        )}
      </C.CustomList>
      <ToastError />
      {loading && <Loader />}
    </C.ListProperties>
  );
};

export default List;
