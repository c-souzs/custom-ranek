/* eslint-disable react/require-default-props */
import React from 'react';
import { Trash } from 'phosphor-react';

import * as C from './styles';
import useControlRedux from '../../hooks/useControlRedux';
import { productUnannounced } from '../../store/productReducer';

interface Address {
  cep: string
  numero: string
  rua: string
  bairro: string
  cidade: string
  estado: string
}

interface ProductDataProps {
  type: 'product' | 'purchase' | 'sale'
  id?: string
  image: string
  price: string
  name: string
  description?: string
  email?: string
  dataDelivery?: Address
}

const ProductData = ({ type, ...props }: ProductDataProps): JSX.Element => {
  const typeSaleOrPurchase = type === 'sale' || type === 'purchase';

  const { useAppDispatch, useAppSelector } = useControlRedux();
  const dispatch = useAppDispatch();
  const { loading, error, data } = useAppSelector((state) => state.user);

  const deleteProductAnnoucend = (): void => {
    if (data.information && props.id) dispatch(productUnannounced(props.id));
  };

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
              {props.dataDelivery?.rua}
            </li>
            <li>
              <C.InformationBold>Número:</C.InformationBold>
              {props.dataDelivery?.numero}
            </li>
            <li>
              <C.InformationBold>Bairro:</C.InformationBold>
              {props.dataDelivery?.bairro}
            </li>
            <li>
              <C.InformationBold>Cidade:</C.InformationBold>
              {props.dataDelivery?.cidade}
              {' '}
              -
              {props.dataDelivery?.estado}
            </li>
          </C.ListData>
        </C.DataDelivery>
      )}
      {type === 'product' && (
        <C.ButtonDelete onClick={deleteProductAnnoucend}>
          {' '}
          <Trash size={32} color="#8877ff" />
          {' '}
        </C.ButtonDelete>
      )}
    </C.Container>
  );
};

export default ProductData;
