import BillingInfo from "./components/BillingInfo";
import Complete from "./components/Complete";
import ConfirmPayment from "./components/ConfirmPayment";
import Navigate from "./components/Navigate";
import PersonalInfo from "./components/PersonalInfo";

function App() {
  return (
    <>
      <Navigate />
      {/* <PersonalInfo /> */}
      {/* <BillingInfo/> */}
      {/* <ConfirmPayment/> */}
      <Complete/>
    </>
  );
}

export default App;
