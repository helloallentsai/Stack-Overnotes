import React, { useState } from 'react';
import { Collapse, Form, Input, Toast, ToastBody } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEdit,
  faTrashAlt,
  faCheck,
  faTimes
} from '@fortawesome/free-solid-svg-icons';

const Deckcard = props => {
  const { front, back } = props.card;
  const [edit, setEdit] = useState(back);
  const { handleEdit, handleDelete, idx } = props;

  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const toggleEdit = () => {
    setIsOpenEdit(!isOpenEdit);
    if (isOpenDelete) {
      setIsOpenDelete(false);
    }
  };

  const [isOpenDelete, setIsOpenDelete] = useState(false);
  const toggleDelete = () => {
    setIsOpenDelete(!isOpenDelete);
    if (isOpenEdit) {
      setIsOpenEdit(false);
    }
  };

  return (
    <li>
      <span>{front}</span>{' '}
      <span>
        <FontAwesomeIcon
          size="xs"
          icon={faEdit}
          onClick={toggleEdit}
          className="edit-btn"
        />
      </span>{' '}
      <span>
        <FontAwesomeIcon
          size="xs"
          icon={faTrashAlt}
          onClick={toggleDelete}
          className="edit-btn"
        />
      </span>
      <Collapse isOpen={isOpenEdit}>
        <Toast>
          <ToastBody>
            <Form>
              <Input
                className="edit-back"
                type="textarea"
                value={edit}
                onChange={e => setEdit(e.target.value)}
              ></Input>

              <FontAwesomeIcon
                icon={faTimes}
                onClick={() => {
                  toggleEdit();
                }}
                className="float-right edit-btn small-btn"
                size="xs"
              />
              <FontAwesomeIcon
                icon={faCheck}
                onClick={() => {
                  handleEdit(idx, edit);
                  toggleEdit();
                }}
                className="float-right edit-btn small-btn"
                size="xs"
              />
            </Form>
          </ToastBody>
        </Toast>
      </Collapse>
      <Collapse isOpen={isOpenDelete}>
        <Toast>
          <ToastBody>
            <span className="delete-confirm">Are you sure? </span>
            <FontAwesomeIcon
              icon={faCheck}
              className="delete-check"
              size="xs"
              onClick={() => {
                handleDelete(idx);
                toggleDelete();
              }}
            />
            <FontAwesomeIcon
              icon={faTimes}
              onClick={() => {
                toggleDelete();
              }}
              className="edit-btn delete-cross"
              size="xs"
            />
          </ToastBody>
        </Toast>
      </Collapse>
    </li>
  );
};

export default Deckcard;
