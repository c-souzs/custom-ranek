import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { ThemeContext } from 'styled-components';
import Loader from '../../../components/Loader';
import ProductSampleCardSkeleton from '../../../components/ProductSampleCard/Skeleton';
import ProductUserCard from '../../../components/ProductUserCard';
import Subtitle from '../../../components/Subtitle';
import useControlRedux from '../../../hooks/useControlRedux';
import { useInterval } from '../../../hooks/useInterval';
import { userTransactionPurchases } from '../../../store/userReducer';

import * as C from './styles';

const Purchases = (): JSX.Element => {
  // Conjunto referente aoa redux.
  const { useAppDispatch, useAppSelector } = useControlRedux();
  const dispatch = useAppDispatch();
  const { loading, error, data } = useAppSelector((state) => state.user);
  const [showItems, setShowItems] = React.useState(false);
  const { colors } = React.useContext(ThemeContext);

  // Mostra os produtos após 7 segundos para a imagem estar carregada
  useInterval(() => setShowItems(true), 7000);

  // Busca as transações de compras do usuário.
  React.useEffect(() => {
    dispatch(userTransactionPurchases());
  }, [dispatch]);

  // Exibe um alerta de erro.
  React.useEffect(() => {
    if (error) toast.error('Verique a mensagem de erro.');
  }, [error]);

  return (
    <C.Purchases className="container">
      <Subtitle text="Produtos vendidos" />
      {!showItems && (
        <C.List>
          <ProductSampleCardSkeleton amount={9} width="100%" height="250px" />
        </C.List>
      )}
      <C.CustomList show={showItems}>
        {data.transaction.purchases.length ? (
          data.transaction.purchases.map(({ produto, vendedor_id: vendedorId }) => (
            <ProductUserCard
              type="purchase"
              image={produto.fotos[0].src}
              name={produto.nome}
              price={produto.preco}
              description={produto.descricao}
              email={vendedorId}
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
      {error && <p className="error">{error}</p>}
      {loading && <Loader />}
    </C.Purchases>
  );
};

export default Purchases;
