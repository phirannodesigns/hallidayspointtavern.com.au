// eslint-disable-next-line import/no-extraneous-dependencies
import resolveConfig from 'tailwindcss/resolveConfig';
import { TailwindConfig } from 'tailwindcss/tailwind-config';

import tailwindConfig from '../../tailwind.config';

function useTailwindConfig(): TailwindConfig {
  return resolveConfig((tailwindConfig as unknown) as TailwindConfig);
}

export { useTailwindConfig };
