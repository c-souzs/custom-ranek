/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import { AxiosResponseHeaders } from 'axios';
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
import { getLocalization, reset } from '../../../store/localizationReducer';
import { loginUser, registerUser } from '../../../store/userReducer';

import * as C from './styles';

const Create = (): JSX.Element => {
  const { setValue: setValueName, ...name } = useInput('');
  const { setValue: setValueEmail, ...email } = useInput('email');
  const { setValue: setValuePassword, ...password } = useInput('');
  const { setValue: setValueCep, ...cep } = useInput('cep');
  const { setValue: setValueRoad, ...road } = useInput('');
  const { setValue: setValueNumber, ...number } = useInput('');
  const { setValue: setValueDistrict, ...district } = useInput('');
  const [city, setCity] = React.useState('Pains');
  const [citys, setCitys] = React.useState<string[]>(['Selecione uma cidade']);
  const { setValue: setValueStateUf, ...stateUf } = useInput('');

  const navigate = useNavigate();

  const dispatch = useDispatch<AppDispatch>();
  const stateUser = useSelector((state: RootState) => state.user);
  const stateLocalization = useSelector((state: RootState) => state.localization);

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

  const customOnBlurCep = async (): Promise<void> => {
    if (cep.validateAt()) {
      dispatch(getLocalization(cep.value));
    } else {
      dispatch(reset());
    }
  };

  React.useEffect(() => {
    if (stateUser.data.information) navigate('/user');
  }, [stateUser.data.information, navigate]);

  React.useEffect(() => {
    if (stateLocalization.data.cepFormat) {
      setValueCep(stateLocalization.data.cepFormat);
    }
  }, [stateLocalization.data.cepFormat, setValueCep]);

  React.useEffect(() => {
    if (stateLocalization.data.uf) {
      setValueStateUf(stateLocalization.data.uf);
    } else {
      setValueStateUf('');
    }
  }, [stateLocalization.data.uf, setValueStateUf]);

  React.useEffect(() => {
    if (stateLocalization.data.citys.length) {
      setCitys(stateLocalization.data.citys);
    } else {
      setCitys(['Selecione uma cidade']);
    }
  }, [stateLocalization.data.citys]);

  return (
    <C.Create>
      <TitlePackage subtitle="compre produtos" title="crie sua conta" />
      <C.Container className="container">
        <C.Form onSubmit={handleRegisterUser}>
          <Input label="Nome" name="name" type="text" {...name} />
          <Input label="Email" name="email" type="email" required {...email} />
          <Input label="Senha" name="password" type="password" {...password} />
          <div>
            <Input
              label="Cep"
              name="cep"
              type="text"
              onBlur={customOnBlurCep}
              {...cep}
              maxLength={9}
              disabled={stateLocalization.loading}
            />
            {stateLocalization.error && <p className="error">{stateLocalization.error}</p>}
          </div>
          <Input label="Rua" name="road" type="text" {...road} />
          <Input label="Número" name="number" type="text" {...number} />
          <Input label="Bairro" name="district" type="text" {...district} />
          <Select
            label="Cidade"
            value={city}
            setValue={setCity}
            options={citys}
            disabled={!stateLocalization.data.citys.length}
          />
          <Input label="Estado" name="state" type="text" {...stateUf} disabled />
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
