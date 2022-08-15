/* eslint-disable react/button-has-type */
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { productPage } from '../../store/productReducer';
import useControlRedux from '../../hooks/useControlRedux';
import useInformationPage from '../../hooks/useInformationPage';
import { useInterval } from '../../hooks/useInterval';

import FormPruchase from './FormPurchase';
import ProductSkeleton from './Skeleton';
import Slide from './Slide';
import Loader from '../../components/Loader';
import TitlePackage from '../../components/TitlePackage';
import ToastError from '../../components/ToastError';

import * as C from './styles';

const Product = (): JSX.Element => {
  const { slug } = useParams();
  const [showFormPurchase, setShowFormPurchase] = React.useState(false);
  const navigate = useNavigate();
  const [showItems, setShowItems] = React.useState(false);

  useInterval(() => setShowItems(true), 7000);

  const { useAppDispatch, useAppSelector } = useControlRedux();
  const dispatch = useAppDispatch();
  const { loading, error, types } = useAppSelector((state) => state.product);
  const { data } = useAppSelector((state) => state.user);

  const dataInformationPage = {
    title: types.page?.nome || 'Carregando produto...',
    description: 'Sua loja de produtos eletrônicos usados e originais com a maior e melhor experiência no mercado',
  };
  useInformationPage(dataInformationPage);

  const checkUserToShowFormPurchase = (): void => {
    if (data.information) {
      setShowFormPurchase(true);
    } else navigate('/account/login');
  };

  React.useEffect(() => {
    const getProduct = async (): Promise<void> => {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const fixSlug = slug!;
      await dispatch(productPage(fixSlug));
    };

    getProduct();
  }, [dispatch, slug]);

  return (
    <>
      {!showItems && (
        <C.ContainerSkeleton className="paddingDistanceHeader">
          <ProductSkeleton height="350px" width="100%" />
        </C.ContainerSkeleton>
      )}
      <C.Product className="paddingDistanceHeader" show={showItems}>
        {!showItems && <ProductSkeleton height="350px" width="100%" />}
        {types.page && (
          <>
            <TitlePackage title={types.page.nome} subtitle="Frete grátis em compras acima de R$ 500,00." />
            <C.Container className="container">
              <C.Information>
                <Slide photos={types.page.fotos} />
                <C.DataProduct>
                  <C.NameProduct>{types.page.nome}</C.NameProduct>
                  <C.PriceProduct>{`R$ ${types.page.preco}`}</C.PriceProduct>
                  <C.DescriptionProduct>{types.page.descricao}</C.DescriptionProduct>
                  <button className="basicStyleButtonOrLink" onClick={checkUserToShowFormPurchase}>
                    Comprar
                  </button>
                </C.DataProduct>
              </C.Information>
              {/* eslint-disable-next-line max-len */}
              <FormPruchase showFormPurchase={showFormPurchase} setShowFormPurchase={setShowFormPurchase} />
            </C.Container>
          </>
        )}
        <ToastError />
        {loading && <Loader />}
        {error && <p className="error">Sua menssagem de erro</p>}
      </C.Product>
    </>
  );
};

export default Product;
