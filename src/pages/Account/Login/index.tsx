/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import React, { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonSubmit from '../../../components/Form/Button';
import Input from '../../../components/Form/Input';
import Loader from '../../../components/Loader';
import TitlePackage from '../../../components/TitlePackage';
import useControlRedux from '../../../hooks/useControlRedux';
import useInput from '../../../hooks/useInput';
import { userLogin } from '../../../store/userReducer';

import * as C from './styles';

const Login = (): JSX.Element => {
  const { setValue: setValueEmail, ...email } = useInput('email');
  const { setValue: setValuePassword, ...password } = useInput('');
  const navigate = useNavigate();

  // Conjunto referente ao redux.
  const { useAppDispatch, useAppSelector } = useControlRedux();
  const dispatch = useAppDispatch();
  const { loading, error, data } = useAppSelector((state) => state.user);

  // Faz o login do usuário.
  const accomplishLogin = (e: FormEvent): void => {
    e.preventDefault();

    if (email.validateAt() && password.validateAt()) {
      const dataUser = {
        username: email.value,
        password: password.value,
      };

      dispatch(userLogin(dataUser));
    }
  };

  // Redireciona o usuário após o login.
  React.useEffect(() => {
    if (data.information) navigate('/user/products-sold');
  }, [data.information, navigate]);

  return (
    <>
      <TitlePackage subtitle="Bem vindo de volta" title="acesse sua conta" />
      <C.Container>
        <div className="container">
          <C.Form onSubmit={accomplishLogin}>
            <Input label="Email" placeholder="seuemail@gmail.com" name="email" type="email" required {...email} />
            <Input label="Senha" placeholder="••••••••" name="password" type="password" {...password} />
            {error && <p className="error">{error}</p>}
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
        </div>
        {loading && <Loader />}
      </C.Container>
    </>
  );
};

export default Login;
