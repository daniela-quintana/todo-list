import React from 'react';
import { useDispatch } from 'react-redux';
import { ButtonToggle } from '..';
import './Table.css';
import { Row, Container, Col, Form } from 'reactstrap';
import Modal from '../modal/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { filterTodo } from '../../store/actions/todos.actions';

const Table = ({ todos, removeTodo, uncompletedTodo, completedTodo }) => {
    
    const dispatch = useDispatch();

    const onClickFilter = (filter) =>{
        return (event) => {
            dispatch(filterTodo(filter));
        }
    }

    return (
        <Container>
            <Row>
            <Col lg="12" md="12" sm="12" xs="12" >
                <nav style={{ marginTop: "60px" }}>
                    <ol className="breadcrumb">
                        <li
                            className={"breadcrumb-item"}
                            onClick={onClickFilter('TODO_SHOW_ALL')}
                        >
                        All
                        </li>
                        <li
                            className={"breadcrumb-item"}
                            onClick={onClickFilter('TODO_SHOW_COMPLETED')}
                        >
                            Completed
                        </li>
                        <li
                            className={"breadcrumb-item"}
                            onClick={onClickFilter('TODO_SHOW_ACTIVE')}
                        >
                            Active
                        </li>
                    </ol>
                </nav>
                <table className="table table-dark text-center">
                    <thead style={{ marginTop: "60px" }}>
                        <tr>
                            <th scope="col" className="w-25">Do</th>
                            <th scope="col" className="w-25">Name</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {todos.map(todo => (
                            <tr key={todo.id}>
                                <td className="w-25 ">
                                    <ButtonToggle
                                        todo={todo}
                                        completedTodo={completedTodo}
                                        uncompletedTodo={uncompletedTodo}
                                    />
                                </td>
                                <td className="w-25" 
                                    style={{textDecoration: todo.completed ? "line-through" : "none"}}>
                                    {todo.name} {todo.completed === true ? 'Completed': ''}
                                </td>
                                <td className="w-25">  
                                <Col xs={{size:12, offset: 2}} md={{ size: 6, offset: 4 }} className="form-check-inline">   
                                    <FontAwesomeIcon
                                        icon={faTimesCircle}
                                        onClick={() => removeTodo(todo)}
                                        style={{
                                            color: "white",
                                            fontSize: "20pt",
                                            marginRight: "10pt"
                                        }}
                                    />   
                                    <Modal
                                        onClick={() => this.props.editTodo(todo.id)}
                                        id={todo.id}
                                        text={todo.name}
                                        comment={todo.comment}
                                    />   
                                </Col> 
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                </Col>
            </Row>
        </Container>

    );
}

export default Table;