import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask } from '../actions/taskActions';

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  return (
    <li>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default TaskItem;
