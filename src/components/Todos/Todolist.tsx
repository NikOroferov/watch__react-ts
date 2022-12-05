import ITodo from "../../interfaces/Todo.interfaces";

interface Props{
  todos: ITodo[];
  onDeleteTodo: (todoId: number) => void;
  onToggleCompleted: (todoId: number) => void;
}

const Todolist = ({ todos, onDeleteTodo, onToggleCompleted }: Props) => {

  return (
    <ul>
      {todos.map(({ id, text, completed }: ITodo) => (
        <li key={id}>
          <input
            type="checkbox"
            checked={completed}
            onChange={() => onToggleCompleted(id)}
          />
          <p>{text}</p>
          <button
            type="button"
            onClick={()=>onDeleteTodo(id)}
          >Delete</button>
        </li>
      ))}
    </ul>
  )
}

export default Todolist