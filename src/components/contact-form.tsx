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
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>({ mode: 'onBlur', reValidateMode: 'onChange' });
  return (
    <NetlifyForm
      handleSubmit={handleSubmit}
      className="px-4 py-12 sm:px-6 lg:px-8 lg:py-24"
    >
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
        <Textarea
          label="Message"
          rows={10}
          {...register('message', { required: true })}
          errors={errors}
        />
        <p>
          <button
            type="submit"
            className="px-6 py-2 font-medium tracking-wider text-white uppercase bg-black"
          >
            Submit
          </button>
        </p>
      </div>
    </NetlifyForm>
  );
}

export { ContactForm };
