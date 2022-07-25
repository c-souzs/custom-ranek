/* eslint-disable react/jsx-props-no-spreading */
import React, { FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import Input from '../../../components/Form/Input';
import useInput from '../../../hooks/useInput';
import { AppDispatch } from '../../../store/configure';
import { purchasesUser } from '../../../store/userReducer';

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

  const dispatch = useDispatch<AppDispatch>();

  const handlePurchaseProduct = (e: FormEvent): void => {
    e.preventDefault();

    const dataPurchase = {
      comprador_id: 'hcaiosouza@gmail.com',
      vendedor_id: 'caiohsouza2002@gmail.com',
      produto: {
        id: 'notebook-5',
        fotos: null,
        nome: 'Notebook',
        preco: '1111',
        descricao: 'Usado',
        vendido: 'false',
        usuario_id: 'caiohsouza2002@gmail.com',
      },
      endereco: {
        id: 'hcaiosouza@gmail.com',
        nome: 'Coca coa',
        email: 'hcaiosouza@gmail.com',
        cep: '35582000',
        numero: '56',
        rua: 'Rua Ali Perto',
        bairro: 'Centro',
        cidade: 'Pains',
        estado: 'MG',
      },
    };

    dispatch(purchasesUser(dataPurchase));
  };

  return (
    <C.Purchase>
      <C.TitlePurchase className="font-1-xl">Informações de Envio</C.TitlePurchase>
      <C.FormPurchase onSubmit={handlePurchaseProduct}>
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
