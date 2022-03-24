const express = require('express');
const path = require('path');
const logger = require('morgan');
const app = express();

//middleware setup:
app.use(logger('dev'));
app.use(express.json());
app.use (express.static(path.join(__dirname, 'build')))

//db connection imports:
require('dotenv').config();
require('./config/database.js');


//api routes:

app.use('/api/tasks', require('./routes/api/task.js'))
app.use('/api/users', require('./routes/api/users.js'))























app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });

  const port = process.env.PORT || 3001;

app.listen(port, function() {
    console.log(`Express app running on port ${port}`)
  });  