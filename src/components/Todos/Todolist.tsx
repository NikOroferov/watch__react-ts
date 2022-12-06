import ITodo from "../../interfaces/Todo.interfaces";
import css from "./Todos.module.css"

interface Props{
  todos: ITodo[];
  onDeleteTodo: (todoId: number) => void;
  onToggleCompleted: (todoId: number) => void;
}

const Todolist = ({ todos, onDeleteTodo, onToggleCompleted }: Props) => {

  return (
    <ul className={css.todo__list}>
      {todos.map(({ id, text, completed }: ITodo) => (
        <li className={css.todo__item} key={id}>
          <p>{text}</p>
          <form className={css.todo__item__form}>
            <input
              className="todo-input"
              type="checkbox"
              checked={completed}
              onChange={() => onToggleCompleted(id)}
            />
            <button
              type="button"
              onClick={()=>onDeleteTodo(id)}
            >Delete</button>

          </form>
        </li>
      ))}
    </ul>
  )
}

export default Todolist