/* eslint-disable react/require-default-props */
import React from 'react';
import { Trash } from 'phosphor-react';

import * as C from './styles';

interface ProductDataProps {
  type: 'product' | 'purchase' | 'sale'
  image: string
  price: string
  name: string
  description?: string
  email?: string
  dataDelivery?: {
    cep: string
    road: string
    number: string
    district: string
    city: string
    state: string
  }
}

const ProductData = ({ type, ...props }: ProductDataProps): JSX.Element => {
  const typeSaleOrPurchase = type === 'sale' || type === 'purchase';

  return (
    <C.Container>
      <C.Image src={props.image} alt={props.name} />
      <C.DataProduct>
        <C.Price className="font-2-s">
          R$
          {props.price}
        </C.Price>
        <p className="font-2-xl">{props.name}</p>
        {type === 'product' && <C.Description>{props.description}</C.Description>}
        {typeSaleOrPurchase && (
          <p>
            <C.Email>
              {type === 'sale' ? 'Comprador' : 'Vendedor'}
              :
            </C.Email>
            {props.email}
          </p>
        )}
      </C.DataProduct>
      {type === 'sale' && (
        <C.DataDelivery>
          <C.Title>Entrega</C.Title>
          <C.ListData>
            <li>
              <C.InformationBold>Cep:</C.InformationBold>
              {props.dataDelivery?.cep}
            </li>
            <li>
              <C.InformationBold>Rua:</C.InformationBold>
              {props.dataDelivery?.road}
            </li>
            <li>
              <C.InformationBold>Número:</C.InformationBold>
              {props.dataDelivery?.number}
            </li>
            <li>
              <C.InformationBold>Bairro:</C.InformationBold>
              {props.dataDelivery?.district}
            </li>
            <li>
              <C.InformationBold>Cidade:</C.InformationBold>
              {props.dataDelivery?.city}
              {' '}
              -
              {props.dataDelivery?.state}
            </li>
          </C.ListData>
        </C.DataDelivery>
      )}
      {type === 'product' && (
        <C.ButtonDelete>
          {' '}
          <Trash size={32} color="#8877ff" />
          {' '}
        </C.ButtonDelete>
      )}
    </C.Container>
  );
};

export default ProductData;
