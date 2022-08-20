import BillingInfo from "./components/BillingInfo";
import Complete from "./components/Complete";
import ConfirmPayment from "./components/ConfirmPayment";
import Navigate from "./components/Navigate";
import PersonalInfo from "./components/PersonalInfo";

function App() {
  return (
    <div className="app">
      <div>
        <h2>Complete your Purchase</h2>
      </div>
      <Navigate />
      <PersonalInfo />
      {/* <BillingInfo/> */}
      {/* <ConfirmPayment/> */}
      {/* <Complete/> */}
    </div>
  );
}

export default App;
