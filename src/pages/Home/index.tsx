import React from 'react';
import Faq from './Faq';
import Introduction from './Introduction';
import ListProducts from './ListProducts';
import Partners from './Partners';
import Technology from './Technology';
import DataStore from './DataStore';
import useInformationPage from '../../hooks/useInformationPage';

const Home = (): JSX.Element => {
  const dataInformationPage = {
    title: 'A melhor loja de produtos eletrônicos',
    description: 'Sua loja de produtos eletrônicos usados e originais com a maior e melhor experiência no mercado',
  };
  useInformationPage(dataInformationPage);

  return (
    <main className="paddingDistanceHeader">
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
