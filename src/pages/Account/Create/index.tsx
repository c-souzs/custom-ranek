/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import React, { FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ButtonSubmit from '../../../components/Form/Button';
import Input from '../../../components/Form/Input';
import Select from '../../../components/Form/Select';
import Loader from '../../../components/Loader';
import TitlePackage from '../../../components/TitlePackage';
import useInput from '../../../hooks/useInput';
import { AppDispatch, RootState } from '../../../store/configure';
import { loginUser, registerUser } from '../../../store/userReducer';

import * as C from './styles';

const Create = (): JSX.Element => {
  const { setValue: setValueName, ...name } = useInput('');
  const { setValue: setValueEmail, ...email } = useInput('email');
  const { setValue: setValuePassword, ...password } = useInput('');
  const { setValue: setValueCep, ...cep } = useInput('');
  const { setValue: setValueRoad, ...road } = useInput('');
  const { setValue: setValueNumber, ...number } = useInput('');
  const { setValue: setValueDistrict, ...district } = useInput('');
  const [city, setCity] = React.useState('Pains');
  const [citys, setCitys] = React.useState<string[]>(['Pains']);
  const { setValue: setValueStateUf, ...stateUf } = useInput('');

  const navigate = useNavigate();

  const dispatch = useDispatch<AppDispatch>();
  const stateUser = useSelector((state: RootState) => state.user);

  const validateInputs = (): boolean => name.validateAt()
    && password.validateAt()
    && cep.validateAt()
    && road.validateAt()
    && number.validateAt()
    && district.validateAt()
    && city !== 'Selecione uma cidade'
    && stateUf.validateAt();

  const handleRegisterUser = async (e: FormEvent): Promise<void> => {
    e.preventDefault();

    if (validateInputs()) {
      const dataUser = {
        email: email.value,
        nome: name.value,
        senha: password.value,
        rua: road.value,
        cep: cep.value,
        numero: number.value,
        bairro: district.value,
        cidade: city,
        estado: stateUf.value,
      };

      await dispatch(registerUser(dataUser));
    }
  };

  React.useEffect(() => {
    if (stateUser.userData.information) navigate('/user');
  }, [stateUser.userData.information, navigate]);

  return (
    <C.Create>
      <TitlePackage subtitle="compre produtos" title="crie sua conta" />
      <C.Container className="container">
        <C.Form onSubmit={handleRegisterUser}>
          <Input label="Nome" name="name" type="text" {...name} />
          <Input label="Email" name="email" type="email" required {...email} />
          <Input label="Senha" name="password" type="password" {...password} />
          <Input label="Cep" name="cep" type="text" {...cep} />
          <Input label="Rua" name="road" type="text" {...road} />
          <Input label="Número" name="number" type="text" {...number} />
          <Input label="Bairro" name="district" type="text" {...district} />
          <Select label="Cidade" value={city} setValue={setCity} options={citys} />
          <Input label="Estado" name="state" type="text" {...stateUf} />
          {stateUser.error && <C.Error className="error">{stateUser.error}</C.Error>}
          <C.PositionColumn>
            <ButtonSubmit>Criar</ButtonSubmit>
          </C.PositionColumn>
        </C.Form>
        {stateUser.loading && <Loader />}
      </C.Container>
    </C.Create>
  );
};

export default Create;
