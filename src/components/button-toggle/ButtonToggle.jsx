import React from 'react';
import './ButtonToggle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons'


const ButtonToggle = ({ todo, uncompletedTodo, completedTodo }) => {
    const { completed } = todo;
    return (
        <a
            className={`button-toggle ${completed
                ? 'button-toggle--uncompleted'
                : 'button-toggle--completed'}` }
            onClick={() => {
                todo.completed ?
                    uncompletedTodo(todo)
                    : completedTodo(todo);
            }}
            className=""
        >{completed
            ? <FontAwesomeIcon 
                icon={faMinusCircle} 
                style={{
                    color: "white",
                    fontSize: "20pt",
                    marginRight: "20px"
                }}
                />
            : <FontAwesomeIcon 
                icon={faCheckCircle} 
                style={{
                    color: "white",
                    fontSize: "20pt",
                    marginRight: "20px"
                }}
                />}
            
            </a>
    );
}

export default ButtonToggle;