const path = require('path');
const hbs = require('express-handlebars').create({});

const getRenderedView = async (template, layout, data = {}) =>
  await hbs.renderView(
    path.join(__dirname, '..', '..', 'views', `${template}.handlebars`),
    {
      layout: path.join(
        __dirname,
        '..',
        '..',
        'views',
        'layouts',
        `${layout}.handlebars`,
      ),
    },
  );

module.exports = { getRenderedView };
