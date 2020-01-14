import React, { useState, useEffect } from 'react';
import Add from './Add.jsx';
import Deckcard from './Deckcard.jsx';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Collapse
} from 'reactstrap';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEdit,
  faTrashAlt,
  faCheck,
  faTimes
} from '@fortawesome/free-solid-svg-icons';

const Deck = props => {
  const { name, _id, deck } = props.deck;
  const { fetchDecks, handleDeck } = props;

  const [modal, setModal] = useState(false);
  const toggleModal = () => setModal(!modal);

  const [isOpenAdd, setIsOpenAdd] = useState(false);
  const toggleAdd = () => setIsOpenAdd(!isOpenAdd);

  const handleAdd = card => {
    deck.push(card);
    const update = deck.slice();
    axios.put(`/api/deck/${_id}`, update).then(() => fetchDecks());
  };

  const handleEdit = (idx, edit) => {
    deck[idx].back = edit;
    const update = deck.slice();
    axios.put(`/api/deck/${_id}`, update).then(() => fetchDecks());
  };

  const handleDelete = idx => {
    const update = deck.filter((_, i) => i !== idx);
    axios
      .put(`/api/deck/${_id}`, update)
      .then(() => fetchDecks())
      .then(() => deck.splice(idx, 1));
  };

  const handleDeckDelete = id => {
    axios
      .delete(`/api/deck/${id}`)
      .then(() => fetchDecks())
      .then(() => handleDeck(-1));
  };

  const [isDeckDelete, setIsDeckDelete] = useState(false);
  const toggleDeckDelete = () => setIsDeckDelete(!isDeckDelete);

  return (
    <div>
      {name === 'Welcome' ? (
        <span className="deck-name">{name}</span>
      ) : (
        <div>
          <span className="deck-name">{name}</span>
          <span>
            <FontAwesomeIcon
              className="deck-edit"
              size="xs"
              icon={faEdit}
              onClick={toggleModal}
              color="white"
            />
          </span>
        </div>
      )}

      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>
          {name}{' '}
          <FontAwesomeIcon
            size="xs"
            icon={faTrashAlt}
            onClick={toggleDeckDelete}
            className="deck-delete deck-delete-btn"
          />
          <Collapse isOpen={isDeckDelete}>
            <span className="deck-delete">Are you sure? </span>
            <FontAwesomeIcon
              icon={faCheck}
              className="delete-check"
              size="xs"
              onClick={() => {
                handleDeckDelete(_id);
                toggleDeckDelete();
                toggleModal();
              }}
            />
            <FontAwesomeIcon
              icon={faTimes}
              onClick={() => {
                toggleDeckDelete();
              }}
              className="edit-btn delete-cross"
              size="xs"
            />
          </Collapse>
        </ModalHeader>
        <ModalBody>
          <ol>
            {deck.map((card, idx) => (
              <Deckcard
                key={idx}
                idx={idx}
                card={card}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            ))}
          </ol>
        </ModalBody>
        <ModalFooter>
          <Button size="sm" onClick={toggleAdd}>
            new card
          </Button>
        </ModalFooter>
        <Collapse isOpen={isOpenAdd}>
          <Add
            handleAdd={handleAdd}
            total={deck.length}
            toggleAdd={toggleAdd}
          />
        </Collapse>
      </Modal>
    </div>
  );
};

export default Deck;
