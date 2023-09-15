import Tab from "../Tab"

type VerticalTabsProps = {
  tabs: string[]
}

const VerticalTabs = ({ tabs }: VerticalTabsProps) => {
  return (
    <nav>
      <ul>
        {tabs.map((tab: string, index: number) => <Tab index={index + 1} title={tab} />)}
      </ul>
    </nav>
  )
}

export default VerticalTabs
