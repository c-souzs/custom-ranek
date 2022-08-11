import React from 'react';
import Loader from '../../../components/Loader';
import ProductData from '../../../components/ProductData';
import useControlRedux from '../../../hooks/useControlRedux';
import { userTransactionSales } from '../../../store/userReducer';

import * as C from './styles';

const Sales = (): JSX.Element => {
  // Conjunto referente ao redux.
  const { useAppDispatch, useAppSelector } = useControlRedux();
  const dispatch = useAppDispatch();
  const { loading, error, data } = useAppSelector((state) => state.user);

  // Busca as transações referente as vendas do usuário.
  React.useEffect(() => {
    dispatch(userTransactionSales());
  }, [dispatch]);

  return (
    <div className="container">
      <h2 className="font-1-xl subtitleSectionUser">Vendas</h2>
      <C.List>
        {data.transaction.sales.length
          && data.transaction.sales.map((sale) => (
            <ProductData
              type="sale"
              image={sale.produto.fotos[0].src}
              name={sale.produto.nome}
              price={sale.produto.preco}
              description={sale.produto.descricao}
              email={sale.comprador_id}
              dataDelivery={sale.endereco}
            />
          ))}
      </C.List>
      {error && <C.Error className="error">{error}</C.Error>}
      {loading && <Loader />}
    </div>
  );
};

export default Sales;
