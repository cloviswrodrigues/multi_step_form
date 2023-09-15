type TabProps = {
  index: number,
  title: string
}

const Tab = ({ index, title }: TabProps) => {
  return (
    <li>
      <div>{index}</div>
      <div>
        <span>Step {index}</span>
        <p>{title}</p>
      </div>
    </li>
  )
}

export default Tab
