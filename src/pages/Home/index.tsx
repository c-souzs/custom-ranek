import React from 'react';
import Faq from './Faq';
import Introduction from './Introduction';
import ListProducts from './ListProducts';
import Partners from './Partners';
import Technology from './Technology';
import Testimony from './Testimony';

const Home = (): JSX.Element => (
  <main>
    <Introduction />
    <ListProducts />
    <Technology />
    <Partners />
    <Testimony />
    <Faq />
  </main>
);

export default Home;
