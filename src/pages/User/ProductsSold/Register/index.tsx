/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import ButtonSubmit from '../../../../components/Form/Button';
import Input from '../../../../components/Form/Input';
import useInput from '../../../../hooks/useInput';

import * as C from './styles';

const Register = (): JSX.Element => {
  const { setValue: setValueName, ...name } = useInput('');
  const { setValue: setValuePrice, ...price } = useInput('');
  const { setValue: setValuePhotos, ...photos } = useInput(null);
  const { setValue: setValueDescription, ...description } = useInput('');

  return (
    <section>
      <div className="container">
        <h2 className="font-1-xl subtitleSectionUser">Venda seus produtos</h2>
        <C.FormAddProduct>
          <Input label="Nome" name="nome" type="text" {...name} />
          <Input label="Preco (R$)" name="price" type="text" {...price} />
          <Input label="Fotos" name="photos" type="file" multiple {...photos} />
          <Input label="Descrição" name="description" type="text" {...description} />
          <ButtonSubmit>Vender</ButtonSubmit>
        </C.FormAddProduct>
      </div>
    </section>
  );
};

export default Register;
