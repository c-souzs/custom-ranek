import React from 'react';
import toast from 'react-hot-toast';
import useControlRedux from './useControlRedux';

const useToastError = (): void => {
  // Conjunto referente ao redux.
  const { useAppSelector } = useControlRedux();
  const { error: errorProduct } = useAppSelector((state) => state.product);
  const { error: errorUser } = useAppSelector((state) => state.user);

  React.useEffect(() => {
    if (errorProduct || errorUser) toast.error('Verique a mensagem de error.');
  }, [errorProduct, errorUser]);
};

export default useToastError;
