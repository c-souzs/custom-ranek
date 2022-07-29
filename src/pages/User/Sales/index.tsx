import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../../components/Loader';
import ProductData from '../../../components/ProductData';
import useControlRedux from '../../../hooks/useControlRedux';
import { AppDispatch, RootState } from '../../../store/configure';
import { transactionSales } from '../../../store/userReducer';

import * as C from './styles';

const Sales = (): JSX.Element => {
  const { useAppDispatch, useAppSelector } = useControlRedux();
  const dispatch = useAppDispatch();
  const { loading, error, data } = useAppSelector((state) => state.user);

  React.useEffect(() => {
    dispatch(transactionSales());
  }, [dispatch]);

  return (
    <C.Sales>
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
      </div>
      {loading && <Loader />}
    </C.Sales>
  );
};

export default Sales;
