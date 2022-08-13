import { MagnifyingGlass, X } from 'phosphor-react';
import React, { FormEvent } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { ThemeContext } from 'styled-components';
import Input from '../../components/Form/Input';
import Loader from '../../components/Loader';
import ProductSampleCard from '../../components/ProductSampleCard';
import ProductSampleCardSkeleton from '../../components/ProductSampleCard/Skeleton';
import TitlePackage from '../../components/TitlePackage';
import useControlRedux from '../../hooks/useControlRedux';
import useInformationPage from '../../hooks/useInformationPage';
import useInput from '../../hooks/useInput';
import { useInterval } from '../../hooks/useInterval';
import { clearSearch, productSearch } from '../../store/productReducer';

import * as C from './styles';

const Products = (): JSX.Element => {
  const search = useInput('');
  const [showItems, setShowItems] = React.useState(false);
  const { colors } = React.useContext(ThemeContext);

  // Conjunto referente ao redux.
  const { useAppDispatch, useAppSelector } = useControlRedux();
  const dispatch = useAppDispatch();
  const { loading, error, types } = useAppSelector((state) => state.product);

  const dataInformationPage = {
    title: 'Produtos',
    description: 'Encontre diversos produtos e faça uma pesquisa produto em nosso estoque.',
  };
  useInformationPage(dataInformationPage);

  // Mostra os produtos após 7 segundos para a imagem estar carregada
  useInterval(() => setShowItems(true), 7000);

  // Busca os produto ao entrar na página.
  React.useEffect(() => {
    const getProducts = async (): Promise<void> => {
      await dispatch(productSearch(''));
    };

    getProducts();
  }, [dispatch]);

  // Dispara a ação para consultar os dados da pesquisa.
  const searchProduct = (e: FormEvent): void => {
    e.preventDefault();
    dispatch(productSearch(search.value));
  };

  // Limpa os dados da pesquisa, como se entrasse na página novamente.
  const handleClearSearch = (): void => {
    search.setValue('');
    dispatch(clearSearch());
  };

  // Exibe um alerta de erro.
  React.useEffect(() => {
    if (error) toast.error('Verique a mensagem de erro.');
  }, [error]);

  return (
    <C.Products className="paddingDistanceHeader">
      <TitlePackage subtitle="Explore nossos produtos" title="nossos produtos" />
      <C.Search>
        <div className="container">
          <C.FormSearch onSubmit={searchProduct}>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            <Input placeholder="Ex: Smartphone" name="search" style={{ marginTop: '0' }} {...search} />
            <C.ButtonsSearch>
              <C.ButtonSearch type="submit">
                <MagnifyingGlass size={24} color="#8877ff" />
              </C.ButtonSearch>
              <C.ButtonSearch onClick={handleClearSearch}>
                <X size={24} color="#8877ff" />
              </C.ButtonSearch>
            </C.ButtonsSearch>
          </C.FormSearch>
        </div>
      </C.Search>
      {!showItems && (
        <C.List>
          <ProductSampleCardSkeleton amount={9} width="100%" height="350px" />
        </C.List>
      )}
      <C.CustomList show={showItems}>
        {/* eslint-disable-next-line max-len */}
        {types.search.length ? (
          types.search.map((product) => <ProductSampleCard key={product.id} typeSample="list" product={product} />)
        ) : (
          <p className="error">Nenhum dado encontrado.</p>
        )}
      </C.CustomList>
      <Toaster
        position="top-right"
        // eslint-disable-next-line max-len
        toastOptions={{ error: { duration: 2000 }, style: { backgroundColor: colors.primary, color: colors.text } }}
      />
      {error && <p className="error">esse é o seu erro</p>}
      {loading && <Loader />}
    </C.Products>
  );
};

export default Products;
