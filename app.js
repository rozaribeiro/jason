const express = require('express');
const app = express();
const ejs = require('ejs');

app.use(express.urlencoded({ extended: false }));
app.engine('ejs', ejs.renderFile);
app.set('views', './src/views');
app.use(express.static("./src/assets"));

const router = require('./src/routes');
app.use(router);

const port = 8000;
app.listen(port, () => {
  console.log(`Connected to port ${port}!`);
});