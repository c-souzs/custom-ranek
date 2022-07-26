import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import useMedia from '../../../hooks/useMedia';

import Title from '../../../components/Title';

import imageEmphasis from '../../../assets/introduction.png';

import * as C from './styles';
import { AppDispatch, RootState } from '../../../store/configure';
// import { getProductsHome } from '../../../store/productReducer';

const ListProducts = (): JSX.Element => {
  const changeMargin = useMedia('(max-width: 800px)');
  const dispatch = useDispatch<AppDispatch>();
  const stateProduct = useSelector((state: RootState) => state.product);

  //   React.useEffect(() => {
  //     const getProducts = async (): Promise<void> => {
  //       await dispatch(getProductsHome());
  //     };

  //     getProducts();
  //   }, []);

  return (
    <C.ListProducts>
      <div className="container">
        <Title mB={changeMargin ? '1.25rem' : '2.5rem'} colorFixed={false}>
          escolha seu produto
        </Title>
      </div>
      <C.List>
        <C.Product>
          <Link to="/product/notebook-3">
            <C.ImageProduct src={imageEmphasis} alt="" />
            <C.TitleProduct className="font-1-xl">Smartphone</C.TitleProduct>
            <C.PriceProduct className="font-2-m">R$ 2499</C.PriceProduct>
          </Link>
        </C.Product>
        <C.Product>
          <Link to="/product/smartwatch">
            <C.ImageProduct src={imageEmphasis} alt="" />
            <C.TitleProduct className="font-1-xl">Smartphone</C.TitleProduct>
            <C.PriceProduct className="font-2-m">R$ 2499</C.PriceProduct>
          </Link>
        </C.Product>
        <C.Product>
          <Link to="/product">
            <C.ImageProduct src={imageEmphasis} alt="" />
            <C.TitleProduct className="font-1-xl">Smartphone</C.TitleProduct>
            <C.PriceProduct className="font-2-m">R$ 2499</C.PriceProduct>
          </Link>
        </C.Product>
        <C.Product>
          <Link to="/product">
            <C.ImageProduct src={imageEmphasis} alt="" />
            <C.TitleProduct className="font-1-xl">Smartphone</C.TitleProduct>
            <C.PriceProduct className="font-2-m">R$ 2499</C.PriceProduct>
          </Link>
        </C.Product>
      </C.List>
    </C.ListProducts>
  );
};

export default ListProducts;
