function Buttons({ step, nextStep, setStep }) {

  return (
    <div className="btn-container">
        <button type="button" className="btn1" onClick={() => nextStep()}>
          {step === "payment" ? 'Pay' : 'Next'}
        </button>
      <button
        type="button"
        className="btn2"
        onClick={() => setStep("personal")}
      >
        Cancel Payment
      </button>
    </div>
  );
}

export default Buttons;
