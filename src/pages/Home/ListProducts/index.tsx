import React from 'react';
import { Link } from 'react-router-dom';

import Title from '../../../components/Title';

import imageEmphasis from '../../../assets/introduction.png';

import * as C from './styles';
import useMedia from '../../../hooks/useMedia';

const ListProducts = (): JSX.Element => {
  const changeMargin = useMedia('(max-width: 800px)');

  return (
    <C.ListProducts>
      <div className="container">
        <Title mB={changeMargin ? '1.25rem' : '2.5rem'} colorFixed={false}>
          escolha seu produto
        </Title>
      </div>
      <C.List>
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
