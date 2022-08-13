import React from 'react';

import * as C from './styles';

const informationStore = [
  {
    category: 'Vendas',
    amount: 1500,
  },
  {
    category: 'Dias',
    amount: 6890,
  },
  {
    category: 'Trabalhadores',
    amount: 965,
  },
  {
    category: 'Caminhões',
    amount: 80,
  },
];

const DataStore = (): JSX.Element => (
  <C.DataStore>
    <C.Shadow />
    <C.Container>
      {informationStore.map((information) => (
        <C.NumberData key={information.amount}>
          <C.TextNumber>{information.amount}</C.TextNumber>
          <C.TextInformation>{information.category}</C.TextInformation>
        </C.NumberData>
      ))}
    </C.Container>
  </C.DataStore>
);

export default DataStore;
