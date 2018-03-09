module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  plugins: ['flowtype'],
  globals: {
    document: true,
    window: true,
    HTMLElement: true,
    HTMLAnchorElement: true,
    HTMLDivElement: true,
  }
};
