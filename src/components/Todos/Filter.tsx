interface Props{
  value: string;
  onChange: (filter: string) => void;
}

const Filter = ({value, onChange}: Props) => {
  return (
    <div>
      <p>
        Filter by value
      </p>
      <input
        name="filter"
        type="text"
        placeholder="Filter todos"
        value={value}
        onChange={(event)=> onChange(event.target.value)}
      />
    </div>
  )
}

export default Filter;