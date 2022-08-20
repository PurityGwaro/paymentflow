
function BillingInfo() {
  return (
    <form>
        <div className="form-group">
            <label htmlFor="firstName">Name on Card</label>
            <input type="text" className="form-control" id="name" placeholder="John Doe" required/>
        </div>
        <div className="form-group">
            <label htmlFor="lastName">Card Type</label>
            <input type="text" className="form-control" id="cardtype" placeholder="Visa" required/>
        </div>
        <div className="card-details">
                {/* card details */}
            <div className="form-group">
                <label htmlFor="cardnumber">Card Number</label>
                <input type="text" className="form-control" id="cardnumber" placeholder="1234 5678 9012 3456" required/>
            </div>
            {/* input date of expiry */}
            <div className="form-group">
                <label htmlFor="expiry">Expiry Date</label>
                <input type="text" className="form-control" id="expiry" placeholder="MM/YY" required/>
            </div>

                {/* input cvv */}
            <div className="form-group">
                <label htmlFor="cvv">CVV</label>
                <input type="text" className="form-control" id="cvv" placeholder="123" required/>
            </div>
        </div>
        <div className="buttons">
                {/* button next and cancel payment */}
            <button className="btn">next</button>
            <button className="btn">cancel payment</button>
        </div>
    </form>
  )
}

export default BillingInfo