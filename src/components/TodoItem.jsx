import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleComplete, deleteTodo, updateTodo } from '../features/todos/todosSlice';

function TodoItem({ todo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(todo.title);
  const [editedDeadline, setEditedDeadline] = useState(todo.deadline);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleComplete({ id: todo.id, completed: !todo.completed }));
  };

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    dispatch(updateTodo({ id: todo.id, title: editedTitle, deadline: editedDeadline }));
    setIsEditing(false);
  };

  return (
    <li style={{display: 'flex', alignItems: 'center', marginBottom: 12}}>
      <input type="checkbox" checked={todo.completed} onChange={handleToggle} />
      {isEditing ? (
        <div>
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
          <input
            type="date"
            value={editedDeadline}
            onChange={(e) => setEditedDeadline(e.target.value)}
          />
        </div>
      ) : (
        <div>
          <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.title} - {todo.description}
          </span>
          <span> (Due by {todo.deadline})</span>
        </div>
      )}
      {isEditing ? (
        <button onClick={handleSave} style={{marginLeft: 12}}>Save</button>
      ) : (
        <button onClick={handleEdit} style={{marginLeft: 12}}>Edit</button>
      )}
      <button onClick={handleDelete} style={{marginLeft: 12}}>Delete</button>
    </li>
  );
}

export default TodoItem;

