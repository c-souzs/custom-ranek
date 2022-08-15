import React from 'react';
import { Link } from 'react-router-dom';
import { IProduct } from '../../types';

import useControlRedux from '../../hooks/useControlRedux';

import * as C from './styles';

interface IProductSampleCardProps {
  typeSample: 'home' | 'list'
  product: IProduct
}

const ProductSampleCard = ({ typeSample, product }: IProductSampleCardProps): JSX.Element => {
  const {
    id, fotos, nome, preco, descricao, vendido, usuario_id: usuarioId,
  } = product;

  // Conjunto referente ao redux.
  const { useAppSelector } = useControlRedux();
  const { data } = useAppSelector((state) => state.user);

  const userId = data.information?.id;

  const owned = userId === usuarioId;
  const sold = vendido !== 'false';

  return (
    <C.Product soldOrOwned={owned || sold} backgroundActive={typeSample === 'list'}>
      <Link
        to={owned || sold ? '/pageNotFound' : `/product/${id}`}
        style={{ cursor: `${owned || sold ? 'auto' : 'pointer'}` }}
      >
        {/* eslint-disable-next-line max-len */}
        <C.ImageProduct src={fotos[0].src} alt={fotos[0].titulo} />
        <C.TitleProduct className="font-1-xl">{nome}</C.TitleProduct>
        <C.PriceProduct className="font-2-m">{`R$ ${preco}`}</C.PriceProduct>
        {typeSample === 'list' && <C.DescriptionProduct className="font-2-s">{descricao}</C.DescriptionProduct>}
      </Link>
    </C.Product>
  );
};

export default ProductSampleCard;
