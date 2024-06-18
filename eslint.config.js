import prettier from 'eslint-config-prettier';
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

/** @type { import("eslint").Linter.Config } */
export default tseslint.config(
    {
        ignores: ['**/build/**', '**/dist/**', 'src/some/file/to/ignore.ts']
    },
    eslint.configs.recommended,
    {
        plugins: {
            '@typescript-eslint': tseslint.plugin
        },
        languageOptions: {
            parser: tseslint.parser,
            parserOptions: {
                project: true
            }
        },
        rules: {
            '@typescript-eslint/no-unsafe-argument': 'error',
            '@typescript-eslint/no-unsafe-assignment': 'error',
            '@typescript-eslint/no-unsafe-call': 'error',
            '@typescript-eslint/no-unsafe-member-access': 'error',
            '@typescript-eslint/no-unsafe-return': 'error',
            ...prettier.rules,
            'constructor-super': 'warn',
            'no-const-assign': 'error',
            'no-dupe-else-if': 'warn',
            'no-dupe-keys': 'warn',
            'no-duplicate-case': 'warn',
            'no-duplicate-imports': 'warn',
            'no-ex-assign': 'warn',
            'no-func-assign': 'error',
            'no-import-assign': 'error',
            'no-invalid-regexp': 'error',
            'no-irregular-whitespace': 'error',
            'no-loss-of-precision': 'warn',
            'no-new-native-nonconstructor': 'error',
            'no-obj-calls': 'error',
            'no-self-assign': 'warn',
            'no-self-compare': 'warn',
            'no-setter-return': 'warn',
            'no-this-before-super': 'warn',
            'no-undef': 'warn',
            'no-unreachable': 'warn',
            'no-unreachable-loop': 'warn',
            'no-unsafe-finally': 'error',
            'no-unsafe-negation': 'error',
            'no-unused-vars': 'warn',
            'use-isnan': 'error',
            'valid-typeof': 'error',

            'arrow-body-style': 'off',
            'block-scoped-var': 'warn',
            camelcase: 'warn',
            'capitalized-comments': 'warn',
            complexity: 'warn',
            curly: 'warn',
            'default-case': 'warn',
            'default-case-last': 'warn',
            'default-param-last': 'warn',
            'dot-notation': 'error',
            eqeqeq: 'error',
            'func-name-matching': 'error'
        }
    },
    {
        files: ['**/*.js'],
        ...tseslint.configs.disableTypeChecked
    }
);
