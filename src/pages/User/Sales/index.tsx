import React from 'react';
import Loader from '../../../components/Loader';
import ProductSampleCardSkeleton from '../../../components/ProductSampleCard/Skeleton';
import ProductUserCard from '../../../components/ProductUserCard';
import Subtitle from '../../../components/Subtitle';
import ToastError from '../../../components/ToastError';

import { userTransactionSales } from '../../../store/userReducer';
import useControlRedux from '../../../hooks/useControlRedux';
import useInformationPage from '../../../hooks/useInformationPage';
import { useInterval } from '../../../hooks/useInterval';

import * as C from './styles';

const Sales = (): JSX.Element => {
  const { useAppDispatch, useAppSelector } = useControlRedux();
  const dispatch = useAppDispatch();
  const { loading, error, data } = useAppSelector((state) => state.user);
  const [showItems, setShowItems] = React.useState(false);

  const dataInformationPage = {
    title: 'Vendas',
    description: 'Todos seus produtos anunciados e já vendidos se encontram aqui.',
  };
  useInformationPage(dataInformationPage);

  useInterval(() => setShowItems(true), 7000);

  React.useEffect(() => {
    dispatch(userTransactionSales());
  }, [dispatch]);

  return (
    <C.Sales className="container">
      <Subtitle text="Produtos vendidos" />
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
      <ToastError />
      {error && <p className="error">{error}</p>}
      {loading && <Loader />}
    </C.Sales>
  );
};

export default Sales;
