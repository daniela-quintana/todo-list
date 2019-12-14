import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';
import { addComment } from '../../store/actions/todos.actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons'

const ModalExample = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const dispatch = useDispatch();

  const [modal, setModal] = useState(false);
  const [comment, setComment] = useState(props.comment);
  const toggle = () => setModal(!modal);

  const handlerClick = () => {
    return (event) => {
      const data = {
        comment: "",
        id: 1
      }
      dispatch(addComment(data));
      toggle();
    }
  }

  return (
    <div>
          <FontAwesomeIcon 
          icon={faCommentDots }
          onClick={toggle}
          title="caca"
          style={{
              color: "white",
              fontSize: "20pt",
              marginRight: "20px"
          }}
      />
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>{props.text}</ModalHeader>
        <ModalBody>
          <Input type="textarea" value={comment} onChange={(event) => setComment(event.target.value)} />
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handlerClick()}>Save</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalExample;