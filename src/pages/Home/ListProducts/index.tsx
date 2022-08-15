import React from 'react';

import { productList } from '../../../store/productReducer';
import useMedia from '../../../hooks/useMedia';
import useControlRedux from '../../../hooks/useControlRedux';
import { useInterval } from '../../../hooks/useInterval';

import Title from '../../../components/Title';
import Loader from '../../../components/Loader';
import ProductSampleCard from '../../../components/ProductSampleCard';
import ProductSampleCardSkeleton from '../../../components/ProductSampleCard/Skeleton';
import ToastError from '../../../components/ToastError';

import * as C from './styles';

const ListProducts = (): JSX.Element => {
  const changeMargin = useMedia('(max-width: 800px)');

  const { useAppDispatch, useAppSelector } = useControlRedux();
  const dispatch = useAppDispatch();
  const { loading, error, types } = useAppSelector((state) => state.product);
  const [showItems, setShowItems] = React.useState(false);

  useInterval(() => setShowItems(true), 7000);

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
      <ToastError />
      {error && <p className="error">{error}</p>}
      {loading && <Loader />}
    </C.ListProducts>
  );
};

export default ListProducts;
