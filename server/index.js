const express = require('express');
const morgan = require('morgan');
const db = require('./db/index.js');
const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer({ dest: './uploads/' });

const app = express();

app.use(morgan('dev'));
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/deck', (req, res) => {
  db.read()
    .then(data => res.status(200).send(data))
    .catch(err => console.log(err));
});

app.post('/api/deck/', upload.single('file'), (req, res) => {
  //this route created merely just to seed DB

  // db.create(example);

  console.log(req.file);
  res.end();
});

app.put('/api/deck/:id', (req, res) => {
  const data = req.body;
  const id = req.params.id;

  db.update(id, data)
    .then(() => {
      res.status(200).send('deck updated');
    })
    .catch(err => {
      console.log(err);
      res.status(404).end();
    });
});

const port = 3001;
app.listen(port, console.log(`server is listening on ${port}`));
