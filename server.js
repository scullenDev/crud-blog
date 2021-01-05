const express = require('express');
const { sequelize } = require('./models');
const logger = require('morgan');
const app = express();
const PORT = process.env.PORT || 9000;
const routes = require('./routes');

// middleware magic
app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use(routes);

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server now listening on 'http://localhost:${PORT}'!`);
  });
});
