import React from 'react';
import Faq from './Faq';
import Introduction from './Introduction';
import ListProducts from './ListProducts';
import Partners from './Partners';
import Technology from './Technology';
import DataStore from './DataStore';
import useControlRedux from '../../hooks/useControlRedux';
import { userDataAutomatic } from '../../store/userReducer';
import Loader from '../../components/Loader';

const Home = (): JSX.Element => {
  // Conjunto referente ao redux.
  const { useAppDispatch, useAppSelector } = useControlRedux();
  const { loading } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  // Faz o login do usuário caso tenha algum token no local storage.
  React.useEffect(() => {
    const hasToken = localStorage.getItem('token');

    if (hasToken) dispatch(userDataAutomatic());
  }, [dispatch]);

  return (
    <main>
      {loading && <Loader />}
      <Introduction />
      <ListProducts />
      <Technology />
      <Partners />
      <Faq />
      <DataStore />
    </main>
  );
};

export default Home;
