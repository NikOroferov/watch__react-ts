import { useState } from "react"
import css from "./Todos.module.css"

interface Props{
  onSubmit: (message :string) => void;
}

const TodoEditor = ({onSubmit}: Props) => {
  const [message, setMessage] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.currentTarget.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(message);
    setMessage("");
  };

  return (
    <form className={ css.editor} onSubmit={handleSubmit}>
      <textarea
        className={css.textarea}
        value={message}
        onChange={handleChange}
        ></textarea>
      <button
        type="submit"
      >Save</button>
    </form>
  )
}

export default TodoEditor