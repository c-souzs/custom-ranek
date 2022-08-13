/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import React, { FormEvent } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from 'styled-components';
import Input from '../../../components/Form/Input';
import Select from '../../../components/Form/Select';
import Loader from '../../../components/Loader';
import TitlePackage from '../../../components/TitlePackage';
import useInput from '../../../hooks/useInput';
import { AppDispatch, RootState } from '../../../store/configure';
import { localizationAddress, reset } from '../../../store/localizationReducer';
import { userRegister } from '../../../store/userReducer';

import * as C from './styles';

const Create = (): JSX.Element => {
  const { setValue: setValueName, ...name } = useInput('');
  const { setValue: setValueEmail, ...email } = useInput('email');
  const { setValue: setValuePassword, ...password } = useInput('');
  const { setValue: setValueCep, ...cep } = useInput('cep');
  const { setValue: setValueRoad, ...road } = useInput('');
  const { setValue: setValueNumber, ...number } = useInput('');
  const { setValue: setValueDistrict, ...district } = useInput('');
  const [city, setCity] = React.useState('');
  const [citys, setCitys] = React.useState<string[]>(['Selecione uma cidade']);
  const { setValue: setValueStateUf, ...stateUf } = useInput('');
  const navigate = useNavigate();
  const { colors } = React.useContext(ThemeContext);

  // Conjunto referente ao redux.
  const dispatch = useDispatch<AppDispatch>();
  const stateUser = useSelector((state: RootState) => state.user);
  const stateLocalization = useSelector((state: RootState) => state.localization);

  // Verifica se os campos foram preenchidos corretamente.
  const validateInputs = (): boolean => name.validateAt()
    && password.validateAt()
    && cep.validateAt()
    && road.validateAt()
    && number.validateAt()
    && district.validateAt()
    && city !== 'Selecione uma cidade'
    && stateUf.validateAt();

  // Realiza o cadastro do usuário
  const accomplishRegister = async (e: FormEvent): Promise<void> => {
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

      await dispatch(userRegister(dataUser));
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

  // Preenche o cep formatado.
  React.useEffect(() => {
    if (stateLocalization.data.cepFormat) {
      setValueCep(stateLocalization.data.cepFormat);
    }
  }, [stateLocalization.data.cepFormat, setValueCep]);

  // Preenche o campo do estado baseado no cep, de forma automatica.
  React.useEffect(() => {
    if (stateLocalization.data.uf) {
      setValueStateUf(stateLocalization.data.uf);
    } else {
      setValueStateUf('');
    }
  }, [stateLocalization.data.uf, setValueStateUf]);

  // Lista as cidades após a consulta de dados do cep.
  React.useEffect(() => {
    if (stateLocalization.data.citys.length) {
      setCitys(stateLocalization.data.citys);
    } else {
      setCitys(['Selecione uma cidade']);
    }
  }, [stateLocalization.data.citys]);

  // Redireciona o usuário após o login.
  React.useEffect(() => {
    if (stateUser.data.information) navigate('/user/products-sold');
  }, [stateUser.data.information, navigate]);

  // Exibe um alerta de erro.
  React.useEffect(() => {
    if (stateUser.error) toast.error('Verique a mensagem de erro.');
  }, [stateUser.error]);

  return (
    <>
      <TitlePackage subtitle="compre produtos" title="crie sua conta" />
      <C.Container>
        <div className="container">
          <C.Form onSubmit={accomplishRegister}>
            <Input label="Nome" name="name" type="text" {...name} />
            <Input label="Email" name="email" type="email" required {...email} />
            <Input label="Senha" name="password" type="password" {...password} />
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
            {stateUser.error && <p className="error">{stateUser.error}</p>}
            <C.PositionColumn>
              <button className="basicStyleButtonOrLink" type="submit">
                Criar
              </button>
            </C.PositionColumn>
          </C.Form>
        </div>
        <Toaster
          position="top-right"
          // eslint-disable-next-line max-len
          toastOptions={{ error: { duration: 2000 }, style: { backgroundColor: colors.primary, color: colors.text } }}
        />
        {stateUser.loading && <Loader />}
      </C.Container>
    </>
  );
};

export default Create;
