const { getRenderedView } = require('./utils');

const URL = process.env.URL || 'http://localhost:5000';

describe('The home route', () => {
  test('The home route renders the home view', async () => {
    const homepage = await (await fetch(`${URL}/`))?.text();
    const expected = await getRenderedView('home', 'main');
    expect(homepage).toEqual(expected);
  });
});
