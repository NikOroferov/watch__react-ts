import { useState, useEffect, useMemo } from "react";

import TodoEditor from "./TodoEditor";
import Filter from "./Filter";
import Stats from "./Stats";
import Todolist from "./Todolist";

import ITodo from "../../interfaces/Todo.interfaces";

// const initialTodos = [
//   {id: 1,  text: 'Todos description0', completed: false},
//   {id: 2, text: 'Todos description1', completed: false},
//   {id: 3, text: 'Todos description2', completed: false},
//   {id: 4, text: 'Todos description3', completed: false},
// ]

const getInitialTodoState = () => {
  const savedTodos = localStorage.getItem('todos');

  return savedTodos ? JSON.parse(savedTodos) : [];
}


const Todos = () => {
  const [todos, setTodos] = useState<ITodo[]>(getInitialTodoState);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));

  }, [todos]);


  const addTodo = (text: string) => {
    const todo = {
      id: Date.now(),
      text,
      completed: false
    }

    setTodos(todos => [todo, ...todos]);
  }

  const deleteTodo = (todoId: number) => {
    const newTodos = todos.filter(todo => todo.id !== todoId);

    setTodos(newTodos);
  }

  const toggleCompleted = (todoId: number) => {
    setTodos(todos => todos.map(todo=> todoId === todo.id ? {...todo, completed: !todo.completed} : todo))
  }

  const changeFilter = (filter: string) => {
    setFilter(filter);
  }

  const visibleTodos = useMemo(() => {
    const normalizedFilter = filter.toLowerCase();

    return todos.filter(todo => todo.text.toLowerCase().includes(normalizedFilter));
  }, [filter, todos]);

  const completedTodoCount = useMemo(() => {
    return todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0
    );
  },[todos])

  return (
    <>
      <TodoEditor onSubmit={addTodo} />

      <div>
        <Filter
          value={filter}
          onChange={changeFilter}
        />
        <Stats
          total={todos.length}
          completed={completedTodoCount}
        />
      </div>

      <Todolist
        todos={visibleTodos}
        onDeleteTodo={deleteTodo}
        onToggleCompleted={toggleCompleted}
      />
    </>
  )
}

export default Todos