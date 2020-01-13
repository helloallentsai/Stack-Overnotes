import React, { useState } from 'react';
import {
  Toast,
  ToastBody,
  ToastHeader,
  Fade,
  Button,
  ButtonGroup,
  Progress,
  Collapse
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faCheck, faRedo } from '@fortawesome/free-solid-svg-icons';
import { faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import Deck from './Deck.jsx';
import API from './API.jsx';

const Flashcard = props => {
  const { front, back } = props.card;
  const {
    idx,
    total,
    handleView,
    handleCheck,
    original,
    deck,
    fetchDecks
  } = props;

  let next = Math.floor(Math.random() * total);
  while (next === idx && total !== 1) {
    next = Math.floor(Math.random() * total);
  }

  const [fadeIn, setFadeIn] = useState(false);
  const toggleBack = () => setFadeIn(!fadeIn);

  document.onkeydown = e => {
    switch (e.keyCode) {
      case 32:
        handleView(next);
        break;
      case 40:
        toggleBack();
        break;
      case 82:
        handleCheck(-1);
        break;
      case 13:
        if (total > 1) {
          handleCheck(idx);
        }
        break;
      default:
        break;
    }
  };

  const progress = Math.floor(((original - total + 1) / original) * 100);

  const [moreModal, setMoreModal] = useState(false);
  const toggleMoreModal = () => setMoreModal(!moreModal);

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  if (front === 'select a deck') {
    return (
      <div className="p-3 bg-secondary my-2 rounded main">
        <Toast className="flashcard">
          <div className="deck-name">
            <Deck deck={deck} fetchDecks={fetchDecks} />
          </div>
          <ToastHeader className="front">{front}</ToastHeader>
          <ToastBody className="back" onClick={toggleBack}>
            <Fade in={fadeIn}>{back}</Fade>
          </ToastBody>
          <ToastHeader>
            <div className="count" style={{ visibility: 'hidden' }}>
              .
            </div>
            <Progress value={0} className="progress" animated color="success" />
          </ToastHeader>
        </Toast>
        <ButtonGroup className="buttons">
          <Button color="primary" disabled>
            <FontAwesomeIcon icon={faPlay} />
            <div className="next">next</div>
          </Button>
          <Button color="success" disabled>
            <FontAwesomeIcon icon={faCheck} />
            <div className="done">done</div>
          </Button>
          <Button color="danger" disabled>
            <FontAwesomeIcon icon={faRedo} />
            <div className="restart">restart</div>
          </Button>
        </ButtonGroup>
      </div>
    );
  } else {
    return (
      <div className="p-3 bg-secondary my-2 rounded main">
        <Toast className="flashcard">
          <div className="deck-name">
            <Deck deck={deck} fetchDecks={fetchDecks} />
          </div>
          <ToastHeader className="front">
            {front}{' '}
            <FontAwesomeIcon
              icon={faStackOverflow}
              onClick={toggle}
              size="sm"
              className="edit-btn"
            />
          </ToastHeader>
          <ToastBody className="back" onClick={toggleBack}>
            <Fade in={fadeIn}>{back}</Fade>
          </ToastBody>
          <ToastHeader>
            {total > 1 ? (
              <div className="count">{total} left</div>
            ) : (
              <div className="count">last one!</div>
            )}
            <Progress
              value={progress}
              className="progress"
              animated
              color="success"
            />
          </ToastHeader>
        </Toast>
        <Collapse isOpen={isOpen}>
          {isOpen ? <API search={front || ''} /> : ''}
        </Collapse>
        <ButtonGroup className="buttons">
          {total > 1 ? (
            <Button onClick={() => handleView(next)} color="primary">
              <FontAwesomeIcon icon={faPlay} />
              <div className="next">next</div>
            </Button>
          ) : (
            <Button color="primary" disabled>
              <FontAwesomeIcon icon={faPlay} />
              <div className="next">next</div>
            </Button>
          )}
          {total > 1 ? (
            <Button
              onClick={() => {
                handleCheck(idx);
                setIsOpen(false);
              }}
              color="success"
            >
              <FontAwesomeIcon icon={faCheck} />
              <div className="done">done</div>
            </Button>
          ) : (
            <Button color="success" disabled>
              <FontAwesomeIcon icon={faCheck} />
              <div className="done">done</div>
            </Button>
          )}
          <Button
            onClick={() => {
              handleCheck(-1);
              setIsOpen(false);
            }}
            color="danger"
          >
            <FontAwesomeIcon icon={faRedo} />
            <div className="restart">restart</div>
          </Button>
        </ButtonGroup>
      </div>
    );
  }
};

export default Flashcard;
