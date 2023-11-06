import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider( {children}) {
    
const [openModal, setOpenModal] = React.useState(false);

const {item: todos,saveItem: saveTodos, loading, error} = useLocalStorage('TODOS_V1', []);
  
const [searchValue, setSearchValue] = React.useState('');

const [congratsMsg,setCongratsMsg] = React.useState('');

const completedTodos = todos.filter(todo => todo.completed).length;
const totalTodos = todos.length;

const searchedTodos = todos.filter (
  todo => todo.text.toLowerCase().includes(searchValue.toLowerCase())
);


const toggleTodo= (text) =>{
  const newTodos = [...todos];
  const todoIndex =newTodos.findIndex((todo) => todo.text === text);
  if (newTodos[todoIndex].completed == true) 
    newTodos[todoIndex].completed = false
    else 
    newTodos[todoIndex].completed = true
  ;
  saveTodos(newTodos);
}

const deleteTodo= (text) =>{
  const newTodos = [...todos];
  const todoIndex =newTodos.findIndex((todo) => todo.text === text);
  newTodos.splice(todoIndex, 1);
  saveTodos(newTodos);
}

const addTodo = (text) => {
  const newTodos = [...todos];
  newTodos.push({
    text,
    completed : false
  });
  saveTodos(newTodos);
}
    
    
    return (
        <TodoContext.Provider value = {{
            completedTodos,
            totalTodos,
            congratsMsg,
            setCongratsMsg,
            searchValue,
            setSearchValue,
            searchedTodos,
            toggleTodo,
            deleteTodo,
            loading,
            error,
            openModal,
            setOpenModal,
            addTodo
        }}>
            {children}
        </TodoContext.Provider>
    );


}

export {TodoContext , TodoProvider}