import React from 'react';
import useMedia from '../../../hooks/useMedia';

import Title from '../../../components/Title';

import * as C from './styles';
import { productList } from '../../../store/productReducer';
import useControlRedux from '../../../hooks/useControlRedux';
import Loader from '../../../components/Loader';
import { useInterval } from '../../../hooks/useInterval';
import ProductSampleCard from '../../../components/ProductSampleCard';
import ProductSampleCardSkeleton from '../../../components/ProductSampleCard/Skeleton';

const ListProducts = (): JSX.Element => {
  const changeMargin = useMedia('(max-width: 800px)');

  // Conjunto referente ao redux.
  const { useAppDispatch, useAppSelector } = useControlRedux();
  const dispatch = useAppDispatch();
  const { loading, error, types } = useAppSelector((state) => state.product);
  const [showItems, setShowItems] = React.useState(false);

  // Mostra os produtos após 7 segundos para a imagem estar carregada
  useInterval(() => setShowItems(true), 7000);

  // Busca os dados ao entrar na página.
  React.useEffect(() => {
    const getProducts = async (): Promise<void> => {
      await dispatch(productList('?_limit=9'));
    };

    getProducts();
  }, [dispatch]);

  return (
    <C.ListProducts>
      <div className="container">
        <Title mB={changeMargin ? '1.25rem' : '2.5rem'} colorFixed={false}>
          escolha seu produto
        </Title>
      </div>
      {!showItems && (
        <C.List>
          <ProductSampleCardSkeleton amount={9} width="100%" height="350px" />
        </C.List>
      )}
      <C.CustomList show={showItems}>
        {types.list.length ? (
          /*  eslint-disable-next-line max-len */
          types.list.map((product) => <ProductSampleCard key={product.id} typeSample="home" product={product} />)
        ) : (
          <p>Nenhum dado encontrado.</p>
        )}
      </C.CustomList>
      {error && <p className="error">{error}</p>}
      {loading && <Loader />}
    </C.ListProducts>
  );
};

export default ListProducts;
