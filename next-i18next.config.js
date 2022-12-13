module.exports = {
  debug: process.env.NODE_ENV === 'development',
  i18n: {
    defaultLocale: 'sl',
    locales: ['sl', 'en'],
  },
  localePath:
    typeof document === 'undefined'
      ? require('path').resolve('./public/locales')
      : '/locales',
}
