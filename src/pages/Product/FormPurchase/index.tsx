/* eslint-disable react/jsx-props-no-spreading */
import React, { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../../components/Form/Input';
import useControlRedux from '../../../hooks/useControlRedux';
import useInput from '../../../hooks/useInput';
import { userTransaction } from '../../../store/userReducer';

import * as C from './styles';

interface FormPurchaseProps {
  showFormPurchase: boolean
  setShowFormPurchase: React.Dispatch<React.SetStateAction<boolean>>
}

// eslint-disable-next-line max-len
const FormPruchase = ({ showFormPurchase, setShowFormPurchase }: FormPurchaseProps): JSX.Element => {
  const { setValue: setValueName, ...name } = useInput('');
  const { setValue: setValueEmail, ...email } = useInput('email');
  const { setValue: setValueCep, ...cep } = useInput('');
  const { setValue: setValueRoad, ...road } = useInput('');
  const { setValue: setValueNumber, ...number } = useInput('');
  const { setValue: setValueDistrict, ...district } = useInput('');
  const { setValue: setValueCity, ...city } = useInput('');
  const { setValue: setValueState, ...stateUf } = useInput('');

  const navigate = useNavigate();

  // Conjunto referente ao redux.
  const { useAppDispatch, useAppSelector } = useControlRedux();
  const dispatch = useAppDispatch();
  const { types } = useAppSelector((state) => state.product);
  const { data } = useAppSelector((state) => state.user);

  // Valida os dados e efetua a compra do produto do cliente.
  const accomplishTransaction = async (e: FormEvent): Promise<void> => {
    e.preventDefault();

    if (data.information && types.page) {
      const dataPurchase = {
        comprador_id: data.information.id,
        vendedor_id: types.page.usuario_id,
        produto: types.page,
        endereco: data.information,
      };

      try {
        await dispatch(userTransaction(dataPurchase));
        navigate('/user/purchases');
      } catch (error) {
        navigate('/');
      }
    }
  };

  // Preenche de forma automática os dados do formulário com as informações do ciente.
  React.useEffect(() => {
    if (data.information) {
      const {
        nome,
        email: emailInformation,
        cep: cepInformation,
        numero,
        rua,
        bairro,
        cidade,
        estado,
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      } = data.information!;

      setValueName(nome);
      setValueEmail(emailInformation);
      setValueCep(cepInformation);
      setValueRoad(rua);
      setValueNumber(numero);
      setValueDistrict(bairro);
      setValueCity(cidade);
      setValueState(estado);
    }
  }, [
    data.information,
    setValueCep,
    setValueCity,
    setValueDistrict,
    setValueEmail,
    setValueName,
    setValueNumber,
    setValueRoad,
    setValueState,
  ]);

  return (
    <C.Purchase show={showFormPurchase}>
      <C.TitlePurchase className="font-1-xl">Informações de Envio</C.TitlePurchase>
      <C.FormPurchase onSubmit={accomplishTransaction}>
        <Input label="Nome" name="name" {...name} />
        <Input label="Email" name="email" type="email" {...email} />
        <Input label="Cep" name="cep" {...cep} />
        <Input label="Rua" name="road" {...road} />
        <Input label="Número" name="number" {...number} />
        <Input label="Bairro" name="district" {...district} />
        <Input label="Cidade" name="city" {...city} />
        <Input label="Estado" name="state" {...stateUf} />
        <C.Buttons>
          <C.Button type="submit">Finalizar compra</C.Button>
          <C.Button onClick={() => setShowFormPurchase(false)}>Cancelar compra</C.Button>
        </C.Buttons>
      </C.FormPurchase>
    </C.Purchase>
  );
};

export default FormPruchase;
