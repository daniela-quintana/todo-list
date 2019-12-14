import {
    TODO_ADD,
    TODO_COMPLETED,
    TODO_REMOVE,
    TODO_UNCOMPLETED,
    TODO_COUNTER,
    TODO_ADD_COMMENT,
    TODO_SHOW_FILTER,
} from '../const';

const initialState = {
    counter: 3,
    todos: [{
        id: 0,
        name: 'Estudiar más Redux',
        comment: '',
        completed: false
    },
    {
        id:1,
        name: 'Agregar Firebase',
        comment: '',
        completed: true
    },
    {
        id:2,
        name: 'Poder editar tareas',
        comment: '',
        completed: false
    }],
};

/**
 * 
 * @param {*} state 
 * @param {object} action 
 * @param {string} action.type
 * @param {object} action.payload
 * @param {Number} action.payload.id
 * @param {string} action.payload.name
 * @param {boolean} action.payload.completed
 */
const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case TODO_COUNTER:
            return {
                ...state,
                counter: state.counter + 1,
            };
        case TODO_ADD:
            return {
                ...state,
                // une a los todos actuales el nuevo todo y retorna la nueva lista
                todos: state.todos.concat([action.payload]),
            };
        case TODO_ADD_COMMENT:
            return {
                ...state,
                todos: state.todos.map(todo => {
                    const isCurrentTodo = todo.id === action.payload.id;
                    // si es el elemento que requerimos, cambiamos el estado
                    return isCurrentTodo ? ({...todo, comment: action.payload.comment }) : todo;
                }),
            }
        case TODO_REMOVE:
            return {
                ...state,
                // solo retorna la lista donde el todo sea distinto a
                // lo pasado en la accion
                todos: state.todos.filter(todo => todo.id !== action.payload.id),
            };
        case TODO_COMPLETED:
            return {
                ...state,
                todos: state.todos.map(todo => {
                    const isCurrentTodo = todo.id === action.payload.id;
                    // si es el elemento que requerimos, cambiamos el estado
                    return isCurrentTodo ? ({...todo, completed: true }) : todo;
                }),
            };
        case TODO_UNCOMPLETED:
            return {
                ...state,
                todos: state.todos.map(todo => {
                    const isCurrentTodo = todo.id === action.payload.id;
                    // si es el elemento que requerimos, cambiamos el estado
                    return isCurrentTodo ? ({...todo, completed: false }) : todo;
                }),
            };
        case TODO_SHOW_FILTER:
            let todosResp = state.todos;
            let filteredState = {todos: []};
            if(action.filter == 'TODO_SHOW_ACTIVE'){
                filteredState.todos = state.todos.filter( todo => todo.completed == false )
                return {
                    ...state,
                    // solo retorna la lista donde el todo sea distinto a
                    // lo pasado en la accion
                    todos: filteredState.todos,
                }
              }
            if(action.filter == 'TODO_SHOW_COMPLETED'){
                filteredState.todos = state.todos.filter( todo => todo.completed == true )
                return {
                    ...state,
                    // solo retorna la lista donde el todo sea distinto a
                    // lo pasado en la accion
                    todos: filteredState.todos,
                }
            }
            if(action.filter == 'TODO_SHOW_ALL'){
                return {
                    ...state,
                    todos: todosResp,
                }
            }
        default:
            return state;
    }
}

export default todosReducer;