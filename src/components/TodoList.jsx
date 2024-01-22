import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';
import { selectTodos, selectFilter } from '../features/todos/todosSlice';

function TodoList() {
  const todos = useSelector(selectTodos);
  const filter = useSelector(selectFilter);

  const getFilteredTodos = () => {
    switch (filter) {
      case 'completed':
        return todos.filter(todo => todo.completed);
      case 'incomplete':
        return todos.filter(todo => !todo.completed);
      default:
        return todos;
    }
  };

  const filteredTodos = getFilteredTodos();

  return (
    <div>
      {filteredTodos.length ? (
        <ul>
          {filteredTodos.map(todo => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </ul>
      ) : (
        <p>No todos to show.</p>
      )}
    </div>
  );
}

export default TodoList;
