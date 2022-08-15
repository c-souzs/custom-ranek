import React from 'react';

import { userTransactionPurchases } from '../../../store/userReducer';
import useControlRedux from '../../../hooks/useControlRedux';
import useInformationPage from '../../../hooks/useInformationPage';
import { useInterval } from '../../../hooks/useInterval';

import Loader from '../../../components/Loader';
import ProductSampleCardSkeleton from '../../../components/ProductSampleCard/Skeleton';
import ProductUserCard from '../../../components/ProductUserCard';
import Subtitle from '../../../components/Subtitle';
import ToastError from '../../../components/ToastError';

import * as C from './styles';

const Purchases = (): JSX.Element => {
  const { useAppDispatch, useAppSelector } = useControlRedux();
  const dispatch = useAppDispatch();
  const { loading, error, data } = useAppSelector((state) => state.user);
  const [showItems, setShowItems] = React.useState(false);

  const dataInformationPage = {
    title: 'Suas compras',
    description: 'Veja todos seus produtos na Ranek, cuidado a lista pode ser grande.',
  };
  useInformationPage(dataInformationPage);

  useInterval(() => setShowItems(true), 7000);

  React.useEffect(() => {
    dispatch(userTransactionPurchases());
  }, [dispatch]);

  return (
    <C.Purchases className="container">
      <Subtitle text="Produtos comprados" />
      {!showItems && (
        <C.List>
          <ProductSampleCardSkeleton amount={9} width="100%" height="250px" />
        </C.List>
      )}
      <C.CustomList show={showItems}>
        {data.transaction.purchases.length ? (
          data.transaction.purchases.map(({ produto, vendedor_id: vendedorId }) => (
            <ProductUserCard
              key={produto.id}
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
      <ToastError />
      {error && <p className="error">{error}</p>}
      {loading && <Loader />}
    </C.Purchases>
  );
};

export default Purchases;
