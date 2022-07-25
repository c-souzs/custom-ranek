import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductData from '../../../components/ProductData';
import { AppDispatch, RootState } from '../../../store/configure';
import { transactionPurchases } from '../../../store/userReducer';

import * as C from './styles';

const Purchases = (): JSX.Element => {
  const dispatch = useDispatch<AppDispatch>();
  const stateUser = useSelector((state: RootState) => state.user);

  React.useEffect(() => {
    dispatch(transactionPurchases());
    console.log(stateUser);
  }, [dispatch]);

  return (
    <C.Purchases>
      <div className="container">
        <h2 className="font-1-xl subtitleSectionUser">Produtos comprados</h2>
        <C.List>
          <ProductData
            type="purchase"
            image="https://ranekapi.origamid.dev/wp-content/uploads/2019/03/notebook-2.jpg"
            name="Compiuter"
            price="122,00"
            description="Usado por 2 anos"
            email="caiohsouza2002@gmail.com"
          />
          <ProductData
            type="purchase"
            image="https://ranekapi.origamid.dev/wp-content/uploads/2019/03/notebook-2.jpg"
            name="Compiuter"
            price="122,00"
            description="Usado por 2 anos"
            email="caiohsouza2002@gmail.com"
          />
          <ProductData
            type="purchase"
            image="https://ranekapi.origamid.dev/wp-content/uploads/2019/03/notebook-2.jpg"
            name="Compiuter"
            price="122,00"
            description="Usado por 2 anos"
            email="caiohsouza2002@gmail.com"
          />
          <ProductData
            type="purchase"
            image="https://ranekapi.origamid.dev/wp-content/uploads/2019/03/notebook-2.jpg"
            name="Compiuter"
            price="122,00"
            description="Usado por 2 anos"
            email="caiohsouza2002@gmail.com"
          />
        </C.List>
      </div>
    </C.Purchases>
  );
};

export default Purchases;
