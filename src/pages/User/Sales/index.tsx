import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductData from '../../../components/ProductData';
import { AppDispatch, RootState } from '../../../store/configure';
import { transactionSales } from '../../../store/userReducer';

import * as C from './styles';

const Sales = (): JSX.Element => {
  const dispatch = useDispatch<AppDispatch>();
  const stateUser = useSelector((state: RootState) => state.user);

  React.useEffect(() => {
    dispatch(transactionSales());
    console.log(stateUser);
  }, [dispatch]);

  const data = {
    cep: '35582000',
    road: 'Ali perto',
    number: '55',
    district: 'Centro',
    city: 'Pains',
    state: 'Mg',
  };

  return (
    <C.Sales>
      <div className="container">
        <h2 className="font-1-xl subtitleSectionUser">Vendas</h2>
        <C.List>
          <ProductData
            type="sale"
            image="https://ranekapi.origamid.dev/wp-content/uploads/2019/03/notebook-2.jpg"
            name="Compiuter"
            price="122,00"
            description="Usado por 2 anos"
            email="caiohsouza2002@gmail.com"
            dataDelivery={data}
          />
          <ProductData
            type="sale"
            image="https://ranekapi.origamid.dev/wp-content/uploads/2019/03/notebook-2.jpg"
            name="Compiuter"
            price="122,00"
            description="Usado por 2 anos"
            email="caiohsouza2002@gmail.com"
            dataDelivery={data}
          />
          <ProductData
            type="sale"
            image="https://ranekapi.origamid.dev/wp-content/uploads/2019/03/notebook-2.jpg"
            name="Compiuter"
            price="122,00"
            description="Usado por 2 anos"
            email="caiohsouza2002@gmail.com"
            dataDelivery={data}
          />
          <ProductData
            type="sale"
            image="https://ranekapi.origamid.dev/wp-content/uploads/2019/03/notebook-2.jpg"
            name="Compiuter"
            price="122,00"
            description="Usado por 2 anos"
            email="caiohsouza2002@gmail.com"
            dataDelivery={data}
          />
        </C.List>
      </div>
    </C.Sales>
  );
};

export default Sales;
