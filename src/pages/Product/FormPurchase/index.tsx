/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Input from '../../../components/Form/Input';
import useInput from '../../../hooks/useInput';

import * as C from './styles';

const FormPruchase = (): JSX.Element => {
  const { setValue: setValueName, ...name } = useInput('');
  const { setValue: setValueEmail, ...email } = useInput('email');
  const { setValue: setValueCep, ...cep } = useInput('');
  const { setValue: setValueRoad, ...road } = useInput('');
  const { setValue: setValueNumber, ...number } = useInput('');
  const { setValue: setValueDistrict, ...district } = useInput('');
  const { setValue: setValueCity, ...city } = useInput('');
  const { setValue: setValueState, ...state } = useInput('');

  return (
    <C.Purchase>
      <C.TitlePurchase className="font-1-xl">Informações de Envio</C.TitlePurchase>
      <C.FormPurchase>
        <Input label="Nome" name="name" {...name} />
        <Input label="Email" name="email" type="email" {...email} />
        <Input label="Cep" name="cep" {...cep} />
        <Input label="Rua" name="road" {...road} />
        <Input label="Número" name="number" {...number} />
        <Input label="Bairro" name="district" {...district} />
        <Input label="Cidade" name="city" {...city} />
        <Input label="Estado" name="state" {...state} />
        <C.Buttons>
          <C.Button type="submit">Finalizar compra</C.Button>
          <C.Button>Cancelar compra</C.Button>
        </C.Buttons>
      </C.FormPurchase>
    </C.Purchase>
  );
};

export default FormPruchase;
