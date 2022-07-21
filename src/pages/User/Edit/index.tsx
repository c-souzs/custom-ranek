/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import ButtonSubmit from '../../../components/Form/Button';
import Input from '../../../components/Form/Input';
import Select from '../../../components/Form/Select';
import useInput from '../../../hooks/useInput';

import * as C from './styles';

const Edit = (): JSX.Element => {
  const { setValue: setValueName, ...name } = useInput('');
  const { setValue: setValueEmail, ...email } = useInput('email');
  const { setValue: setValuePassword, ...password } = useInput('');
  const { setValue: setValueCep, ...cep } = useInput('');
  const { setValue: setValueRoad, ...road } = useInput('');
  const { setValue: setValueNumber, ...number } = useInput('');
  const { setValue: setValueDistrict, ...district } = useInput('');
  const [city, setCity] = React.useState('Selecione uma cidade');
  const [citys, setCitys] = React.useState<string[]>(['Selecione uma cidade']);
  const { setValue: setValueState, ...state } = useInput('');

  return (
    <C.EditData>
      <div className="container">
        <h2 className="font-1-xl subtitleSectionUser">Altere seus dados</h2>
        <C.Form>
          <Input label="Nome" name="name" type="text" {...name} />
          <Input label="Email" name="email" type="email" required {...email} />
          <Input label="Senha" name="password" type="password" {...password} />
          <Input label="Cep" name="cep" type="text" {...cep} />
          <Input label="Rua" name="road" type="text" {...road} />
          <Input label="Número" name="number" type="text" {...number} />
          <Input label="Bairro" name="district" type="text" {...district} />
          <Select label="Cidade" value={city} setValue={setCity} options={citys} disabled />
          <Input label="Estado" name="state" type="text" {...state} disabled />
          <C.ElementColumn>
            <ButtonSubmit>Alterar</ButtonSubmit>
          </C.ElementColumn>
        </C.Form>
      </div>
    </C.EditData>
  );
};

export default Edit;
