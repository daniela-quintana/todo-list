import React, { Fragment, useState } from 'react';
import { makeTodo } from '../../utils';
import { Row, Container, Col } from 'reactstrap';
import './TodoForm.css';

const TodoForm = ({ counter, addTodo }) => {
    // utilizacion de hook para variable local
    const [todoName, setTodoName] = useState('');
    return (
        <Fragment>
            <div className="form-group">
                <Container>
                    <Row>
                        <Col md="12">
                            <div className="add-todo">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="What needs to be done?"
                                    value={todoName}
                                    onChange={(event) => setTodoName(event.target.value)}
                                />
                                <button
                                    className="btn-add"
                                    onClick={() => {
                                        // ejecutamos la accion pasada por props
                                        addTodo(makeTodo(counter, todoName));
                                        // cambiamos la variable local a vacia
                                        setTodoName('');
                                    }}
                                    // si el name esta vacio, el button esta disabled
                                    // disabled={todoName === ''}
                                >+
                                </button>     
                            </div>
                        </Col>
                    </Row> 
                </Container>
            </div>
        </Fragment>
    );
}

export default TodoForm;