/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import React, { FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ButtonSubmit from '../../../components/Form/Button';
import Input from '../../../components/Form/Input';
import Select from '../../../components/Form/Select';
import Loader from '../../../components/Loader';
import useControlRedux from '../../../hooks/useControlRedux';
import useInput from '../../../hooks/useInput';
import { AppDispatch, RootState } from '../../../store/configure';
import { localizationAddress, reset } from '../../../store/localizationReducer';
import { userUpdate } from '../../../store/userReducer';

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

  // Conjunto referente ao redux.
  const { useAppDispatch, useAppSelector } = useControlRedux();
  const dispatch = useAppDispatch();
  const stateUser = useAppSelector((state) => state.user);
  const stateLocalization = useAppSelector((state) => state.localization);

  // Valida os campos.
  const validateInputs = (): boolean => name.validateAt()
    && password.validateAt()
    && cep.validateAt()
    && road.validateAt()
    && number.validateAt()
    && district.validateAt()
    && city !== 'Selecione uma cidade'
    && stateUf.validateAt();

  // Realiza a atualização de dados do usuário.
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

  // Após o usuário remover o foco do campo do cep, o valor é validado e é realizado
  // a consulta na api.
  const customOnBlurCep = (): void => {
    if (cep.validateAt()) {
      dispatch(localizationAddress(cep.value));
    } else {
      dispatch(reset());
    }
  };

  // Preenche os campos já com os dados do usuário.
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
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const cepActual = stateUser.data.information!.cep;
    dispatch(localizationAddress(cepActual));
  }, [stateUser.data.information, dispatch]);

  // Lista as cidades após a consulta de dados do cep.
  React.useEffect(() => {
    if (stateLocalization.data.citys.length) {
      setCitys(stateLocalization.data.citys);
    } else {
      setCitys(['Selecione uma cidade']);
    }
  }, [stateLocalization.data.citys]);

  // Preenche o campo do estado baseado no cep, de forma automatica.
  React.useEffect(() => {
    if (stateLocalization.data.uf) {
      setValueStateUf(stateLocalization.data.uf);
    } else {
      setValueStateUf('');
    }
  }, [stateLocalization.data.uf, setValueStateUf]);

  return (
    <div className="container">
      <h2 className="font-1-xl subtitleSectionUser">Altere seus dados</h2>
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
        {stateUser.error && <C.Error className="error">{stateUser.error}</C.Error>}
        <C.ElementColumn>
          <ButtonSubmit>Alterar</ButtonSubmit>
        </C.ElementColumn>
      </C.Form>
      {stateUser.loading && <Loader />}
    </div>
  );
};

export default Edit;
