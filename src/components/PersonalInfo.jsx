import Buttons from "./Buttons"

function PersonalInfo() {
  return (
    <form>
        <div className="form-group">
            <label htmlFor="firstName">Name</label>
            <input type="text" id="name" placeholder="Jane Doe" />
        </div>
        <div className="form-group">
            <label htmlFor="lastName">Email Address</label>
            <small className="email-description">The purchase receipt would be sent to this address</small>
            <input type="text" id="lastName" placeholder="Last Name" />
        </div>
        <div className="form-group">
            <label htmlFor="email">Address 1</label>
            <input type="email" id="email" placeholder="Email" />
        </div>
        <div className="form-group">
            <label htmlFor="phone">Address 2</label>
            <input type="text" id="phone" placeholder="Phone" />
        </div>
        <div className="state">
                {/* setup country selection  */}
            <div className="form-group">
                <label htmlFor="country">Local Government</label>
                {/* input country name */}
                <input type="text" id="country" placeholder="Nigeria" />
            </div>
            {/* input state in the selected country
            <div className="form-group">
                <label htmlFor="state">State</label>
                <input type="text" className="form-control" id="state" placeholder="State" />
            </div> */}
            {/* dropdown input for selecting the state of the country given */}
            <div className="form-group">
                <label htmlFor="state">State</label>
                <select className="form-control" id="state">
                    <option>Select State</option>
                    <option>Abia</option>
                    <option>Adamawa</option>
                    <option>Akwa Ibom</option>
                    <option>Anambra</option>
                </select>
            </div>  
        </div>
    </form>
  )
}

export default PersonalInfo