import BillingInfo from "./BillingInfo"
import Buttons from "./Buttons"
import ConfirmPayment from "./ConfirmPayment"
import Navigate from "./Navigate"

function Stepper() {
  return (
    <div className="stepper-body">
      <div>
        <h2>Complete your Purchase</h2>
      </div>
      <Navigate />
      {/* 
      <PersonalInfo /> */}
      {/* <BillingInfo/> */}
      <ConfirmPayment/>
      {/* <Complete/> */}
      <Buttons/>
    </div>
  )
}

export default Stepper