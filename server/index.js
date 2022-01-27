const express = require('express');
const cors = require('cors');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

const surveys = require('./routes/api/surveys');
const questions = require('./routes/api/questions');

app.use('/api/surveys', surveys);
app.use('/api/surveys', questions);

//Handle Production
if(process.env.NODE_ENV === 'production'){
  //use static folder
  app.use(express.static(__dirname + '/public/'))
  
  //handle spa
  app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}

const port = process.env.PORT || 5000;

app.listen(port, ()=> console.log(`Server started on port ${port}`));