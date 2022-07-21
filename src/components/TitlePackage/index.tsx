import React from 'react';
import Title from '../Title';

import * as C from './styles';

interface TitleBgProps {
  subtitle: string
  title: string
}

const TitlePackage = ({ subtitle, title }: TitleBgProps): JSX.Element => (
  <C.BgTitle>
    <div className="container">
      <C.Subtitle className="font-2-l-b">{subtitle}</C.Subtitle>
      <Title colorFixed>{title}</Title>
    </div>
  </C.BgTitle>
);

export default TitlePackage;
