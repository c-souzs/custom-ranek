import React from 'react';
import { CheckCircle, Truck } from 'phosphor-react';

import Title from '../../../components/Title';

import imageDelivery from '../../../assets/imageDelivery.jpg';

import * as C from './styles';

const Technology = (): JSX.Element => (
  <C.Technology>
    <C.Container className="container">
      <C.TextContent>
        <C.Subtitle className="font-2-l-b">Segurança garantida</C.Subtitle>
        <Title mB="2rem" colorFixed>
          você escolhe o melhor horário para a entrega
        </Title>
        <C.Description className="font-2-l">
          {/* eslint-disable max-len */}
          Na ranek, toda entrega é avisada ao remente dias antes, para que você, nosso cliente, possa definir o melhor
          horário para levarmos o produto até você.
        </C.Description>
        <C.LinkProducts to="/products">Escolha seu produto</C.LinkProducts>
        <C.Qualities>
          <C.Quality>
            <CheckCircle size={24} color="#8877FF" />
            <C.TitleQuality className="font-1-m">Verificação</C.TitleQuality>
            <C.DescriptionQuality className="font-2-s">
              Todo produto comprado é derecionado para nossa sede, onde verificamos o estado do produto
            </C.DescriptionQuality>
          </C.Quality>
          <C.Quality>
            <Truck size={24} color="#8877FF" />
            <C.TitleQuality className="font-1-m">Rapidez</C.TitleQuality>
            <C.DescriptionQuality className="font-2-s">
              Com nossa parceria com os correios sedex, seu produto chega na mesma semama da compra.
              {' '}
            </C.DescriptionQuality>
          </C.Quality>
        </C.Qualities>
      </C.TextContent>
      <C.ImageContent>
        <C.ImageDelivery src={imageDelivery} alt="Product delivery" />
      </C.ImageContent>
    </C.Container>
  </C.Technology>
);

export default Technology;
