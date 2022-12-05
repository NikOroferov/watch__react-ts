interface Props{
  total: number;
  completed: number;
}

const Stats = ({total, completed}: Props) => {
  return (
    <div>
      <strong>
        Total: {total}
      </strong>
      <strong>
        Completed: {completed}
      </strong>
    </div>
  )
}

export default Stats;