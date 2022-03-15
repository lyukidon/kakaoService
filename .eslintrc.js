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
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "import/no-extraneous-dependencies": ["error",  {"devDependencies": true}],
        "react/jsx-props-no-spreading": "off", 
        'jsx-a11y/label-has-associated-control': [2,
            {assert: 'either'},
        ],  
    },
}
