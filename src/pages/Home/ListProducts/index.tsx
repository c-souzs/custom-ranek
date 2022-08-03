import React from 'react';
import useMedia from '../../../hooks/useMedia';

import Title from '../../../components/Title';

import * as C from './styles';
import { productList } from '../../../store/productReducer';
import useControlRedux from '../../../hooks/useControlRedux';
import Loader from '../../../components/Loader';
import ItemProduct from './ItemProduct';

const ListProducts = (): JSX.Element => {
  const changeMargin = useMedia('(max-width: 800px)');

  // Conjunto referente ao redux.
  const { useAppDispatch, useAppSelector } = useControlRedux();
  const dispatch = useAppDispatch();
  const { loading, error, types } = useAppSelector((state) => state.product);

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
      <C.List>
        {/*  eslint-disable-next-line max-len */}
        {types.list.length && types.list.map((product) => <ItemProduct key={product.id} product={product} />)}
      </C.List>
      {error && <p className="error">{error}</p>}
      {loading && <Loader />}
    </C.ListProducts>
  );
};

export default ListProducts;
