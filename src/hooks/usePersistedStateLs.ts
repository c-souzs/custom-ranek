import React, { Dispatch, SetStateAction } from 'react';

type TResponse<U> = [U, Dispatch<SetStateAction<U>>]

const usePersistedStateLs = <T>(key: string, initialState: T): TResponse<T> => {
  const [state, setState] = React.useState(() => {
    const hasValue = localStorage.getItem(key);

    if (hasValue) {
      return JSON.parse(hasValue);
    }
    return initialState;
  });

  React.useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};

export default usePersistedStateLs;
