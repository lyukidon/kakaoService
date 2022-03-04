module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "airbnb",
        "eslint:recommended",
        "eslint-config-prettier",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "no-console": ["error", { allow: ["warn", "error"] }],
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }]
    }
}
