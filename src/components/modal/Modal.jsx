import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { addComment } from '../../store/actions/todos.actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons'

const ModalExample = (props) => {
  const {
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
          icon={faCommentDots}
          onClick={toggle}
          clasName="bnt-btn"
          style={{
              color: "#262626",
              fontSize: "20pt",
          }}
      />
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>{props.text}</ModalHeader>
        <ModalBody>
          <input 
            placeholder= "Add a comment"
            type="textarea" 
            value={comment} 
            onChange={(event) => setComment(event.target.value)} 
            width="100%"
          />
        </ModalBody>
        <ModalFooter>
          <Button onClick={toggle}>Cancel</Button>
          <Button color="#6ab7a4" onClick={handlerClick()}>Save</Button>{' '}
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalExample;