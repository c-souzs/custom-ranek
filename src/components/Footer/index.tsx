import React from 'react';
import { FacebookLogo, InstagramLogo, YoutubeLogo } from 'phosphor-react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/logo.svg';

import * as C from './styles';

const Footer = (): JSX.Element => (
  <C.Footer>
    <C.Container className="container">
      <C.LinkLogo to="/">
        <Logo />
      </C.LinkLogo>
      <div>
        <C.Title className="font-2-l-b">Contato</C.Title>
        <ul className="font-2-m">
          <C.Li>
            <C.LinkCustom to="tel:+552199999999">+55 21 9999-9999</C.LinkCustom>
          </C.Li>
          <C.Li border>
            <C.LinkCustom to="mailto:souzsdev@gmail.com">souzsdev@gmail.com</C.LinkCustom>
          </C.Li>
          <C.Li>Rua Ali Perto</C.Li>
          <C.Li border>Rio de Janeiro - RJ</C.Li>
          <C.LiFlex>
            <Link to="www.instagram.com">
              <InstagramLogo size={36} color="#8877ff" />
            </Link>
            <Link to="www.facebook.com">
              <FacebookLogo size={36} color="#8877ff" />
            </Link>
            <Link to="www.youtube.com">
              <YoutubeLogo size={36} color="#8877ff" />
            </Link>
          </C.LiFlex>
        </ul>
      </div>
      <div>
        <C.Title className="font-2-l-b">Informações</C.Title>
        <ul className="font-1-m">
          <C.Li>
            <C.LinkCustom to="/products">Produtos</C.LinkCustom>
          </C.Li>
          <C.Li>
            <C.LinkCustom to="/account">Vender</C.LinkCustom>
          </C.Li>
          <C.Li>
            <C.LinkCustom to="/contact">Contato</C.LinkCustom>
          </C.Li>
        </ul>
      </div>
      <C.RightsReserved className="font-2-m">
        <p>Ranek © Alguns direitos reservados</p>
        <span>
          Recriado por:
          <C.LinkAuthor to="https://github.com/souzzs">Caio Souza</C.LinkAuthor>
          .
        </span>
      </C.RightsReserved>
    </C.Container>
  </C.Footer>
);

export default Footer;
