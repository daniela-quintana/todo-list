import React, { Fragment, useState } from 'react';
import { makeTodo } from '../../utils';
import { Row, Container, Col, Button } from 'reactstrap';
import './TodoForm.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons'

const TodoForm = ({ counter, addTodo }) => {
    // utilizacion de hook para variable local
    const [todoName, setTodoName] = useState('');
    return (
        <Fragment>
            <div className="form-group">
                <Container>
                    <Row>
                        <Col md="12">
                            <form>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="What needs to be done?"
                                    value={todoName}
                                    onChange={(event) => setTodoName(event.target.value)}
                                />
                                <Button
                                    icon={faPlusCircle}
                                    className="btn-lg"
                                    onClick={() => {
                                        // ejecutamos la accion pasada por props
                                        addTodo(makeTodo(counter, todoName));
                                        // cambiamos la variable local a vacia
                                        setTodoName('');
                                    }}
                                    // si el name esta vacio, el button esta disabled
                                    // disabled={todoName === ''}
                                >
                                    <FontAwesomeIcon icon={faPlusCircle}/>
                                </Button>
                                
                            </form>
                        </Col>
                    </Row> 
                </Container>
            </div>
        </Fragment>
    );
}

export default TodoForm;