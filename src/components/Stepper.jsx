import { useState } from "react";
import BillingInfo from "./BillingInfo";
import PersonalInfo from "./PersonalInfo";
import Complete from "./Complete";
import Buttons from "./Buttons";
import ConfirmPayment from "./ConfirmPayment";
import Navigate from "./Navigate";

function Stepper() {
  const [step, setStep] = useState("personal");

  const nextStep = () => {
    setStep((prev) => {
      if (prev === "personal") return "billing";
      if (prev === "billing") return "payment";
      if (prev === "payment") return "complete";
      return "personal";
    });
  };

  return (
    <div className="stepper-body">
      {step !== "complete" && (
        <>
          <div>
            <h2>Complete your Purchase</h2>
          </div>
          <Navigate step={step} />
        </>
      )}
      <div className="steps">
        {step === "personal" && <PersonalInfo />}
        {step === "billing" && <BillingInfo />}
        {step === "payment" && <ConfirmPayment />}
        {step === "complete" && <Complete setStep={setStep} />}
      </div>
      {step !== "complete" && (
        <Buttons step={step} nextStep={nextStep} setStep={setStep} />
      )}
    </div>
  );
}

export default Stepper;
