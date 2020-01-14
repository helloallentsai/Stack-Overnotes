const express = require('express');
const morgan = require('morgan');
const db = require('./db/index.js');
const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer({ dest: './uploads/' });
const fs = require('fs');

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
  fs.readFile(req.file.path, 'utf8', (err, data) => {
    if (err) throw err;
    db.create(data)
      .then(data => {
        fs.unlink(req.file.path, err => {
          if (err) throw err;
          console.log('successfully deleted ' + req.file.path);
        });
        return data;
      })
      .then(data => res.status(200).send(data));
  });
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

app.delete('/api/deck/:id', (req, res) => {
  const id = req.params.id;
  db.del(id).then(data => res.status(202).send(data));
});

const port = 3001;
app.listen(port, console.log(`server is listening on ${port}`));
