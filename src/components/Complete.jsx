

function Complete({setStep}) {
  return (
    <div className="complete-card">
        
        <div className="tick">
            <img src="https://img.icons8.com/color/48/000000/checkmark.png" alt="tick"/>
        </div>
        <div className="complete-card-words">
          <h1 className="complete-card-heading">Purchase Complete</h1>
          <p className="complete-card-paragraph">Please check your email for details concerning this transaction</p>
        </div>
        <div className="complete-card-button">
          <button className="btn-home" type="button" onClick={() => setStep('personal')}>Return Home</button>
        </div>
    </div>
  )
}

export default Complete