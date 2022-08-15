import React from 'react';
import { Toaster } from 'react-hot-toast';
import { ThemeContext } from 'styled-components';

const ToastError = (): JSX.Element => {
  const { colors } = React.useContext(ThemeContext);

  return (
    <Toaster
      position="top-right"
      // eslint-disable-next-line max-len
      toastOptions={{ error: { duration: 2000 }, style: { backgroundColor: colors.primary, color: colors.text } }}
    />
  );
};

export default ToastError;
