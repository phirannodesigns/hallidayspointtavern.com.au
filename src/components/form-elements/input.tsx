import * as React from 'react';
import { DeepMap, FieldError } from 'react-hook-form';

import { ErrorMessage } from './error-message';

interface InputProps {
  errors: DeepMap<Record<string, unknown>, FieldError>;
  label: string;
  name: string;
  type?: 'email' | 'number' | 'password' | 'search' | 'tel';
  rest?: unknown[];
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ errors, label, name, type = 'text', ...rest }, ref) => {
    const hasErrors = Boolean(errors?.[name]);
    return (
      <div>
        <label htmlFor={name} className="block">
          <span className="sr-only">{label}</span>
          <input
            id={name}
            name={name}
            type={type}
            placeholder={label}
            ref={ref}
            aria-invalid={hasErrors}
            className="w-full border-transparent focus:ring-blue-500 focus:ring-opacity-50 focus:border-blue-500 focus:border-opacity-50"
            {...rest}
          />
        </label>
        <ErrorMessage errors={errors} name={name} label={label} />
      </div>
    );
  }
);

export { Input };
