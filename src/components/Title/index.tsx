import React, { ReactNode } from 'react';

import * as C from './styles';

export interface TitleProps {
  children: ReactNode
  // eslint-disable-next-line react/require-default-props
  mB?: string
  // eslint-disable-next-line react/require-default-props
  colorFixed?: boolean
}

const Title = ({ children, mB, colorFixed }: TitleProps): JSX.Element => (
  <C.Title className="font-1-xxl" mB={mB} colorFixed={colorFixed}>
    {children}
    <C.Decoration>.</C.Decoration>
  </C.Title>
);

export default Title;
