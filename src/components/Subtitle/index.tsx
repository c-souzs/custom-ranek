import React from 'react';

import * as C from './styles';

interface ISubtitleProps {
  text: string
}

const Subtitle = ({ text }: ISubtitleProps): JSX.Element => (
  <C.Subtitle className="font-1-xl">
    {text}
    <C.Decoration>.</C.Decoration>
  </C.Subtitle>
);

export default Subtitle;
