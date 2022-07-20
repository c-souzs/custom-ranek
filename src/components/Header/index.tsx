import React from 'react';
import { Link } from 'react-router-dom';
import ReactSwitch from 'react-switch';
import { ThemeContext } from 'styled-components';

import { ReactComponent as Logo } from '../../assets/logo.svg';

import * as C from './styles';

interface HeaderProps {
  toggleTheme: () => void
}

const Header = ({ toggleTheme }: HeaderProps): JSX.Element => {
  const { name } = React.useContext(ThemeContext);
  return (
    <C.Header>
      <C.Container className="container">
        <Link to="/">
          <Logo />
        </Link>
        <C.ContentActions>
          <nav>
            <C.ListMenu className="font-1-m">
              <li>
                <C.LinkCustom to="/products">Produtos</C.LinkCustom>
              </li>
              <li>
                <C.LinkCustom to="/contact">Contato</C.LinkCustom>
              </li>
              <li>
                <C.LinkAccount to="/account/login">Vender</C.LinkAccount>
              </li>
            </C.ListMenu>
          </nav>
          <C.ThemeContainer>
            ☀️
            <ReactSwitch
              onChange={toggleTheme}
              checked={name === 'dark'}
              checkedIcon={false}
              uncheckedIcon={false}
              height={13}
              width={35}
              handleDiameter={20}
              onColor="#8877ff"
              offColor="#111"
            />
            🌙
          </C.ThemeContainer>
        </C.ContentActions>
      </C.Container>
    </C.Header>
  );
};

export default Header;
