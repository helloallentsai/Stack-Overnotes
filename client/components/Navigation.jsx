import React, { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  NavItem,
  Nav,
  NavbarText,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Form,
  Label,
  Input,
  Button,
  Modal,
  ModalHeader,
  ModalBody
} from 'reactstrap';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

const Navigation = ({ decks, handleDeck, fetchDecks }) => {
  const submitDeck = e => {
    e.preventDefault();
    let data = new FormData();
    data.append('file', file);

    axios
      .post('/api/deck/', data)
      .then(() => fetchDecks())
      .then(() => toggle());
  };

  const [file, setFile] = useState(null);
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <Navbar color="light" light expand="md" className="navbar">
      <NavbarBrand href="/">
        Stack<span className="nav-overnotes">Overnotes</span>
      </NavbarBrand>
      <Nav>
        <NavbarText className="deck-title">
          decks
          <FontAwesomeIcon
            icon={faPlusCircle}
            onClick={toggle}
            className="nav-form nav-form-add"
          />
        </NavbarText>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Upload Deck</ModalHeader>
          <ModalBody>
            <Form onSubmit={submitDeck} className="nav-form">
              <Input
                type="file"
                onChange={e => setFile(e.target.files[0])}
              ></Input>
              <Button className="nav-form float-right" size="sm">
                Submit
              </Button>
            </Form>
          </ModalBody>
        </Modal>

        {decks.map((deck, idx) => (
          <NavItem className="deck" key={idx} onClick={() => handleDeck(idx)}>
            {deck.name}{' '}
            <span style={{ fontSize: '12px' }}>{`(${deck.deck.length})`}</span>
          </NavItem>
        ))}
      </Nav>
    </Navbar>
  );
};

export default Navigation;
