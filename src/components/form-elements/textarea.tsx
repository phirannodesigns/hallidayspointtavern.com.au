import * as React from 'react';
import { DeepMap, FieldError } from 'react-hook-form';

type TextareaProps = {
  name: string;
  label: string;
  rows?: number;
  errors: DeepMap<Record<string, unknown>, FieldError>;
};

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ name, label, rows = 3, errors }, ref) => {
    const hasErrors = Boolean(errors?.[name]);
    return (
      <div>
        <label htmlFor={name} className="block">
          <span className="text-sm font-semibold tracking-wider uppercase">
            {label}
          </span>
          <textarea
            id={name}
            name={name}
            rows={rows}
            ref={ref}
            className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-blue-dark pb-0"
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
);

export { Textarea };
