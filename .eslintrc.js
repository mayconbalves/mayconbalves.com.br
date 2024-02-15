module.exports = {
	"root": true,
  "parserOptions": {
    "ecmaVersion": 2020,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "env": {
    "browser": true,
    "es6": true
  },

  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "ignorePatterns": [
    "**/*.js",
    "next.config.js",
    "**/vendor/*.js",
    "**/*.mdx",
    "**/*.md",
    "**/*.css"
  ],
  "plugins": [],
  "extends": [
    "prettier",
    "plugin:prettier/recommended"
  ],
  "rules": {
    "react/react-in-jsx-scope": "off",
    "@next/next/no-img-element": "off",
    "react/jsx-filename-extension": [
      0,
      {
        "extensions": [".js", ".jsx"]
      }
    ],
    "react/jsx-props-no-spreading": "off",
    "no-nested-ternary": "off",
    "import/prefer-default-export": "off"
  }
}
