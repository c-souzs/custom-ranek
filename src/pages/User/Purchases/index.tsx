import React from 'react';
import Loader from '../../../components/Loader';
import ProductData from '../../../components/ProductData';
import useControlRedux from '../../../hooks/useControlRedux';
import { userTransactionPurchases } from '../../../store/userReducer';

import * as C from './styles';

const Purchases = (): JSX.Element => {
  // Conjunto referente aoa redux.
  const { useAppDispatch, useAppSelector } = useControlRedux();
  const dispatch = useAppDispatch();
  const { loading, error, data } = useAppSelector((state) => state.user);

  // Busca as transações de compras do usuário.
  React.useEffect(() => {
    dispatch(userTransactionPurchases());
  }, [dispatch]);

  return (
    <div className="container">
      <h2 className="font-1-xl subtitleSectionUser">Produtos comprados</h2>
      <C.List>
        {data.transaction.purchases.length
          && data.transaction.purchases.map(({ produto, vendedor_id: vendedorId }) => (
            <ProductData
              type="purchase"
              image={produto.fotos[0].src}
              name={produto.nome}
              price={produto.preco}
              description={produto.descricao}
              email={vendedorId}
            />
          ))}
      </C.List>
      {error && <C.Error className="error">{error}</C.Error>}
      {loading && <Loader />}
    </div>
  );
};

export default Purchases;
