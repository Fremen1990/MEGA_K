const express = require('express');
// const cookieParser = require('cookie-parser');
// const {appendFile, readFile} = require('fs');
const app = express();
const {voteRouter} = require('./routes/votes')

app.use(express.static('public'));
app.use('/vote', voteRouter);

app.listen(3000, 'localhost');