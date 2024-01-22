import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter, selectFilter } from '../features/todos/todosSlice';

function Filter() {
  const dispatch = useDispatch();
  const currentFilter = useSelector(selectFilter);

  return (
    <div style={{marginTop: 12, marginBottom: 12}}>
      {['all', 'completed', 'incomplete'].map((filter) => (
        <button 
          key={filter}
          disabled={currentFilter === filter}
          onClick={() => dispatch(setFilter(filter))}
          style={{marginLeft: 12}}
        >
          {filter.charAt(0).toUpperCase() + filter.slice(1)}
        </button>
      ))}
    </div>
  );
}

export default Filter;

