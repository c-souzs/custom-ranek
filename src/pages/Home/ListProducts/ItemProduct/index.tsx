import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../../../types';

import * as C from './stlyes';

interface ItemProductProps {
  product: Product
}

const ItemProduct = ({ product }: ItemProductProps): JSX.Element => {
  const [loadingImage, setLoadingImage] = React.useState(true);
  const {
    id, fotos, nome, preco,
  } = product;

  return (
    <C.Product>
      <Link to={`/product/${id}`}>
        {loadingImage && <C.SkeletonImage as="div" show={loadingImage} />}
        {/*  eslint-disable-next-line max-len */}
        <C.ImageProduct
          src={fotos[0].src}
          alt={fotos[0].titulo}
          show={loadingImage}
          onLoad={() => setLoadingImage(false)}
        />
        <C.TitleProduct className="font-1-xl">{nome}</C.TitleProduct>
        <C.PriceProduct className="font-2-m">
          R$
          {preco}
        </C.PriceProduct>
      </Link>
    </C.Product>
  );
};

export default ItemProduct;
