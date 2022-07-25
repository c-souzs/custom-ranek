/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import React, { FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ButtonSubmit from '../../../components/Form/Button';
import Input from '../../../components/Form/Input';
import Select from '../../../components/Form/Select';
import Loader from '../../../components/Loader';
import useInput from '../../../hooks/useInput';
import { AppDispatch, RootState } from '../../../store/configure';
import { updateUser } from '../../../store/userReducer';

import * as C from './styles';

const Edit = (): JSX.Element => {
  const { setValue: setValueName, ...name } = useInput('');
  const { setValue: setValueEmail, ...email } = useInput('email');
  const { setValue: setValuePassword, ...password } = useInput(null);
  const { setValue: setValueCep, ...cep } = useInput('');
  const { setValue: setValueRoad, ...road } = useInput('');
  const { setValue: setValueNumber, ...number } = useInput('');
  const { setValue: setValueDistrict, ...district } = useInput('');
  const [city, setCity] = React.useState('Pains');
  const [citys, setCitys] = React.useState<string[]>(['Pains']);
  const { setValue: setValueStateUf, ...stateUf } = useInput('');

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

  const handleUpdateUser = async (e: FormEvent): Promise<void> => {
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

      await dispatch(updateUser(dataUser));
    }
  };

  React.useEffect(() => {
    if (stateUser.userData.information) {
      const {
        nome,
        email: emailUser,
        cep: cepUser,
        rua,
        numero,
        bairro,
        cidade,
        estado,
      } = stateUser.userData.information;
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
    stateUser.userData,
  ]);

  return (
    <C.EditData>
      <C.Container className="container">
        <h2 className="font-1-xl subtitleSectionUser">Altere seus dados</h2>
        <C.Form onSubmit={handleUpdateUser}>
          <Input label="Nome" name="name" type="text" {...name} />
          <Input label="Email" name="email" type="email" required {...email} />
          <Input label="Senha" name="password" type="password" {...password} placeholder="Insira sua nova senha" />
          <Input label="Cep" name="cep" type="text" {...cep} />
          <Input label="Rua" name="road" type="text" {...road} />
          <Input label="Número" name="number" type="text" {...number} />
          <Input label="Bairro" name="district" type="text" {...district} />
          <Select label="Cidade" value={city} setValue={setCity} options={citys} />
          <Input label="Estado" name="state" type="text" {...stateUf} />
          {stateUser.error && <C.Error className="error">{stateUser.error}</C.Error>}
          <C.ElementColumn>
            <ButtonSubmit>Alterar</ButtonSubmit>
          </C.ElementColumn>
        </C.Form>
        {stateUser.loading && <Loader />}
      </C.Container>
    </C.EditData>
  );
};

export default Edit;
