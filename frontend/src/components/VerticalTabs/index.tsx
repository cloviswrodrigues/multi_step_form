import Tab from "../Tab"
import { typeTab } from "../../types/tab"

type VerticalTabsProps = {
  tabs: typeTab[]
}

const VerticalTabs = ({ tabs }: VerticalTabsProps) => {
  return (
    <nav>
      <ul>
        {tabs.map((tab: typeTab, index: number) => <Tab index={index + 1} title={tab.title} active={tab.active} />)}
      </ul>
    </nav>
  )
}

export default VerticalTabs
