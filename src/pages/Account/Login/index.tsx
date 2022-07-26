/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import React, { FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ButtonSubmit from '../../../components/Form/Button';
import Input from '../../../components/Form/Input';
import Loader from '../../../components/Loader';
import TitlePackage from '../../../components/TitlePackage';
import useInput from '../../../hooks/useInput';
import { AppDispatch, RootState } from '../../../store/configure';
import { loginUser } from '../../../store/userReducer';

import * as C from './styles';

const Login = (): JSX.Element => {
  const { setValue: setValueEmail, ...email } = useInput('email');
  const { setValue: setValuePassword, ...password } = useInput('');

  const navigate = useNavigate();

  const dispatch = useDispatch<AppDispatch>();
  const stateUser = useSelector((state: RootState) => state.user);

  const handleDataLogin = (e: FormEvent): void => {
    e.preventDefault();

    if (email.validateAt() && password.validateAt()) {
      const dataUser = {
        username: email.value,
        password: password.value,
      };

      dispatch(loginUser(dataUser));
    }
  };

  React.useEffect(() => {
    if (stateUser.data.information) navigate('/user');
  }, [stateUser.data.information, navigate]);

  return (
    <C.Login>
      <TitlePackage subtitle="Bem vindo de volta" title="acesse sua conta" />
      <C.Container className="container">
        <C.Form onSubmit={handleDataLogin}>
          <Input label="Email" placeholder="seuemail@gmail.com" name="email" type="email" required {...email} />
          <Input label="Senha" placeholder="••••••••" name="password" type="password" {...password} />
          {stateUser.error && <p className="error">{stateUser.error}</p>}
          <C.Information>
            <ButtonSubmit>Entrar</ButtonSubmit>
            <C.LostPassword className="font-2-s">
              Esqueceu a senha?
              <C.LinkLostPassword to="https://ranekapi.origamid.dev/wp-login.php?action=lostpassword" target="_blank">
                Clique aqui
              </C.LinkLostPassword>
              .
            </C.LostPassword>
          </C.Information>
        </C.Form>
        {stateUser.loading && <Loader />}
      </C.Container>
    </C.Login>
  );
};

export default Login;
