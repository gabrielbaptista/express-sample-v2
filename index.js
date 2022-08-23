const express = require('express')
var path = require('path');
const app = express()
const port = 3000

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

var usersRouter = require('./routes/users');
var mathRouter = require('./routes/math');


app.use('/users', usersRouter);
app.use('/math', mathRouter);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})