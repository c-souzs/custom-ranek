import React from 'react';
import { ArrowLeft, ArrowRight } from 'phosphor-react';

import * as C from './styles';

interface SlideProps {
  photos: { src: string; titulo: string }[]
}

const Slide = ({ photos }: SlideProps): JSX.Element => {
  const [slideActive, setSlideActive] = React.useState(0);
  const [translateX, setTranslateX] = React.useState(0);
  const imageSlideRef = React.useRef<null | HTMLImageElement>(null);
  const lengthPhotos = photos ? photos.length - 1 : -1;

  // Volta um slide.
  const changePreviousSlide = (): void => {
    if (slideActive === 0 && lengthPhotos !== -1) setSlideActive(lengthPhotos);
    else setSlideActive(slideActive - 1);
  };

  // Avança um slide.
  const changeNextSlide = (): void => {
    if (slideActive >= lengthPhotos) setSlideActive(0);
    else setSlideActive(slideActive + 1);
  };

  // Atualiza o valor da margim para exibir o slide
  React.useEffect(() => {
    const width = imageSlideRef.current?.offsetWidth;

    if (width) {
      const translate = width * slideActive;
      setTranslateX(translate);
    }
  }, [slideActive]);

  return (
    <C.Slide>
      <C.ContainerImages translateX={translateX}>
        {photos.map(({ src, titulo }) => (
          <C.ImageSlide key={src} src={src} alt={titulo} ref={imageSlideRef} />
        ))}
      </C.ContainerImages>
      <C.NavImages>
        <C.ButtonChangeSlide onClick={changePreviousSlide}>
          <ArrowLeft size={28} color="#8877ff" />
        </C.ButtonChangeSlide>
        <C.ButtonChangeSlide onClick={changeNextSlide}>
          <ArrowRight size={28} color="#8877ff" />
        </C.ButtonChangeSlide>
      </C.NavImages>
    </C.Slide>
  );
};

export default Slide;
