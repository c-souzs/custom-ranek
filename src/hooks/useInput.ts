import React, { ChangeEvent } from 'react';

const dataValidate = {
  email: {
    regex:
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
    messageError: 'Email inválido.',
  },
  cep: {
    regex: /^([\d]{2})\.*([\d]{3})-*([\d]{3})/,
    messageError: 'Cep inválido',
  },
};

type ValidationTypes = keyof typeof dataValidate | '' | null

interface UseInputReturn {
  value: string
  setValue: React.Dispatch<React.SetStateAction<string>>
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  onClick: () => void
  validateAt: () => boolean
  error: string | null
}

const useInput = (type: ValidationTypes): UseInputReturn => {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState<string | null>(null);

  const validate = (v: string): boolean => {
    if (type === null) return true;
    if (!v.length) {
      setError('Campo vazio.');
      return false;
    }
    if (type !== '' && dataValidate[type] && !dataValidate[type].regex.test(v)) {
      setError(dataValidate[type].messageError);
      return false;
    }
    setError(null);
    return true;
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const elementValue = e.target.value;

    if (error) validate(elementValue);
    setValue(elementValue);
  };

  const onClick = (): void => setError(null);

  return {
    value,
    setValue,
    onChange,
    onClick,
    validateAt: () => validate(value),
    error,
  };
};

export default useInput;
