/* eslint-disable react/jsx-props-no-spreading */
import { log } from 'console';
import React, { FormEvent, useRef } from 'react';
import ButtonSubmit from '../../../../components/Form/Button';
import Input from '../../../../components/Form/Input';
import Loader from '../../../../components/Loader';
import useControlRedux from '../../../../hooks/useControlRedux';
import useInput from '../../../../hooks/useInput';
import { productsAnnounced } from '../../../../store/productReducer';

import * as C from './styles';

interface PhotoData {
  name: string
  file: File
}

const Register = (): JSX.Element => {
  const { setValue: setValueName, ...name } = useInput('');
  const { setValue: setValuePrice, ...price } = useInput('');
  const { setValue: setValueDescription, ...description } = useInput('');
  const inputPhotos = useRef<HTMLInputElement | null>(null);
  const [dataPhotos, setDataPhotos] = React.useState<PhotoData[]>([]);
  const [orientationPhotos, setOrientationPhotos] = React.useState('Preencha a foto de capa. 1/3');

  const { useAppDispatch, useAppSelector } = useControlRedux();
  const dispatch = useAppDispatch();
  const { loading, error, types: dataProductR } = useAppSelector((state) => state.product);

  const validateInputs = (): boolean => {
    const inputsText = name.validateAt() && price.validateAt() && description.validateAt();
    const photosAmount = dataPhotos.length === 3;

    const validate = !!(inputsText && photosAmount);

    return validate;
  };

  const handleSaleProduct = (e: FormEvent): void => {
    e.preventDefault();

    if (validateInputs()) {
      const photoCover = dataPhotos[0];
      const photoFront = dataPhotos[1];
      const photoBack = dataPhotos[2];

      const dataProduct = {
        nome: name.value,
        preco: price.value,
        descricao: description.value,
        photoBack,
        photoFront,
        photoCover,
      };

      dispatch(productsAnnounced(dataProduct));
    }
  };

  React.useEffect(() => {
    if (dataPhotos.length === 1) {
      setOrientationPhotos('Preencha a foto frontal do produto. 2/3');
    } else if (dataPhotos.length === 2) {
      setOrientationPhotos('Preencha a foto traseira do produto. 3/3');
    } else if (dataPhotos.length === 3) {
      setOrientationPhotos('Todas as fotos do produto já foram preenchidas.');
    }
  }, [dataPhotos]);

  const onChangeFiles = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const element = e.target;
    const filesPhoto = element.files!;

    const photoActual = filesPhoto[0];

    setDataPhotos([
      ...dataPhotos,
      {
        name: photoActual.name,
        file: photoActual,
      },
    ]);

    element.value = '';
  };

  return (
    <section>
      <div className="container">
        <h2 className="font-1-xl subtitleSectionUser">Venda seus produtos</h2>
        <C.FormAddProduct onSubmit={handleSaleProduct}>
          <Input label="Nome" name="nome" type="text" {...name} />
          <Input label="Preco (R$)" name="price" type="text" {...price} />
          <div>
            <C.LabelFiles htmlFor="photos">Fotos</C.LabelFiles>
            <C.InputFiles name="photos" id="photos" type="file" ref={inputPhotos} onChange={onChangeFiles} />
            {/* eslint-disable-next-line max-len */}
            <C.OrientationPhotos>{orientationPhotos}</C.OrientationPhotos>
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
