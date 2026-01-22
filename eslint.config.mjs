// import { defineConfig, globalIgnores } from "eslint/config";
// import typescriptEslint from "@typescript-eslint/eslint-plugin";
// import tsParser from "@typescript-eslint/parser";
// import path from "node:path";
// import { fileURLToPath } from "node:url";
// import js from "@eslint/js";
// import { FlatCompat } from "@eslint/eslintrc";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// const compat = new FlatCompat({
//     baseDirectory: __dirname,
//     recommendedConfig: js.configs.recommended,
//     allConfig: js.configs.all
// });

// export default defineConfig([globalIgnores(["lib"]), {
//     files: ["**/*.ts", "**/*.tsx"],

//     extends: compat.extends(
//         "eslint:recommended",
//         "plugin:@typescript-eslint/eslint-recommended",
//         "plugin:@typescript-eslint/recommended",
//     ),

//     plugins: {
//         "@typescript-eslint": typescriptEslint,
//     },

//     languageOptions: {
//         parser: tsParser,
//     },

//     rules: {
//         "no-console": "off",
//         "@typescript-eslint/no-explicit-any": "off",
//     },
    
//     ignores: ['/lib'],
// }]);


import importPlugin from 'eslint-plugin-import';
import globals from 'globals';
import tsParser from '@typescript-eslint/parser';
import eslintJs from '@eslint/js';
import eslintTs from 'typescript-eslint';

const tsFiles = ['{src,test}/**/*.ts'];

const languageOptions = {
    globals: {
        ...globals.node,
        ...globals.jest,
    },
    ecmaVersion: 2023,
    sourceType: 'module',
};

const customTypescriptConfig = {
    files: tsFiles,
    plugins: {
        import: importPlugin,
        'import/parsers': tsParser,
    },
    languageOptions: {
        ...languageOptions,
        parser: tsParser,
        parserOptions: {
            project: './tsconfig.json',
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

export default [
    { ignores: ['docs/*', 'build/*', 'lib/*', 'dist/*'] }, // global ignores
    eslintJs.configs.recommended,
    ...recommendedTypeScriptConfigs,
    customTypescriptConfig,
];