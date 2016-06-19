# eslint-plugin-common

Common specific linting rules for ESLint

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-common`:

```
$ npm install eslint-plugin-common --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-common` globally.

## Usage

Add `common` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "common"
    ],
    "extends": [
        "eslint:recommended",
        "plugin:common/errors",
        "plugin:common/best-practices",
        "plugin:common/strict",
        "plugin:common/variables",
        "plugin:common/style",
        "plugin:common/es6",
        "plugin:common/flowtype",
        "plugin:common/mocha",
        "plugin:common/react"
    ],
}
```
