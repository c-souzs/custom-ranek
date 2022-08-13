/* eslint-disable react/button-has-type */
import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';
import { ThemeContext } from 'styled-components';
import Loader from '../../components/Loader';
import TitlePackage from '../../components/TitlePackage';
import useControlRedux from '../../hooks/useControlRedux';
import { useInterval } from '../../hooks/useInterval';
import { productPage } from '../../store/productReducer';
import FormPruchase from './FormPurchase';
import ProductSkeleton from './Skeleton';
import Slide from './Slide';

import * as C from './styles';

const Product = (): JSX.Element => {
  const { slug } = useParams();
  const [showFormPurchase, setShowFormPurchase] = React.useState(false);
  const navigate = useNavigate();
  const [showItems, setShowItems] = React.useState(false);
  const { colors } = React.useContext(ThemeContext);

  // Mostra os produtos após 7 segundos para a imagem estar carregada
  useInterval(() => setShowItems(true), 7000);

  // Conjunto referente ao redux.
  const { useAppDispatch, useAppSelector } = useControlRedux();
  const dispatch = useAppDispatch();
  const { loading, error, types } = useAppSelector((state) => state.product);
  const { data } = useAppSelector((state) => state.user);

  // Verifica se tem um usuário logado para efetuar a compra.
  const checkUserToShowFormPurchase = (): void => {
    if (data.information) {
      setShowFormPurchase(true);
    } else navigate('/account/login');
  };

  // Busca os dados referente ao produto.
  React.useEffect(() => {
    const getProduct = async (): Promise<void> => {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const fixSlug = slug!;
      await dispatch(productPage(fixSlug));
    };

    getProduct();
  }, [dispatch, slug]);

  // Exibe um alerta de erro.
  React.useEffect(() => {
    if (error) toast.error('Verique a mensagem de erro.');
  }, [error]);

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
        <Toaster
          position="top-right"
          // eslint-disable-next-line max-len
          toastOptions={{ error: { duration: 2000 }, style: { backgroundColor: colors.primary, color: colors.text } }}
        />
        {loading && <Loader />}
        {error && <p className="error">Sua menssagem de erro</p>}
      </C.Product>
    </>
  );
};

export default Product;
