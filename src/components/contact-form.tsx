import * as React from 'react';
import { useForm } from 'react-hook-form';

import { Input } from './form-elements/input';
import { NetlifyForm } from './form-elements/netlify-form';
import { Textarea } from './form-elements/textarea';

type FormData = {
  full_name: string;
  email_address: string;
  contact_number: string;
  subject: string;
  message: string;
};

function ContactForm(): React.ReactElement {
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>({ mode: 'onBlur', reValidateMode: 'onChange' });
  return (
    <NetlifyForm handleSubmit={handleSubmit} className="p-4 py-24">
      <div className="grid grid-cols-1 gap-6">
        <Input
          label="Full name"
          {...register('full_name', { required: true })}
          errors={errors}
        />
        <Input
          label="Email address"
          {...register('email_address', { required: true })}
          errors={errors}
        />
        <Input
          label="Contact number"
          {...register('contact_number', { required: true })}
          errors={errors}
        />
        <Input
          label="Subject"
          {...register('subject', { required: true })}
          errors={errors}
        />
        <Textarea
          label="Message"
          {...register('message', { required: true })}
          errors={errors}
        />
        <button type="submit" className="w-56 button">
          Submit
        </button>
      </div>
    </NetlifyForm>
  );
}

export { ContactForm };
