import BillingInfo from "./BillingInfo"
import Buttons from "./Buttons"

function Stepper() {
  return (
    <div>
      <div>
        <h2>Complete your Purchase</h2>
      </div>
      {/* <Navigate />
      <PersonalInfo /> */}
      <BillingInfo/>
      {/* <ConfirmPayment/> */}
      {/* <Complete/> */}
      <Buttons/>
    </div>
  )
}

export default Stepper