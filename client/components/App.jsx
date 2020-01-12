import React, { useState, useEffect } from 'react';
import Navigation from './Navigation.jsx';
import Flashcard from './Flashcard.jsx';
import API from './API.jsx';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagic } from '@fortawesome/free-solid-svg-icons';

const App = () => {
  const [decks, setDecks] = useState([]);
  const [flashcards, setFlashcards] = useState([
    {
      id: 1,
      front: 'Select a deck!',
      back: ''
    }
  ]);

  const fetchDecks = () => {
    axios.get('/api/deck').then(res => setDecks(res.data));
  };

  useEffect(() => {
    fetchDecks();
  }, []);

  const [original, setOriginal] = useState([...flashcards]);

  const handleCheck = num => {
    if (num === -1) {
      setFlashcards(original);
      setCurrent(0);
    } else {
      const update = flashcards.filter((_, idx) => idx !== num);
      setFlashcards(update);
      if (current === flashcards.length - 1) {
        setCurrent(0);
      }
    }
  };

  const [modal, setModal] = useState(true);
  const toggleModal = () => setModal(!modal);

  const [deck, setDeck] = useState({ deck: [], _id: null, name: '' });

  const [current, setCurrent] = useState(0);

  const handleDeck = idx => {
    setFlashcards(decks[idx].deck);
    setOriginal(decks[idx].deck); //little buggy
    setDeck(decks[idx]);
    setCurrent(0);
  };

  return (
    <React.Fragment>
      <Modal isOpen={false} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>
          Welcome to Stack<span className="nav-overnotes">Overnotes</span>!
        </ModalHeader>
        <ModalBody className="intro-text">
          <p>Click a deck and begin studying right away.</p>
          <p>
            Need to peek at the definition? Click the{' '}
            <i className="highlight">body of the card</i> or hit the{' '}
            <i className="highlight">down arrow.</i>
          </p>
          <p>
            Once you know a flashcard well enough, click{' '}
            <i className="highlight">done</i> to remove it from the shuffle, or
            hit <i className="highlight">Enter</i>.
          </p>
          <p>
            If you want to move onto a random card click{' '}
            <i className="highlight">next</i>, or hit{' '}
            <i className="highlight">Spacebar</i>.
          </p>
          <p>
            Simply click <i className="highlight">restart</i> to study the deck
            again, or hit <i className="highlight">R</i>.
          </p>
          <p>
            Want a <i className="highlight">random background image</i>? Click
            this magic wand&nbsp;
            <FontAwesomeIcon
              className="wand"
              size="sm"
              icon={faMagic}
              onClick={() =>
                (document.body.style.backgroundImage = `url('https://source.unsplash.com/random/1920%C3%971200/?nature')`)
              }
            />
          </p>
        </ModalBody>
        <ModalFooter className="intro-footer">
          Study hard. Study often. Study well.
        </ModalFooter>
      </Modal>
      <Navigation decks={decks} handleDeck={handleDeck} />
      <div className="container">
        <Flashcard
          key={current}
          card={flashcards[current]}
          total={flashcards.length}
          idx={current}
          handleView={setCurrent}
          handleCheck={handleCheck}
          original={original.length}
          deck={deck}
          fetchDecks={fetchDecks}
        />
      </div>
    </React.Fragment>
  );
};

export default App;
