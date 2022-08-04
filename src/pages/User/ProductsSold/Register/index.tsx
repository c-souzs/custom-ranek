/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import React, { FormEvent, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonSubmit from '../../../../components/Form/Button';
import Input from '../../../../components/Form/Input';
import Loader from '../../../../components/Loader';
import useControlRedux from '../../../../hooks/useControlRedux';
import useInput from '../../../../hooks/useInput';
import { productAnnounce } from '../../../../store/productReducer';

import * as C from './styles';

interface PhotoData {
  name: string
  file: File
}

const Register = (): JSX.Element => {
  const { setValue: setValueName, ...name } = useInput('');
  const { setValue: setValuePrice, ...price } = useInput('');
  const { setValue: setValueDescription, ...description } = useInput('');
  const { setValue: setValuePhotos, ...photos } = useInput(null);
  const [dataPhotos, setDataPhotos] = React.useState<PhotoData[]>([]);
  const navigate = useNavigate();

  // Conjunto referente ao redux.
  const { useAppDispatch, useAppSelector } = useControlRedux();
  const dispatch = useAppDispatch();
  const { loading, error } = useAppSelector((state) => state.product);

  // Valida se os inputs estão preenchidos. Inclusive se o usuário preencheu as 3 fotos.
  const validateInputs = (): boolean => {
    const inputsText = name.validateAt() && price.validateAt() && description.validateAt();
    const photosAmount = dataPhotos.length === 3;

    const validate = !!(inputsText && photosAmount);

    return validate;
  };

  // Cadastra o produto.
  const handleSaleProduct = async (e: FormEvent): Promise<void> => {
    e.preventDefault();

    if (validateInputs()) {
      const dataProduct = {
        name: name.value,
        price: price.value,
        description: description.value,
        photos: dataPhotos,
      };

      try {
        await dispatch(productAnnounce(dataProduct));
        navigate('/user/products-sold');
      } catch (errorAnnounce) {
        // Exibir um erro aqui!!!
        navigate('/');
      }
    }
  };

  // Armazena os dados da foto e limpa o campo para o usuário selecionar uma nova foto
  const onChangeFiles = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const element = e.target;
    const filesPhoto = element.files;

    if (filesPhoto) {
      const captureData: PhotoData = {
        name: filesPhoto[0].name,
        file: filesPhoto[0],
      };
      setDataPhotos([...dataPhotos, captureData]);

      // Mostrar uma modal avisando que a foto foi enviada com sucesso
      element.value = '';
    }
  };

  return (
    <section>
      <div className="container">
        <h2 className="font-1-xl subtitleSectionUser">Venda seus produtos</h2>
        <C.FormAddProduct onSubmit={handleSaleProduct}>
          <Input label="Nome" name="nome" type="text" {...name} />
          <Input label="Preco (R$)" name="price" type="text" {...price} />
          <div>
            {/* <C.LabelFiles htmlFor="photos">Fotos</C.LabelFiles>
            <C.InputFiles name="photos" id="photos" type="file" onChange={onChangeFiles} /> */}
            <Input label="Fotos" name="photos" type="file" {...photos} onChange={onChangeFiles} />
          </div>
          <Input label="Descrição" name="description" type="text" {...description} />
          <ButtonSubmit>Vender</ButtonSubmit>
        </C.FormAddProduct>
      </div>
      {error && <p className="error">Esse é seu erro</p>}
      {loading && <Loader />}
    </section>
  );
};

export default Register;
