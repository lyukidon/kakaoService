module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        "airbnb",
        "eslint:recommended",
        "eslint-config-prettier",
        "plugin:react/recommended",
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: ["react"],
    rules: {
        "no-console": ["error", { allow: ["warn", "error"] }],
        "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
        "import/no-extraneous-dependencies": [
            "error",
            { devDependencies: true },
        ],
        "react/jsx-props-no-spreading": "off",
        "jsx-a11y/label-has-associated-control": [2, { assert: "either" }],
        "default-param-last": 0,
        "no-plusplus": "off",
        "prefer-const": "off",
        "consistent-return": "off",
        "react/prop-types": "off",
        "no-eval": "off",
        "no-new": "off",
        "no-return-assign": "warn",
        "no-param-reassign": [2, { props: false }],
        "no-unused-vars": "warn",
        "react/function-component-definition": 1,
        "react/jsx-no-useless-fragment":1,
        "jsx-a11y/control-has-associated-label": 1,
        "react/destructuring-assignment":1,
        "no-console":1
    },
};
