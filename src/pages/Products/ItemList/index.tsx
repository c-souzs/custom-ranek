import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../../types';

import * as C from './styles';

interface ItemListProps {
  product: Product
}

const ItemList = ({ product }: ItemListProps): JSX.Element => {
  const {
    id, fotos, nome, preco, descricao,
  } = product;

  return (
    <C.LiProduct key={id}>
      <Link to={`/product/${id}`}>
        <C.ImageProduct src={fotos[0].src} alt={fotos[0].titulo} />
        <C.NameProduct className="font-2-xl">{nome}</C.NameProduct>
        <C.PriceProduct className="font-2-m">
          R$
          {preco}
        </C.PriceProduct>
        <C.DescriptionProduct className="font-2-s">{descricao}</C.DescriptionProduct>
      </Link>
    </C.LiProduct>
  );
};

export default ItemList;
