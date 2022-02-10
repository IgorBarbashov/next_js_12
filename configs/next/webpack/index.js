const { DuplicatesPlugin } = require('inspectpack/plugin');

module.exports = {
    webpack: (config, {
        dev,
    }) => {
        if (dev) {
            config.plugins.push(
                new DuplicatesPlugin({
                    verbose: true,
                    emitErrors: true,
                }),
            );
        }

        return {
            ...config,
            performance: {
                hints: 'warning',
                maxAssetSize: 250000,
                maxEntrypointSize: 250000,
            },
        };
    },
};
