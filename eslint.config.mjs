import importPlugin from 'eslint-plugin-import';
import globals from 'globals';
import eslintJs from '@eslint/js';
import eslintTs from 'typescript-eslint';

const tsFiles = ['{src,test}/**/*.ts'];

const vitestGlobals = {
    describe: 'readonly',
    it: 'readonly',
    test: 'readonly',
    expect: 'readonly',
    vi: 'readonly',
    beforeAll: 'readonly',
    afterAll: 'readonly',
    beforeEach: 'readonly',
    afterEach: 'readonly',
};

const languageOptions = {
    globals: {
        ...globals.node,
        ...vitestGlobals,
    },
    ecmaVersion: 2023,
    sourceType: 'module',
};

const customTypescriptConfig = {
    files: tsFiles,
    plugins: {
        import: importPlugin,
    },
    languageOptions: {
        ...languageOptions,
        parser: eslintTs.parser,
        parserOptions: {
            project: './tsconfig.eslint.json',
        },
    },
    settings: {
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts'],
        },
    },
    rules: {
        "no-console": "off",
        "@typescript-eslint/no-explicit-any": "off",
    },
    ignores: ['/lib'],
};

// Add the files for applying the recommended TypeScript configs 
// only for the Typescript files.
// This is necessary when we have the multiple extensions files 
// (e.g. .ts, .tsx, .js, .cjs, .mjs, etc.).
const recommendedTypeScriptConfigs = [
    ...eslintTs.configs.recommended.map((config) => ({
        ...config,
        files: tsFiles,
    })),
    ...eslintTs.configs.stylistic.map((config) => ({
        ...config,
        files: tsFiles,
    })),
];

const javascriptConfig = {
    files: ['**/*.{js,mjs}'],
    languageOptions: {
        sourceType: 'module',
        globals: {
            ...globals.node,
        },
    },
};

export default [
    { ignores: ['docs/*', 'build/*', 'lib/*', 'dist/*'] }, // global ignores
    eslintJs.configs.recommended,
    ...recommendedTypeScriptConfigs,
    customTypescriptConfig,
    javascriptConfig,
];