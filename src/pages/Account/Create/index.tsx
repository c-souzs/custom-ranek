/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import React, { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import { userRegister } from '../../../store/userReducer';
import { localizationAddress, reset } from '../../../store/localizationReducer';
import useControlRedux from '../../../hooks/useControlRedux';
import useInformationPage from '../../../hooks/useInformationPage';
import useInput from '../../../hooks/useInput';

import Input from '../../../components/Form/Input';
import Select from '../../../components/Form/Select';
import Loader from '../../../components/Loader';
import TitlePackage from '../../../components/TitlePackage';
import ToastError from '../../../components/ToastError';

import * as C from './styles';

const Create = (): JSX.Element => {
  const { setValue: setValueName, ...name } = useInput('');
  const { setValue: setValueEmail, ...email } = useInput('email');
  const { setValue: setValuePassword, ...password } = useInput('');
  const { setValue: setValueCep, ...cep } = useInput('cep');
  const { setValue: setValueRoad, ...road } = useInput('');
  const { setValue: setValueNumber, ...number } = useInput('');
  const { setValue: setValueDistrict, ...district } = useInput('');
  const [city, setCity] = React.useState('');
  const [citys, setCitys] = React.useState<string[]>(['Selecione uma cidade']);
  const { setValue: setValueStateUf, ...stateUf } = useInput('');
  const navigate = useNavigate();

  // Altera o titulo e a descrião da página
  const dataInformationPage = {
    title: 'Cadastro',
    description: 'Crie sua conta na melhor loja de produtos eletrônicos usados e originais.',
  };
  useInformationPage(dataInformationPage);

  // Conjunto referente ao redux.
  const { useAppDispatch, useAppSelector } = useControlRedux();
  const dispatch = useAppDispatch();
  const stateUser = useAppSelector((state) => state.user);
  const stateLocalization = useAppSelector((state) => state.localization);

  const validateInputs = (): boolean => name.validateAt()
    && password.validateAt()
    && cep.validateAt()
    && road.validateAt()
    && number.validateAt()
    && district.validateAt()
    && city !== 'Selecione uma cidade'
    && stateUf.validateAt();

  const accomplishRegister = async (e: FormEvent): Promise<void> => {
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

      await dispatch(userRegister(dataUser));
    }
  };

  const customOnBlurCep = (): void => {
    if (cep.validateAt()) {
      dispatch(localizationAddress(cep.value));
    } else {
      dispatch(reset());
    }
  };

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

  React.useEffect(() => {
    if (stateUser.data.information) navigate('/user/products-sold');
  }, [stateUser.data.information, navigate]);

  return (
    <>
      <TitlePackage subtitle="compre produtos" title="crie sua conta" />
      <C.Container>
        <div className="container">
          <C.Form onSubmit={accomplishRegister}>
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
              disabled={stateLocalization.data.citys.length === 0 || stateLocalization.loading}
            />
            <Input label="Estado" name="state" type="text" {...stateUf} disabled />
            {stateUser.error && <p className="error">{stateUser.error}</p>}
            <C.PositionColumn>
              <button className="basicStyleButtonOrLink" type="submit">
                Criar
              </button>
            </C.PositionColumn>
          </C.Form>
        </div>
        <ToastError />
        {stateUser.loading && <Loader />}
      </C.Container>
    </>
  );
};

export default Create;
