'use strict';

module.exports = {
    configs: {
        errors: require("./.eslint/errors"),
        'best-practices': require("./.eslint/best-practices"),
        strict: require("./.eslint/strict"),
        variables: require("./.eslint/variables"),
        style: require("./.eslint/style"),
        es6: require("./.eslint/es6"),
        flowtype: require("./.eslint/flowtype"),
        mocha: require("./.eslint/mocha"),
        react: require("./.eslint/react")
    }
};