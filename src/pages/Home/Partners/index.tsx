import React from 'react';

import useMedia from '../../../hooks/useMedia';

import Title from '../../../components/Title';

import wildbeast from '../../../assets/partnersLogo/wildbeast.svg';
import surfbot from '../../../assets/partnersLogo/surfbot.svg';
import ranek from '../../../assets/partnersLogo/ranek.svg';
import leScone from '../../../assets/partnersLogo/lescone.svg';
import handel from '../../../assets/partnersLogo/handel.svg';
import caravan from '../../../assets/partnersLogo/caravan.svg';
import dogs from '../../../assets/partnersLogo/dogs.svg';
import flexBlog from '../../../assets/partnersLogo/flexblog.svg';

import * as C from './styles';

interface IPartnerImage {
  id: number
  src: string
}

const partnersImages: IPartnerImage[] = [
  {
    id: 1,
    src: wildbeast,
  },
  {
    id: 2,
    src: surfbot,
  },
  {
    id: 3,
    src: ranek,
  },
  {
    id: 4,
    src: leScone,
  },
  {
    id: 5,
    src: handel,
  },
  {
    id: 6,
    src: caravan,
  },
  {
    id: 7,
    src: dogs,
  },
  {
    id: 8,
    src: flexBlog,
  },
];

const Partners = (): JSX.Element => {
  const changeMargin = useMedia('(max-width: 800px)');

  return (
    <C.Partners>
      <div className="container">
        <Title mB={changeMargin ? '1.25rem' : '3.75rem'}>nossos parceiros</Title>
      </div>
      <C.ListPartners>
        {partnersImages.map((partner) => (
          <C.Partner key={partner.id}>
            <C.ImagePartner src={partner.src} alt="Logo company partner" />
          </C.Partner>
        ))}
      </C.ListPartners>
    </C.Partners>
  );
};

export default Partners;
