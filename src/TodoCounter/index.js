import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

function TodoCounter() {
  const {
    completedTodos,
    totalTodos,
    setCongratsMsg
  } = React.useContext(TodoContext);

  let {congratsMsg} = React.useContext(TodoContext);

  if (totalTodos === completedTodos && totalTodos !== 0){
    congratsMsg = 'Felicitaciones! Completaste todos los TODOs!';
    setCongratsMsg(congratsMsg);
  }
  return (
    <h1 className="TodoCounter">
      Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOs
      <p>{congratsMsg}</p>
    </h1>
  );
}

export { TodoCounter };
