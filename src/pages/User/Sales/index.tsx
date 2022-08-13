import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { ThemeContext } from 'styled-components';
import Loader from '../../../components/Loader';
import ProductSampleCardSkeleton from '../../../components/ProductSampleCard/Skeleton';
import ProductUserCard from '../../../components/ProductUserCard';
import Subtitle from '../../../components/Subtitle';
import useControlRedux from '../../../hooks/useControlRedux';
import useInformationPage from '../../../hooks/useInformationPage';
import { useInterval } from '../../../hooks/useInterval';
import { userTransactionSales } from '../../../store/userReducer';

import * as C from './styles';

const Sales = (): JSX.Element => {
  // Conjunto referente ao redux.
  const { useAppDispatch, useAppSelector } = useControlRedux();
  const dispatch = useAppDispatch();
  const { loading, error, data } = useAppSelector((state) => state.user);
  const [showItems, setShowItems] = React.useState(false);
  const { colors } = React.useContext(ThemeContext);

  const dataInformationPage = {
    title: 'Vendas',
    description: 'Todos seus produtos anunciados e já vendidos se encontram aqui.',
  };
  useInformationPage(dataInformationPage);

  // Mostra os produtos após 7 segundos para a imagem estar carregada
  useInterval(() => setShowItems(true), 7000);

  // Busca as transações referente as vendas do usuário.
  React.useEffect(() => {
    dispatch(userTransactionSales());
  }, [dispatch]);

  // Exibe um alerta de erro.
  React.useEffect(() => {
    if (error) toast.error('Verique a mensagem de erro.');
  }, [error]);

  return (
    <C.Sales className="container">
      <Subtitle text="Produtos comprados" />
      {!showItems && (
        <C.List>
          <ProductSampleCardSkeleton amount={4} width="100%" height="250px" />
        </C.List>
      )}
      <C.CustomList show={showItems}>
        {data.transaction.sales.length ? (
          data.transaction.sales.map((sale) => (
            <ProductUserCard
              type="sale"
              image={sale.produto.fotos[0].src}
              name={sale.produto.nome}
              price={sale.produto.preco}
              description={sale.produto.descricao}
              email={sale.comprador_id}
              dataDelivery={sale.endereco}
            />
          ))
        ) : (
          <p className="error">Nenhum dado encontrado.</p>
        )}
      </C.CustomList>
      <Toaster
        position="top-right"
        // eslint-disable-next-line max-len
        toastOptions={{ error: { duration: 2000 }, style: { backgroundColor: colors.primary, color: colors.text } }}
      />
      {error && <p className="error">{error}</p>}
      {loading && <Loader />}
    </C.Sales>
  );
};

export default Sales;
