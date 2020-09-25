module.exports = {
    root: true,
    parser: "@typescript-eslint/parser", // Specifies the ESLint parser
    parserOptions: {
        ecmaVersion: 2020,
        project: "./tsconfig.json",
        tsconfigRootDir: __dirname,
        sourceType: "module", // Allows for the use of imports
        ecmaFeatures: {
            impliedStrict: true,
            classes: true,
        },
    },
    env: {
        // These environments are not mutually exclusive, so you can define more than one at a time.
        browser: true,
        "shared-node-browser": true,
        es2020: true,
        worker: true,
        serviceworker: true,
        mongo: true,
        jest: true,
        "jest/globals": true,
    },
    globals: {
        page: true,
        browser: true,
        context: true,
        jestPuppeteer: true,
    },
    plugins: [
        "jest",
        "@typescript-eslint",
        "tree-shaking",
        "functional",
        "unicorn",
        "sonarjs",
        "security",
        "xss",
        "security-node",
        "promise",
        "optimize-regex",
        "prettier",
    ],
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "airbnb-typescript", // Package contain: [see: https://www.npmjs.com/package/eslint-config-airbnb-typescript]
        "galex",
        "metarhia",
        "standard-with-typescript",
        "google",
        "kentcdodds",
        "airbnb/hooks",
        "plugin:node/recommended",
        "plugin:unicorn/recommended",
        "plugin:sonarjs/recommended",
        "plugin:security/recommended",
        "plugin:security-node/recommended",
        "plugin:functional/recommended",
        "plugin:functional/external-recommended",
        "plugin:jest/all",
        "plugin:promise/recommended",
        "plugin:optimize-regex/recommended",
        "plugin:prettier/recommended",
        "prettier",
        "prettier/unicorn",
        "prettier/standard",
        "prettier/@typescript-eslint",
    ],
    rules: {
        // Common config eslint
        "no-duplicate-imports": 0, // Typescript do all the work
        "no-undef": 0,
        "no-unused-vars": 0,

        // Rules that TypeScript checks
        "@typescript-eslint/no-magic-numbers": 1,
        "@typescript-eslint/consistent-type-definitions": 0,
        "@typescript-eslint/no-unused-vars": 0,

        // Unicorn
        "unicorn/filename-case": 0,
        "unicorn/prevent-abbreviations": 0,

        //babel
        "babel/new-cap": 0,

        // Functional plugin
        "functional/no-let": 0,
        "functional/no-class": 0,
        "functional/no-try-statement": 0,
        "functional/no-this-expression": 0,
        "functional/no-expression-statement": 0,
        "functional/no-conditional-statement": 0,
        "functional/functional-parameters": 0,
        "functional/no-return-void": 0,
        "functional/prefer-type-literal": 0,

        // Jest plugin (all rules on by default)
        "jest/no-disabled-tests": "warn",
        "jest/no-focused-tests": "error",
        "jest/no-identical-title": "error",
        "jest/prefer-to-have-length": "warn",
        "jest/valid-expect": "error",
        "jest/no-hooks": 0,

        // Tree shacking plugin
        "tree-shaking/no-side-effects-in-initialization": 0,

        // Prettier setting
        "prettier/prettier": ["error", { tabWidth: 4 }],

        // Eslint custom rules
        "sort-keys": ["error", "asc", { caseSensitive: true, natural: false, minKeys: 2 }],
    },
    overrides: [
        {
            // Rules for testing
            files: ["*.test.ts"],
            rules: {
                "sort-keys": "off",
                "sort-keys-fix/sort-keys-fix": "off",
                "jest/no-standalone-expect": "off",
            },
        },
    ],
};
