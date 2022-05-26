// server.js
const express = require('express');
const sort = require('./controllers/sorter.js')
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();;
app.use(express.json());

app.use(bodyParser.urlencoded({extended: true}));


const port = 3000;


app.use(morgan('dev'))

// Add the bodyParser middelware to the express application
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/', (req, res) => {
  let string = req.body.msg;
  console.log(string)
  res.send(string);


})

app.post('/sort/:key/:order', (req, res) => {

  let json_data = req.body.data;
  json_data.sort(sort.compareValues(req.params.key, req.params.order))
  console.log(json_data)
  res.send(json_data)

});


app.listen(port, () => {
  console.log(`Success! Your application is running on port ${port}.`);
});
