/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import React, { FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { userLogin } from '../../../store/userReducer';
import useControlRedux from '../../../hooks/useControlRedux';
import useInformationPage from '../../../hooks/useInformationPage';
import useInput from '../../../hooks/useInput';

import Input from '../../../components/Form/Input';
import Loader from '../../../components/Loader';
import Subtitle from '../../../components/Subtitle';
import TitlePackage from '../../../components/TitlePackage';
import ToastError from '../../../components/ToastError';

import * as C from './styles';

const Login = (): JSX.Element => {
  const { setValue: setValueEmail, ...email } = useInput('email');
  const { setValue: setValuePassword, ...password } = useInput('');
  const navigate = useNavigate();

  const { useAppDispatch, useAppSelector } = useControlRedux();
  const dispatch = useAppDispatch();
  const { loading, error, data } = useAppSelector((state) => state.user);

  const dataInformationPage = {
    title: 'Login',
    description: 'Entre na sua conta e aproveite nossos produtos.',
  };
  useInformationPage(dataInformationPage);

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
              <button className="basicStyleButtonOrLink" type="submit">
                Entrar
              </button>
              <C.LostPassword className="font-2-s">
                Esqueceu a senha?
                <C.LinkLostPassword
                  href="https://ranekapi.origamid.dev/wp-login.php?action=lostpassword"
                  target="_blank"
                >
                  Clique aqui
                </C.LinkLostPassword>
                .
              </C.LostPassword>
            </C.Information>
          </C.Form>
          <C.AnnounceCreateAccount>
            <Subtitle text="Crie sua conta" />
            <Link to="/account/create" className="basicStyleButtonOrLink">
              Cadastre-se agora mesmo
            </Link>
          </C.AnnounceCreateAccount>
        </div>
        <ToastError />
        {loading && <Loader />}
      </C.Container>
    </>
  );
};

export default Login;
