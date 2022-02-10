const path = require('path');

module.exports = {
    i18n: {
        locales: ['ru', 'en', 'de'],
        defaultLocale: 'en',
        localeDetection: true,
        localePath: path.resolve('./public/locales'),
    },
};
