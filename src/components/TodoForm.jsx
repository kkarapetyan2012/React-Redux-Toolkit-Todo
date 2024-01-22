import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todos/todosSlice';
import { v4 as uuidv4 } from 'uuid';

function TodoForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [deadline, setDeadline] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) return;

    dispatch(addTodo({
      id: uuidv4(),
      title,
      description,
      deadline,
      completed: false
    }));

    setTitle('');
    setDescription('');
    setDeadline('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={{display: 'flex', alignItems: 'center', flexWrap: 'wrap'}}>
      <div style={{marginLeft: 12}}>
        <label>Title: </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div style={{marginLeft: 12}}>
        <label>Description: </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div style={{marginLeft: 12}}>
        <label>Deadline: </label>
        <input
          type="date"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
        />
      </div>
      <button style={{marginLeft: 12}} type="submit">Add Todo</button>
      </div>
    </form>
  );
}

export default TodoForm;