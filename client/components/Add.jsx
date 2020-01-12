import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Card } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

const Add = ({ handleAdd, total, toggleAdd }) => {
  const [front, setFront] = useState('');
  const [back, setBack] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const card = {
      id: total + 1,
      front,
      back
    };
    handleAdd(card);

    setFront('');
    setBack('');
  };

  return (
    <Card>
      <Form onSubmit={handleSubmit} className="new-card">
        <FormGroup>
          <Label>word</Label>
          <Input
            type="text"
            value={front}
            onChange={e => setFront(e.target.value)}
            className="new-card-text"
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>definition</Label>
          <Input
            type="textarea"
            value={back}
            onChange={e => setBack(e.target.value)}
            className="new-card-text"
            required
          />
        </FormGroup>
        <FontAwesomeIcon
          icon={faTimes}
          size="1x"
          onClick={toggleAdd}
          className="new-card-add float-right"
        />
        <FontAwesomeIcon
          icon={faCheck}
          size="1x"
          onClick={handleSubmit}
          className="new-card-add float-right"
        />
      </Form>
    </Card>
  );
};

export default Add;
