import { User } from 'phosphor-react';
import React from 'react';
import { Link } from 'react-router-dom';
import ReactSwitch from 'react-switch';
import { ThemeContext } from 'styled-components';

import useMedia from '../../hooks/useMedia';
import useControlRedux from '../../hooks/useControlRedux';

import { ReactComponent as Logo } from '../../assets/logo.svg';

import * as C from './styles';

interface IHeaderProps {
  toggleTheme: () => void
}

const Header = ({ toggleTheme }: IHeaderProps): JSX.Element => {
  const { name } = React.useContext(ThemeContext);
  const [activeMenu, setActiveMenu] = React.useState(false);
  const matchMobile = useMedia('(max-width: 696px)');

  // Conjunto referente ao redux.
  const { useAppSelector } = useControlRedux();
  const { data } = useAppSelector((state) => state.user);

  return (
    <C.Header>
      <C.Alert>
        <div className="container">Esse é um sistema fictício, sem objeto comercial.</div>
      </C.Alert>
      <C.Container className="container">
        <Link to="/">
          <Logo />
        </Link>
        {/* eslint-disable max-len */}
        {matchMobile && <C.ButtonMenuMobile onClick={() => setActiveMenu(!activeMenu)} active={activeMenu} />}
        <C.Nav mobile={matchMobile} active={activeMenu}>
          <C.ListMenu className="font-1-m" mobile={matchMobile}>
            <li>
              <C.LinkCustom to="/products">Produtos</C.LinkCustom>
            </li>
            <li>
              <C.LinkCustom to="/contact">Contato</C.LinkCustom>
            </li>
            <li>
              <C.LinkAccount to={data.information ? '/user/products-sold' : '/account/login'}>
                {data.information ? (
                  <>
                    <User size={24} color="#fff" />
                    Perfil
                  </>
                ) : (
                  'Vender'
                )}
              </C.LinkAccount>
            </li>
            <C.LiThemeContainer>
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
            </C.LiThemeContainer>
          </C.ListMenu>
        </C.Nav>
      </C.Container>
    </C.Header>
  );
};

export default Header;
