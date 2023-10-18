import Title from "../../Title"
import SubTitle from "../../Subtitle"
import { CheckList, PlanCheck, CheckServices, Total } from "./styles"


const Summary = () => {

  return (
    <div>
      <Title>Finishing up</Title>
      <SubTitle>Double-check everything looks OK before confirming.</SubTitle>
      <CheckList>
        <PlanCheck>
          <div>
            <p>Arcade (Monthly)</p>
            <button>Change</button>
          </div>
          <span>$9/mo</span>
        </PlanCheck>
        <hr />
        <CheckServices>
          <div>
            <p>Online service</p>
            <span>+$1/mo</span>
          </div>
          <div>
            <p>Larger storage</p>
            <span>+$2/mo</span>
          </div>
        </CheckServices>
      </CheckList>
      <Total>
        <p>Total (per month)</p>
        <span>+$12/mo</span>
      </Total>
    </div>
  )
}

export default Summary
