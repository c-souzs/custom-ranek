import React, { ChangeEvent, InputHTMLAttributes } from 'react';

import * as C from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  // eslint-disable-next-line react/require-default-props
  label?: string
  error: string | null
  value: string
  validateAt: () => boolean
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  onClick: () => void
}

const Input = ({
  label, error, validateAt, onChange, onClick, value, ...rest
}: InputProps): JSX.Element => (
  <C.Label>
    {label}
    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
    <C.Input value={value} onChange={onChange} onClick={onClick} onBlur={validateAt} {...rest} />
    {error ? <C.Error className="error">{error}</C.Error> : undefined}
  </C.Label>
);

export default Input;
