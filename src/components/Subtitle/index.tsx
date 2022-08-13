import React from 'react';

import * as C from './styles';

interface SubtitleProps {
  text: string
}

const Subtitle = ({ text }: SubtitleProps): JSX.Element => (
  <C.Subtitle className="font-1-xl">
    {text}
    <C.Decoration>.</C.Decoration>
  </C.Subtitle>
);

export default Subtitle;
