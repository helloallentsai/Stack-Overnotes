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
  console.log(data);
  Flashcards.create(data);
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

const del = () => {
  const query = Flashcards.findOneAndDelete({ id });
  return query.exec();
};

module.exports = { db, create, read, update, del };
