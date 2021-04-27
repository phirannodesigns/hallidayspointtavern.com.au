import * as React from 'react';
import { DeepMap, FieldError } from 'react-hook-form';

type ErrorMessageProps = {
  errors: DeepMap<Record<string, unknown>, FieldError>;
  label: string;
  name: string;
};

function ErrorMessage({
  errors,
  label,
  name,
}: ErrorMessageProps): React.ReactElement | null {
  const hasErrors = Boolean(errors?.[name]);
  return hasErrors ? (
    <div
      role="alert"
      className="mt-1 text-xs font-semibold tracking-widest text-red-800 uppercase"
    >
      {label} is a required field
    </div>
  ) : null;
}

export { ErrorMessage };
