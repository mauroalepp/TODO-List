import React from "react";
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { SelectBar } from '../SelectBar'
import { DisplayDay } from '../DisplayDay';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { TodosEmpty } from '../TodosEmpty';
import { Modal } from '../Modal'
import { TodoForm } from '../TodoForm'
import { TodoContext } from "../TodoContext";

function AppUI () {
 const {searchedTodos,
    toggleTodo,
    deleteTodo,
    loading,
    error,
    openModal,
    setOpenModal
  } = React.useContext(TodoContext);  
  
  return (
        <>
          
          <SelectBar />
          <DisplayDay />

          
          <TodoCounter />
          
          <TodoSearch />
    
          
            <TodoList>
            {loading && (
            <>
              <TodosLoading />
              <TodosLoading />
              <TodosLoading />
              <TodosLoading />
            </>
            )}
              {error && <TodosError />}
              {(!loading && searchedTodos.length === 0) && <TodosEmpty />}

              {searchedTodos.map(todo => (
                <TodoItem
                  key={todo.text}
                  text={todo.text}
                  completed={todo.completed}
                  onToggle= {() => toggleTodo(todo.text)}
                  onDelete= {() => deleteTodo(todo.text)}
      
                />
              ))}
            </TodoList>
          <CreateTodoButton 
          setOpenModal = {setOpenModal}/>
          
          {openModal && (
            <Modal>
              <TodoForm />
          </Modal>
          )}
        </>
      );
}

export {AppUI};