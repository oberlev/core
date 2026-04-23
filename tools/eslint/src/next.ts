import pluginNext from '@next/eslint-plugin-next';
import { eslint, type EslintOptions } from './index';

export const next = (inputOptions = {} as EslintOptions, ...configs: any[]) => {
  return eslint(
    {
      ...inputOptions,
      react: true
    },
    {
      name: 'oberlev/next',
      plugins: {
        '@next/next': pluginNext
      },
      rules: {
        ...pluginNext.configs.recommended.rules,
        ...pluginNext.configs['core-web-vitals'].rules,
        '@next/next/no-html-link-for-pages': 'error'
      }
    },
    ...configs
  );
};
