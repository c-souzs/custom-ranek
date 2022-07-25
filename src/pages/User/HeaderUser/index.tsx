import React from 'react';
import {
  CreditCard, Package, PencilSimple, SignOut, Tag,
} from 'phosphor-react';

import { useSelector } from 'react-redux';
import * as C from './styles';
import Title from '../../../components/Title';
import useMedia from '../../../hooks/useMedia';
import { RootState } from '../../../store/configure';

const HeaderUser = (): JSX.Element => {
  const changeIcon = useMedia('(max-width: 800px)');
  const stateUser = useSelector((state: RootState) => state.user);

  return (
    <C.HeaderUser>
      <C.Container className="container">
        <div>
          <C.Subtitle className="font-2-l-b">seus dados</C.Subtitle>
          <Title colorFixed>
            olá,
            {/* eslint-disable-next-line react/jsx-curly-brace-presence */}
            {' '}
            {stateUser.userData.information?.nome}
          </Title>
        </div>
        <C.Nav>
          <C.LinkCustom to="/user/products-sold" end>
            <Package size={changeIcon ? 24 : 26} color="#fff" />
          </C.LinkCustom>
          <C.LinkCustom to="/user/purchases">
            <CreditCard size={changeIcon ? 24 : 26} color="#fff" />
          </C.LinkCustom>
          <C.LinkCustom to="/user/sales">
            <Tag size={changeIcon ? 24 : 26} color="#fff" />
          </C.LinkCustom>
          <C.LinkCustom to="/user/edit-user">
            <PencilSimple size={changeIcon ? 24 : 26} color="#fff" />
          </C.LinkCustom>
          <C.LinkCustom to="/">
            <SignOut size={changeIcon ? 24 : 26} color="#fff" />
          </C.LinkCustom>
        </C.Nav>
      </C.Container>
    </C.HeaderUser>
  );
};

export default HeaderUser;
