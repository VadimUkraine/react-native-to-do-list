// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  rules: {
    "no-unused-vars": "warn",
    "linebreak-style": 0,
    quotes: 0,
    "import/no-unresolved": 0,
    "import/extensions": 0,
    "no-use-before-define": 0,
    "react/prop-types": 0,
    "padded-blocks": 0,

    "no-undef": "warn",
    "no-restricted-globals": "warn",
  },
  extends: [
    "expo",
    "airbnb-base",
    "prettier",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jest/recommended",
  ],
};
