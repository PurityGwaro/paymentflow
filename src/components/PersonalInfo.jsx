
function PersonalInfo() {
  return (
    <form>
        <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input type="text" className="form-control" id="firstName" placeholder="First Name" />
        </div>
        <div className="form-group">
            <label htmlFor="lastName">Email Address</label>
            <input type="text" className="form-control" id="lastName" placeholder="Last Name" />
        </div>
        <div className="form-group">
            <label htmlFor="email">Address 1</label>
            <input type="email" className="form-control" id="email" placeholder="Email" />
        </div>
        <div className="form-group">
            <label htmlFor="phone">Address 2</label>
            <input type="text" className="form-control" id="phone" placeholder="Phone" />
        </div>
        <div className="state">
                {/* setup country selection  */}
            <div className="form-group">
                <label htmlFor="country">Local Government</label>
                {/* input country name */}
                <input type="text" className="form-control" id="country" placeholder="Country" />
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
        <div className="buttons">
                {/* button next and cancel payment */}
            <button className="btn">next</button>
            <button className="btn">cancel payment</button>
        </div>
    </form>
  )
}

export default PersonalInfo