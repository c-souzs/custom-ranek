import React from 'react';
import {
  CreditCard, Package, PencilSimple, SignOut, Tag,
} from 'phosphor-react';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as C from './styles';
import Title from '../../../components/Title';
import useMedia from '../../../hooks/useMedia';
import { AppDispatch, RootState } from '../../../store/configure';
import { userLogout } from '../../../store/userReducer';

const HeaderUser = (): JSX.Element => {
  const changeIcon = useMedia('(max-width: 800px)');
  const dispatch = useDispatch<AppDispatch>();
  const stateUser = useSelector((state: RootState) => state.user);
  const navigate = useNavigate();

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
