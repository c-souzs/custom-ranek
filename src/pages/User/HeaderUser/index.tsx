import React from 'react';
import {
  CreditCard, Package, PencilSimple, SignOut, Tag,
} from 'phosphor-react';
import { useNavigate } from 'react-router-dom';

import { userLogout } from '../../../store/userReducer';
import useMedia from '../../../hooks/useMedia';
import useControlRedux from '../../../hooks/useControlRedux';

import Title from '../../../components/Title';

import * as C from './styles';

const HeaderUser = (): JSX.Element => {
  const changeIcon = useMedia('(max-width: 800px)');
  const navigate = useNavigate();

  const { useAppDispatch, useAppSelector } = useControlRedux();
  const dispatch = useAppDispatch();
  const stateUser = useAppSelector((state) => state.user);

  const handleLogout = async (): Promise<void> => {
    await dispatch(userLogout());
    navigate('/');
  };

  return (
    <C.HeaderUser>
      <C.Container className="container">
        <div>
          <C.Subtitle className="font-2-l-b">seus dados</C.Subtitle>
          <Title colorFixed>
            olá,
            {/* eslint-disable-next-line react/jsx-curly-brace-presence */}
            {' '}
            {stateUser.data.information?.nome}
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
          <C.LinkLogout as="button" onClick={handleLogout}>
            <SignOut size={changeIcon ? 24 : 26} color="#fff" />
          </C.LinkLogout>
        </C.Nav>
      </C.Container>
    </C.HeaderUser>
  );
};

export default HeaderUser;
