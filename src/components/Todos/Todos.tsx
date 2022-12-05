import { useState } from "react";

import TodoEditor from "./TodoEditor";
import Filter from "./Filter";
import Stats from "./Stats";
import Todolist from "./Todolist";

import ITodo from "../../interfaces/Todo.interfaces";

const initialTodos = [
  {id: 1,  text: 'Todos description', completed: false},
  {id: 2, text: 'Todos description', completed: false},
]


const Todos = () => {
  const [todos, setTodos] = useState<ITodo[]>(initialTodos);
  const [filter, setFilter] = useState("");

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

  const getVisibleTodos = () => {
    const normalizedFilter = filter.toLowerCase();

    return todos.filter(todo => todo.text.toLowerCase().includes(normalizedFilter));
  }

  const calculateCompletedTodos = () => {
    return todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0
    );
  };

  const completedTodoCount = calculateCompletedTodos();
  const visibleTodos = getVisibleTodos();

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