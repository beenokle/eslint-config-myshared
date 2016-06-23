'use strict';

module.exports = {
    extends: [
      './rules/errors',
      './rules/best-practices',
      './rules/strict',
      './rules/variables',
      './rules/style',
      './rules/es6',
      './rules/flowtype',
      './rules/mocha',
      './rules/react'
    ].map(require.resolve),
    rules: {}
};
