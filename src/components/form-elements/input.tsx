import * as React from 'react';
import { DeepMap, FieldError } from 'react-hook-form';

type InputProps = {
  name: string;
  label: string;
  type?: 'text' | 'email' | 'number' | 'password' | 'search' | 'tel';
  errors: DeepMap<Record<string, unknown>, FieldError>;
};

function Input(
  { name, label, type = 'text', errors }: InputProps,
  rest: JSX.IntrinsicAttributes &
    React.ClassAttributes<HTMLInputElement> &
    React.InputHTMLAttributes<HTMLInputElement>
): React.ReactElement {
  const hasErrors = Boolean(errors?.[name]);
  return (
    <div>
      <label htmlFor={name} className="block">
        <span className="text-sm font-semibold tracking-wider uppercase">
          {label}
        </span>
        <input
          id={name}
          name={name}
          type={type}
          aria-invalid={hasErrors}
          className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-blue-dark pb-0"
          {...rest}
        />
      </label>
      {hasErrors ? (
        <div
          role="alert"
          className="mt-1 text-xs font-semibold tracking-widest text-red-800 uppercase"
        >
          {label} is a required field
        </div>
      ) : null}
    </div>
  );
}

export { Input };
