import React from 'react';

const useMedia = (maxMedia: string): boolean => {
  const [match, setMacth] = React.useState(false);

  React.useEffect(() => {
    const verificarMacth = (): void => {
      const { matches } = window.matchMedia(maxMedia);
      setMacth(matches);
    };
    verificarMacth();
    window.addEventListener('resize', verificarMacth);

    return () => {
      window.removeEventListener('resize', verificarMacth);
    };
  }, [maxMedia]);

  return match;
};

export default useMedia;
