/* eslint-disable react/jsx-props-no-spreading */
import React, { FormEvent } from 'react';
import ButtonSubmit from '../../../components/Form/Button';
import Input from '../../../components/Form/Input';
import TitlePackage from '../../../components/TitlePackage';
import useInput from '../../../hooks/useInput';

import * as C from './styles';

const Login = (): JSX.Element => {
  const { setValue: setValueEmail, ...email } = useInput('email');
  const { setValue: setValuePassword, ...password } = useInput('');

  const handleDataLogin = (e: FormEvent): void => {
    e.preventDefault();

    if (email.validateAt() && password.validateAt()) {
      const dataUser = {
        username: email.value,
        password: password.value,
      };

      console.log(dataUser);
    }
  };

  return (
    <C.Login>
      <TitlePackage subtitle="Bem vindo de volta" title="acesse sua conta" />
      <section className="container">
        <C.Form onSubmit={handleDataLogin}>
          <Input label="Email" placeholder="seuemail@gmail.com" name="email" type="email" required {...email} />
          <Input label="Senha" placeholder="••••••••" name="password" type="password" {...password} />
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
      </section>
    </C.Login>
  );
};

export default Login;
