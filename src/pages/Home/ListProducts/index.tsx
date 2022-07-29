import React from 'react';
import { Link } from 'react-router-dom';
import useMedia from '../../../hooks/useMedia';

import Title from '../../../components/Title';

import * as C from './styles';
import { productList } from '../../../store/productReducer';
import useControlRedux from '../../../hooks/useControlRedux';
import Loader from '../../../components/Loader';

const ListProducts = (): JSX.Element => {
  const changeMargin = useMedia('(max-width: 800px)');

  const { useAppDispatch, useAppSelector } = useControlRedux();
  const dispatch = useAppDispatch();
  const { loading, error, types } = useAppSelector((state) => state.product);

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
        {types.list.length
          && types.list.map(({
            id, fotos, nome, preco,
          }) => (
            <C.Product key={id}>
              <Link to={`/product/${id}`}>
                <C.ImageProduct src={fotos[0].src} alt={fotos[0].titulo} />
                <C.TitleProduct className="font-1-xl">{nome}</C.TitleProduct>
                <C.PriceProduct className="font-2-m">
                  R$
                  {preco}
                </C.PriceProduct>
              </Link>
            </C.Product>
          ))}
      </C.List>
      {error && <C.Error className="error">Esse é o seu erro</C.Error>}
      {loading && <Loader />}
    </C.ListProducts>
  );
};

export default ListProducts;
