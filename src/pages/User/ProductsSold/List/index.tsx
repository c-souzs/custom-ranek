import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { ThemeContext } from 'styled-components';
import Loader from '../../../../components/Loader';
import ProductSampleCardSkeleton from '../../../../components/ProductSampleCard/Skeleton';
import ProductUserCard from '../../../../components/ProductUserCard';
import Subtitle from '../../../../components/Subtitle';
import useControlRedux from '../../../../hooks/useControlRedux';
import { useInterval } from '../../../../hooks/useInterval';
import { productUser } from '../../../../store/productReducer';

import * as C from './styles';

const List = (): JSX.Element => {
  const { useAppDispatch, useAppSelector } = useControlRedux();
  const dispatch = useAppDispatch();
  const { loading, error, types } = useAppSelector((state) => state.product);
  const { data } = useAppSelector((state) => state.user);
  const [showItems, setShowItems] = React.useState(false);
  const { colors } = React.useContext(ThemeContext);

  // Mostra os produtos após 7 segundos para a imagem estar carregada
  useInterval(() => setShowItems(true), 7000);

  // Busca os produtos do usuário
  React.useEffect(() => {
    if (data.information) {
      dispatch(productUser(data.information.id));
    }
  }, [data.information, dispatch]);

  // Exibe um alerta de erro.
  React.useEffect(() => {
    if (error) toast.error('Verique a mensagem de erro.');
  }, [error]);

  return (
    <C.ListProperties className="container">
      <Subtitle text="Produtos anunciados" />
      {error && <p className="error">{error}</p>}
      {!showItems && (
        <C.List>
          <ProductSampleCardSkeleton amount={4} width="100%" height="250px" />
        </C.List>
      )}
      <C.CustomList show={showItems}>
        {types.user.length ? (
          types.user.map((product) => (
            <ProductUserCard
              key={product.id}
              id={product.id}
              type="product"
              image={product.fotos[0].src}
              name={product.nome}
              price={product.preco}
              description={product.descricao}
            />
          ))
        ) : (
          <p className="error">Nenhum dado foi encontrado.</p>
        )}
      </C.CustomList>
      <Toaster
        position="top-right"
        // eslint-disable-next-line max-len
        toastOptions={{ error: { duration: 2000 }, style: { backgroundColor: colors.primary, color: colors.text } }}
      />
      {loading && <Loader />}
    </C.ListProperties>
  );
};

export default List;
