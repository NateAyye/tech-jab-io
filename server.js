const express = require('express');
const path = require('path');
const app = express();
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
  res.render('home');
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
