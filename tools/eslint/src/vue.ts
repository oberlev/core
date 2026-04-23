import { eslint, type EslintOptions } from './index';

export const vue = (inputOptions = {} as EslintOptions, ...configs: any[]) => {
  return eslint(
    {
      ...inputOptions,
      vue: true
    },
    {
      name: 'oberlev/vue',
      rules: {
        'vue/max-attributes-per-line': ['error', { singleline: 3 }],
        'vue/multi-word-component-names': 'off',
        'vue/no-v-html': 'off'
      }
    },
    ...configs
  );
};
