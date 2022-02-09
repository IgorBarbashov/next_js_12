const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');
const { webpack } = require('./configs/next/webpack');
const { images } = require('./configs/next/images');

const customConfig = {
    reactStrictMode: true,
    swcMinify: true,
    optimizeFonts: true,
    webpack,
    images,
};

module.exports = (phase, { defaultConfig }) => ({
    ...defaultConfig,
    ...customConfig,
    compress: phase === PHASE_DEVELOPMENT_SERVER,
});
