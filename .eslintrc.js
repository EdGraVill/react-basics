module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  plugins: ['flowtype'],
  globals: {
    document: true,
    window: true,
    HTMLDivElement: true,
    HTMLAnchorElement: true,
  }
};
