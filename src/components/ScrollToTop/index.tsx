import React from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = (): JSX.Element => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <></>;
};

export default ScrollToTop;
