import { MagnifyingGlass, X } from 'phosphor-react';
import React, { FormEvent } from 'react';
import { Link } from 'react-router-dom';
import Input from '../../components/Form/Input';
import Loader from '../../components/Loader';
import TitlePackage from '../../components/TitlePackage';
import useControlRedux from '../../hooks/useControlRedux';
import useInput from '../../hooks/useInput';
import { clearSearch, productList, productSearch } from '../../store/productReducer';

import * as C from './styles';

const Products = (): JSX.Element => {
  const search = useInput('');

  const { useAppDispatch, useAppSelector } = useControlRedux();
  const dispatch = useAppDispatch();
  const { loading, error, types } = useAppSelector((state) => state.product);

  React.useEffect(() => {
    const getProducts = async (): Promise<void> => {
      await dispatch(productList(''));
    };

    getProducts();
  }, [dispatch]);

  const searchProduct = (e: FormEvent): void => {
    e.preventDefault();
    dispatch(productSearch(search.value));
  };

  const handleClearSearch = (): void => {
    search.setValue('');
    dispatch(clearSearch());
  };

  return (
    <C.Products>
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
      <C.List>
        {types.list.length
          && types.search.length === 0
          && types.list.map(({
            id, fotos, nome, preco, descricao,
          }) => (
            <C.LiProduct key={id}>
              <Link to={`/product/${id}`}>
                <C.ImageProduct src={fotos[0].src} alt={fotos[0].titulo} />
                <C.NameProduct className="font-2-xl">{nome}</C.NameProduct>
                <C.PriceProduct className="font-2-m">
                  R$
                  {preco}
                </C.PriceProduct>
                <C.DescriptionProduct className="font-2-s">{descricao}</C.DescriptionProduct>
              </Link>
            </C.LiProduct>
          ))}
        {types.search.length
          && types.search.map(({
            id, fotos, nome, preco, descricao,
          }) => (
            <C.LiProduct key={id}>
              <Link to={`/product/${id}`}>
                <C.ImageProduct src={fotos[0].src} alt={fotos[0].titulo} />
                <C.NameProduct className="font-2-xl">{nome}</C.NameProduct>
                <C.PriceProduct className="font-2-m">
                  R$
                  {preco}
                </C.PriceProduct>
                <C.DescriptionProduct className="font-2-s">{descricao}</C.DescriptionProduct>
              </Link>
            </C.LiProduct>
          ))}
      </C.List>
      {error && <C.Error className="error">esse é o seu erro</C.Error>}
      {loading && <Loader />}
    </C.Products>
  );
};

export default Products;
