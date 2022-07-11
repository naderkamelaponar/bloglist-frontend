/* بسم الله الرحمن الرحيم */
/* eslint-env node */
module.exports = {
    "env": {
        "browser": true,"node":true,
        "es6": true,
        "jest/globals": true 
    },
    "extends": [ 
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react", "jest"
    ],
    "rules": {
        "no-console": "2",
       
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "never"
        ],
        "no-console": 0,
        "react/prop-types": 0,
        "react/react-in-jsx-scope": "off"
    },
    "settings": {
      "react": {
        "version": "detect"
      }
    }
  }