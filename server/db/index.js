const mongoose = require('mongoose');
const Flashcards = require('./flashcard.js');

const db = mongoose.connection;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
};

mongoose
  .connect('mongodb://localhost/stackovernotes', options)
  .then(() => console.log('db connected'))
  .catch(err => console.log(err));

const create = data => {
  let [name, deck] = data.split(';');
  deck = JSON.parse(deck);

  const entry = {
    name,
    deck
  };

  return Flashcards.create(entry);
};

const read = () => {
  return Flashcards.find({});
};

const update = (_id, data) => {
  const query = Flashcards.findOneAndUpdate(
    { _id },
    { deck: data },
    { upsert: true }
  );
  return query.exec();
};

const del = _id => {
  const query = Flashcards.findOneAndDelete({ _id });
  return query.exec();
};

module.exports = { db, create, read, update, del };
