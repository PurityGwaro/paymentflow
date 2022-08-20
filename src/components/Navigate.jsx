

function Navigate({step}) {
  return (
    <>
    <ul className="nav">
        <li className={step === 'personal' ? 'li-active' : ''}>Personal Details</li>
        <li className={step === 'billing' ? 'li-active' : ''}>Billing Information</li>
        <li className={step === 'payment' ? 'li-active' : ''}>Confirm Payment</li>
    </ul>
    </>
  )
}

export default Navigate