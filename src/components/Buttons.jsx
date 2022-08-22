function Buttons({ step, nextStep, setStep }) {

  // //set button to disabled if required fields are not filled out
  // const [disabled, setDisabled] = useState(true);
  // const [form, setForm] = useState({});
  
  // const handleInputChange = (event) => {
  //   const target = event.target;
  //   const value = target.value;
  //   const name = target.name;

  //   setForm({
  //     [name]: value
  //   });
  // }


  // const handleSubmit = (e) =>{
  //   e.preventdefault();
  // }

  // useEffect(()=>{
  //   if(form.name && form.email && form.address1 && form.country && form.state){
  //     setDisabled(false);
  //   }else{
  //     setDisabled(true);
  //   }

  // } , [form]);



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
