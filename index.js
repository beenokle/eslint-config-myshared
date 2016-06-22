'use strict';

module.exports = {
    configs: {
        errors: require("./rules/errors"),
        'best-practices': require("./rules/best-practices"),
        strict: require("./rules/strict"),
        variables: require("./rules/variables"),
        style: require("./rules/style"),
        es6: require("./rules/es6"),
        flowtype: require("./rules/flowtype"),
        mocha: require("./rules/mocha"),
        react: require("./rules/react")
    }
};
