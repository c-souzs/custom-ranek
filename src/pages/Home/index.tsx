import React from 'react';
import Faq from './Faq';
import Introduction from './Introduction';
import ListProducts from './ListProducts';
import Partners from './Partners';
import Technology from './Technology';
import DataStore from './DataStore';

const Home = (): JSX.Element => (
  <main className="paddingDistanceHeader">
    <Introduction />
    <ListProducts />
    <Technology />
    <Partners />
    <Faq />
    <DataStore />
  </main>
);

export default Home;
