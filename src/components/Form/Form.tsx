import { useState, useRef } from "react";
import css from "./Form.module.css"

interface Props{
  onSubmit: (cred: { emial: string; password: string }) => void;
}

const Form = ({onSubmit}: Props) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const formRef = useRef(null);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default: console.warn(`Noname field - ${name}`);
    }
  }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      console.log(`User is auth`);
    }

  return (
    <form
      onSubmit={handleSubmit}
      className={css.form}
      ref={formRef}
    >
      <label className={css.label}>
        Email:
        <input
          type="mail"
          placeholder="Email"
          name="email"
          value={email}
          onChange={onChange}
          />
      </label>
      <label className={css.label}>
        Password:
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={onChange}
        />
      </label>

      <button type="submit">Submit</button>
    </form>
  )
}

export default Form