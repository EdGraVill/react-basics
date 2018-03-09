module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  plugins: ['flowtype'],
  globals: {
    document: true,
    window: true,
    HTMLAnchorElement: true,
    HTMLDivElement: true,
    HTMLElement: true,
    HTMLInputElement: true,
  }
};
