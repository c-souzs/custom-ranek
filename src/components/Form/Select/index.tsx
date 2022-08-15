/* eslint-disable react/jsx-props-no-spreading */
import React, { ChangeEvent, SelectHTMLAttributes } from 'react';

import * as C from './styles';

interface ISelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  // eslint-disable-next-line react/require-default-props
  label?: string
  value: string
  setValue: React.Dispatch<React.SetStateAction<string>>
  options: string[]
}

const Select = ({
  label, value, setValue, options, ...rest
}: ISelectProps): JSX.Element => (
  <C.Label>
    {label}
    <C.Select
      as="select"
      value={value}
      onChange={(e: ChangeEvent<HTMLSelectElement>) => setValue(e.target.value)}
      {...rest}
    >
      {options.length
        && options.map((option) => {
          const optionValue = option.toLocaleLowerCase().replace(/\s/g, '-');
          return (
            <option value={optionValue} key={optionValue}>
              {option}
            </option>
          );
        })}
    </C.Select>
  </C.Label>
);

export default Select;
