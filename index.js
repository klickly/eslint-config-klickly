module.exports = {
    "extends": "eslint:recommended",
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module"
    },
    "env": {
        "browser": true,
        "node": true,
        "es6": true
    },
    "globals": {
        "describe": true,
        "it": true,
        "beforeEach": true
    },
    "rules": {
        "no-async-promise-executor": "error",
        "no-extra-parens": ["error", "all", { "returnAssign": false, "nestedBinaryExpressions": false }],
        "array-callback-return": "error",
        "complexity": ["error", 30],
        "default-case": "error",
        "no-else-return": "error",
        "no-empty-function": "error",
        "no-empty-pattern": "error",
        "no-eq-null": "error",
        "no-eval": "error",
        "no-extra-bind": "error",
        "no-extra-label": "error",
        "no-floating-decimal": "error",
        "no-implicit-coercion": "error",
        "no-loop-func": "error",
        "no-lone-blocks": "error",
        "no-multi-spaces": "error",
        "no-multi-str": "error",
        "no-new": "error",
        "no-proto": "error",
        "no-return-assign": "error",
        "no-useless-call": "error",
        "no-useless-catch": "error",
        "no-useless-concat": "error",
        "no-useless-return": "error",
        "no-warning-comments": "warn",
        "no-with": "error",
        "radix": "error",
        "require-await": "error",
        "yoda": "error",

        "no-buffer-constructor": "error",
        "no-mixed-requires": "error",
        "no-new-require": "error",
        "no-process-env": "warn",

        "comma-style": "error",
        "array-bracket-spacing": ["error", "always"],
        "block-spacing": "error",
        "brace-style": "error",
        "camelcase": ["error", { "properties": "never"}],
        "comma-dangle": ["error", "never"],
        "comma-spacing": "error",
        "computed-property-spacing": ["error", "never"],
        "indent": ["error", 4],
        "key-spacing": ["error", { "beforeColon": false }],
        "new-cap": ["warn", { "newIsCap": true }],
        "no-lonely-if": "error",
        "no-trailing-spaces": "error",
        "semi": ["error", "always"],
        "semi-spacing": "error"
    }
};
