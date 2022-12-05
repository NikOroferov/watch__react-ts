import { useState } from "react"

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
    <form onSubmit={handleSubmit}>
      <textarea
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