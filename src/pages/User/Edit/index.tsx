/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import React, { FormEvent } from 'react';

import { localizationAddress, reset } from '../../../store/localizationReducer';
import { userUpdate } from '../../../store/userReducer';
import useControlRedux from '../../../hooks/useControlRedux';
import useInformationPage from '../../../hooks/useInformationPage';
import useInput from '../../../hooks/useInput';

import Input from '../../../components/Form/Input';
import Select from '../../../components/Form/Select';
import Loader from '../../../components/Loader';
import Subtitle from '../../../components/Subtitle';
import ToastError from '../../../components/ToastError';

import * as C from './styles';

const Edit = (): JSX.Element => {
  const { setValue: setValueName, ...name } = useInput('');
  const { setValue: setValueEmail, ...email } = useInput('email');
  const { setValue: setValuePassword, ...password } = useInput(null);
  const { setValue: setValueCep, ...cep } = useInput('');
  const { setValue: setValueRoad, ...road } = useInput('');
  const { setValue: setValueNumber, ...number } = useInput('');
  const { setValue: setValueDistrict, ...district } = useInput('');
  const [city, setCity] = React.useState('');
  const [citys, setCitys] = React.useState<string[]>([]);
  const { setValue: setValueStateUf, ...stateUf } = useInput('');

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

  const dataInformationPage = {
    title: 'Altere seus dados',
    description: 'Edite seus dados como e quando quiser.',
  };
  useInformationPage(dataInformationPage);

  const accomplishUpdate = async (e: FormEvent): Promise<void> => {
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

      await dispatch(userUpdate(dataUser));
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
    if (stateUser.data.information) {
      const {
        nome, email: emailUser, cep: cepUser, rua, numero, bairro, cidade, estado,
      } = stateUser.data.information;
      setValueName(nome);
      setValueEmail(emailUser);
      setValueCep(cepUser);
      setValueRoad(rua);
      setValueNumber(numero);
      setValueDistrict(bairro);
      setCity(cidade);
      setValueStateUf(estado);
    }
  }, [
    setValueName,
    setValueEmail,
    setValueCep,
    setValueRoad,
    setValueNumber,
    setValueDistrict,
    setCity,
    setValueStateUf,
    stateUser.data,
  ]);

  React.useEffect(() => {
    const userData = stateUser.data.information;
    if (userData) {
      dispatch(localizationAddress(userData.cep));
    }
  }, [stateUser.data.information, dispatch]);

  React.useEffect(() => {
    if (stateLocalization.data.citys.length) {
      setCitys(stateLocalization.data.citys);
    } else {
      setCitys(['Selecione uma cidade']);
    }
  }, [stateLocalization.data.citys]);

  React.useEffect(() => {
    if (stateLocalization.data.uf) {
      setValueStateUf(stateLocalization.data.uf);
    } else {
      setValueStateUf('');
    }
  }, [stateLocalization.data.uf, setValueStateUf]);

  return (
    <C.Edit className="container">
      <Subtitle text="Seus dados" />
      <C.Form onSubmit={accomplishUpdate}>
        <Input label="Nome" name="name" type="text" {...name} />
        <Input label="Email" name="email" type="email" required {...email} />
        <Input label="Senha" name="password" type="password" {...password} placeholder="Insira sua nova senha" />
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
        <C.ElementColumn>
          <button className="basicStyleButtonOrLink" type="submit">
            Alterar
          </button>
        </C.ElementColumn>
      </C.Form>
      <ToastError />
      {stateUser.loading && <Loader />}
    </C.Edit>
  );
};

export default Edit;
