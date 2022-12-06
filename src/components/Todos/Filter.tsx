import css from "./Todos.module.css"

interface Props{
  value: string;
  onChange: (filter: string) => void;
}

const Filter = ({value, onChange}: Props) => {
  return (
    <div>
      <input
        name="filter"
        type="text"
        placeholder="Filter todos by value"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className={css.filter}
      />
    </div>
  )
}

export default Filter;