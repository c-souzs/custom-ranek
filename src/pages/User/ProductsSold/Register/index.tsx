/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import React, { FormEvent } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from 'styled-components';
import Input from '../../../../components/Form/Input';
import Loader from '../../../../components/Loader';
import Subtitle from '../../../../components/Subtitle';
import useControlRedux from '../../../../hooks/useControlRedux';
import useInput from '../../../../hooks/useInput';
import { productAnnounce, productUser } from '../../../../store/productReducer';

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
  const [orientationPhotos, setOrientationPhotos] = React.useState<null | string>(null);
  const navigate = useNavigate();
  const { colors } = React.useContext(ThemeContext);

  // Conjunto referente ao redux.
  const { useAppDispatch, useAppSelector } = useControlRedux();
  const dispatch = useAppDispatch();
  const { loading, error } = useAppSelector((state) => state.product);
  const { data } = useAppSelector((state) => state.user);

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
      } catch (errorAnnounce) {
        // Exibir um erro aqui!!!
        navigate('/pageNotFound');
      } finally {
        setValueName('');
        setValuePrice('');
        setValueDescription('');
        setDataPhotos([]);
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
      toast.success('Imagem adiciona com sucesso.');
    }
  };

  // Limpa o array de fotos adicionadas pelo usuário
  const clearPhotos = (): void => {
    setDataPhotos([]);
    toast.success('Todas as fotos foram removidas. Adicione fotos novas.');
  };

  // Verifica a quantidade de fotos para dar ao usuário o feedback do processo de cadastro.
  React.useEffect(() => {
    const l = dataPhotos.length;

    if (!l) setOrientationPhotos('Adicione uma foto frontal do produto. 1/3.');
    else if (l === 1) setOrientationPhotos('Adicione uma foto traseira do produto. 2/3.');
    else setOrientationPhotos('Adicione uma foto ampla do produto. 3/3.');
  }, [dataPhotos]);

  return (
    <C.Register className="container">
      <Subtitle text="Anuncie seus produtos" />
      <C.FormAddProduct onSubmit={handleSaleProduct}>
        <Input label="Nome" name="nome" type="text" {...name} />
        <Input label="Preco (R$)" name="price" type="text" {...price} />
        <div>
          <Input
            label="Fotos"
            name="photos"
            type="file"
            {...photos}
            onChange={onChangeFiles}
            disabled={dataPhotos.length >= 3}
          />
          <C.ContainerActionsFiles>
            {/* eslint-disable-next-line max-len */}
            {dataPhotos.length > 0 && <C.ButtonClearPhotos onClick={clearPhotos}>Limpar</C.ButtonClearPhotos>}
            <C.Orientation className="font-2-xs" amountPhotos={dataPhotos.length}>
              {orientationPhotos}
            </C.Orientation>
          </C.ContainerActionsFiles>
        </div>
        <Input label="Descrição" name="description" type="text" {...description} />
        <button className="basicStyleButtonOrLink" type="submit">
          Vender
        </button>
      </C.FormAddProduct>
      <Toaster
        position="top-right"
        // eslint-disable-next-line max-len
        toastOptions={{ success: { duration: 2000 }, style: { backgroundColor: colors.primary, color: colors.text } }}
      />
      {error && <p className="error">{error}</p>}
      {loading && <Loader />}
    </C.Register>
  );
};

export default Register;
