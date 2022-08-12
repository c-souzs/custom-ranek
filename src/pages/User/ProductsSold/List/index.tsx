import React from 'react';
import Loader from '../../../../components/Loader';
import ProductSampleCardSkeleton from '../../../../components/ProductSampleCard/Skeleton';
import ProductUserCard from '../../../../components/ProductUserCard';
import useControlRedux from '../../../../hooks/useControlRedux';
import { useInterval } from '../../../../hooks/useInterval';
import { productUser } from '../../../../store/productReducer';

import * as C from './styles';

const List = (): JSX.Element => {
  const { useAppDispatch, useAppSelector } = useControlRedux();
  const dispatch = useAppDispatch();
  const { loading, error, types } = useAppSelector((state) => state.product);
  const { data } = useAppSelector((state) => state.user);
  const [showItems, setShowItems] = React.useState(false);

  // Mostra os produtos após 7 segundos para a imagem estar carregada
  useInterval(() => setShowItems(true), 7000);

  // Busca os produtos do usuário
  React.useEffect(() => {
    if (data.information) {
      dispatch(productUser(data.information.id));
    }
  }, [data.information, dispatch]);

  return (
    <div className="container">
      <h2 className="font-1-xl subtitleSectionUser">Produtos anunciados</h2>
      {error && <C.Error className="error">{error}</C.Error>}
      {!showItems && (
        <C.List>
          <ProductSampleCardSkeleton amount={4} width="100%" height="250px" />
        </C.List>
      )}
      <C.CustomList show={showItems}>
        {types.user.length ? (
          types.user.map((product) => (
            <ProductUserCard
              key={product.id}
              id={product.id}
              type="product"
              image={product.fotos[0].src}
              name={product.nome}
              price={product.preco}
              description={product.descricao}
            />
          ))
        ) : (
          <p className="error">Nenhum dado foi encontrado.</p>
        )}
      </C.CustomList>
      {loading && <Loader />}
    </div>
  );
};

export default List;
