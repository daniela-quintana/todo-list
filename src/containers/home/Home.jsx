import React, { useState } from 'react';
import { connect, batch } from 'react-redux';
import {
    addTodo,
    removeTodo,
    completedTodo,
    uncompletedTodo,
    increaseCounter,
} from '../../store/actions/todos.actions';
import { Table, TodoForm } from '../../components';
import HomeOver from '../../components/home-over/HomeOver';
import { Container } from 'reactstrap';

const Home = (props) => {

    const [loading, setLoading] = useState(true);

    setTimeout( () => {
        setLoading(false);
    },5200);

    const {
        counter,
        todos,
        addTodo,
        removeTodo,
        completedTodo,
        uncompletedTodo,
    } = props;

    return (
        <div className="home col-md-12">
            { loading
                ?
                    <Container>
                        <HomeOver />
                    </Container>
                :
                    <Container>
                        <TodoForm counter={counter} addTodo={addTodo} />
                        <Table
                            todos={todos}
                            removeTodo={removeTodo}
                            uncompletedTodo={uncompletedTodo}
                            completedTodo={completedTodo}
                        />
                    </Container>
            }
        </div>
    );
};

// simplemente se retorna la parte de los todos al componente
const mapStateToProps = state => state.todos;

const maDispatchToProps = (dispatch) => {
    return {
        addTodo: (todo) => {
            // batch permite que los componentes solo
            // renderizen cuando ambas acciones esten completadas
            batch(() => {
                dispatch(increaseCounter());
                dispatch(addTodo(todo));
            })
        },
        removeTodo: todo => dispatch(removeTodo(todo)),
        completedTodo: todo => dispatch(completedTodo(todo)),
        uncompletedTodo: todo => dispatch(uncompletedTodo(todo)),
    };
};

export default connect(
    mapStateToProps,
    maDispatchToProps,
)(Home);
