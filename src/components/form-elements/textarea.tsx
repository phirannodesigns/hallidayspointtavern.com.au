import * as React from 'react';
import { DeepMap, FieldError } from 'react-hook-form';

import { ErrorMessage } from './error-message';

type TextareaProps = {
  name: string;
  label: string;
  rows?: number;
  errors: DeepMap<Record<string, unknown>, FieldError>;
  rest?: unknown[];
};

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ name, label, rows = 3, errors, ...rest }, ref) => {
    const hasErrors = Boolean(errors?.[name]);
    return (
      <div>
        <label htmlFor={name} className="block">
          <span className="sr-only">{label}</span>
          <textarea
            id={name}
            name={name}
            rows={rows}
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

export { Textarea };
