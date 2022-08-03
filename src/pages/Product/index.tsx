import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Loader from '../../components/Loader';
import useControlRedux from '../../hooks/useControlRedux';
import { productPage } from '../../store/productReducer';
import FormPruchase from './FormPurchase';

import * as C from './styles';

const Product = (): JSX.Element => {
  const { slug } = useParams();
  const [showFormPurchase, setShowFormPurchase] = React.useState(false);
  const navigate = useNavigate();

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

  return (
    <C.Product>
      <C.Container className="container">
        {loading && <Loader />}
        {types.page && (
          <>
            <section>
              <C.ContainerImages>
                {types.page.fotos.map(({ src, titulo }) => (
                  <C.ImageSlide key={src} src={src} alt={titulo} />
                ))}
              </C.ContainerImages>
              <C.NavImages>
                {types.page.fotos.map(({ src }) => (
                  // eslint-disable-next-line max-len
                  <C.CircleNav key={src} />
                ))}
              </C.NavImages>
            </section>
            <C.Information>
              <C.NameProduct>{types.page.nome}</C.NameProduct>
              <C.PriceProduct>
                R$
                {types.page.preco}
              </C.PriceProduct>
              <C.DescriptionProduct>{types.page.descricao}</C.DescriptionProduct>
              <C.Button onClick={checkUserToShowFormPurchase}>Comprar</C.Button>
            </C.Information>
            {/* eslint-disable-next-line max-len */}
            <FormPruchase showFormPurchase={showFormPurchase} setShowFormPurchase={setShowFormPurchase} />
          </>
        )}
        {error && <C.Error className="error">Sua menssagem de erro</C.Error>}
      </C.Container>
    </C.Product>
  );
};

export default Product;
