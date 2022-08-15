import React, { FormEvent } from 'react';
import { MagnifyingGlass, X } from 'phosphor-react';

import { clearSearch, productSearch } from '../../store/productReducer';
import useControlRedux from '../../hooks/useControlRedux';
import useInformationPage from '../../hooks/useInformationPage';
import useInput from '../../hooks/useInput';
import { useInterval } from '../../hooks/useInterval';

import Input from '../../components/Form/Input';
import Loader from '../../components/Loader';
import ProductSampleCard from '../../components/ProductSampleCard';
import ProductSampleCardSkeleton from '../../components/ProductSampleCard/Skeleton';
import TitlePackage from '../../components/TitlePackage';
import ToastError from '../../components/ToastError';

import * as C from './styles';

const Products = (): JSX.Element => {
  const search = useInput('');
  const [showItems, setShowItems] = React.useState(false);

  const { useAppDispatch, useAppSelector } = useControlRedux();
  const dispatch = useAppDispatch();
  const { loading, error, types } = useAppSelector((state) => state.product);

  const dataInformationPage = {
    title: 'Produtos',
    description: 'Encontre diversos produtos e faça uma pesquisa produto em nosso estoque.',
  };
  useInformationPage(dataInformationPage);

  useInterval(() => setShowItems(true), 7000);

  const searchProduct = (e: FormEvent): void => {
    e.preventDefault();

    dispatch(productSearch(search.value));
  };

  const handleClearSearch = (): void => {
    search.setValue('');
    dispatch(clearSearch());
  };

  React.useEffect(() => {
    const getProducts = async (): Promise<void> => {
      await dispatch(productSearch(''));
    };

    getProducts();
  }, [dispatch]);

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
      <ToastError />
      {error && <p className="error">esse é o seu erro</p>}
      {loading && <Loader />}
    </C.Products>
  );
};

export default Products;
