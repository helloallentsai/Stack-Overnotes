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
  Button
} from 'reactstrap';
import axios from 'axios';

const Navigation = ({ decks, handleDeck }) => {
  const submitDeck = e => {
    e.preventDefault();
    let data = new FormData();
    data.append('file', file);
    console.log(data);

    axios.post('/api/deck/', data);
    // .then(fetchDecks)
  };

  const [file, setFile] = useState(null);
  console.log(file);

  return (
    <Navbar color="light" light expand="md" className="navbar">
      <NavbarBrand href="/">
        Stack<span className="nav-overnotes">Overnotes</span>
      </NavbarBrand>
      <Nav>
        <NavbarText className="deck-title">decks:</NavbarText>
        {/* <Form onSubmit={submitDeck}>
          <Label>Upload CSV</Label>
          <Input type="file" onChange={e => setFile(e.target.files[0])}></Input>
          <Button>Submit</Button>
        </Form> */}
        {decks.map((deck, idx) => (
          <NavItem className="deck" key={idx} onClick={() => handleDeck(idx)}>
            {deck.name} {`(${deck.deck.length})`}
          </NavItem>
        ))}
        {/* <UncontrolledDropdown nav>
          <DropdownToggle nav caret>
            decks
          </DropdownToggle>
          <DropdownMenu right>
            {decks.map((deck, idx) => (
              <DropdownItem
                className="deck"
                key={idx}
                onClick={() => handleDeck(idx)}
              >
                {deck.name} {`(${deck.deck.length})`}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </UncontrolledDropdown> */}
      </Nav>
    </Navbar>
  );
};

export default Navigation;
