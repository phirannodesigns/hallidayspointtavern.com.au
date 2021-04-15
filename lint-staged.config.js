/* eslint-disable sonarjs/no-duplicate-string */
module.exports = {
  '*.*.{md,mdx,json,yaml,js,jsx}': [
    'prettier "**/*.{md,mdx,json,yaml,js,jsx}" --write',
  ],
  '*./src/**/*.{md,mdx,json,yaml,js,jsx}': [
    'prettier "**/*.{md,mdx,json,yaml,js,jsx}" --write',
  ],
  '*./studio/*.{md,mdx,json,yaml,js,jsx}': [
    'prettier "**/*.{md,mdx,json,yaml,js,jsx}" --write',
  ],
  '*./studio/schemas/**/*.{md,mdx,json,yaml,js,jsx}': [
    'prettier "**/*.{md,mdx,json,yaml,js,jsx}" --write',
  ],
};
