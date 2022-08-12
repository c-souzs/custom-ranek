import React from 'react';
import Loader from '../../../components/Loader';
import ProductSampleCardSkeleton from '../../../components/ProductSampleCard/Skeleton';
import ProductUserCard from '../../../components/ProductUserCard';
import useControlRedux from '../../../hooks/useControlRedux';
import { useInterval } from '../../../hooks/useInterval';
import { userTransactionSales } from '../../../store/userReducer';

import * as C from './styles';

const Sales = (): JSX.Element => {
  // Conjunto referente ao redux.
  const { useAppDispatch, useAppSelector } = useControlRedux();
  const dispatch = useAppDispatch();
  const { loading, error, data } = useAppSelector((state) => state.user);
  const [showItems, setShowItems] = React.useState(false);

  // Mostra os produtos após 7 segundos para a imagem estar carregada
  useInterval(() => setShowItems(true), 7000);

  // Busca as transações referente as vendas do usuário.
  React.useEffect(() => {
    dispatch(userTransactionSales());
  }, [dispatch]);

  return (
    <div className="container">
      <h2 className="font-1-xl subtitleSectionUser">Vendas</h2>
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
      {error && <C.Error className="error">{error}</C.Error>}
      {loading && <Loader />}
    </div>
  );
};

export default Sales;
