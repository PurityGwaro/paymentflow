import Buttons from "./Buttons"

function BillingInfo() {
  return (
    <form>
        <div className="form-group">
            <label htmlFor="firstName">Name on Card</label>
            <input type="text" className="form-control" id="name" placeholder="John Doe" required/>
        </div>
        <div className="form-group">
            <label htmlFor="lastName">Card Type</label>
            <input type="text" className="form-control" id="cardType" placeholder="Visa" required/>
        </div>
        <div className="card-details">
                {/* card details */}
            <div className="form-group">
                <label htmlFor="card">Card Details</label>
                <input type="text" className="form-control" id="card" placeholder="1234 5678 9012 3456" required/>
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
    </form>
  )
}

export default BillingInfo