import * as React from 'react';
import { DeepMap, FieldError } from 'react-hook-form';

type SelectProps = {
  name: string;
  label: string;
  type?: string;
  errors: DeepMap<Record<string, unknown>, FieldError>;
  options: Array<{
    value: string;
    label: string;
  }>;
};

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ name, label, options, errors }, ref) => {
    const hasErrors = Boolean(errors?.[name]);
    return (
      <div>
        <label htmlFor={name} className="block">
          <span className="text-sm font-semibold tracking-wider uppercase">
            {label}
          </span>
          <select
            name={name}
            ref={ref}
            className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-blue-dark pb-0"
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
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
);

export { Select };
