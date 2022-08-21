import { useState,useEffect } from 'react'
 
function PersonalInfo() {
    const [form, setForm] = useState({});

    const handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        setForm({
          [name]: value
        });
      }
    
    useEffect(()=>{
        console.log({form});
    }, [form]);

  return (
    <form>
        <div className="form-group">
            <label htmlFor="firstName">Name</label>
            <input type="text" name="name" id="name" placeholder="Jane Doe" value={form.name} onChange={(e) => handleInputChange(e)}/>
        </div>
        <div className="form-group">
            <label htmlFor="lastName">Email Address<sup>*</sup></label>
            <small className="email-description">The purchase receipt would be sent to this address</small>
            <input type="text" name="email" id="lastName" placeholder="janedoe@..." onChange={(e) => handleInputChange(e)}/>
        </div>
        <div className="form-group">
            <label htmlFor="address1">Address 1</label>
            <input type="text" id="address1" placeholder="address1" name='address1' onChange={(e) => handleInputChange(e)}/>
        </div>
        <div className="form-group">
            <label htmlFor="address2">Address 2</label>
            <input type="text" id="address2" placeholder="address2" name='address2' onChange={(e) => handleInputChange(e)}/>
        </div>
        <div className="state">
                {/* setup country selection  */}
            <div className="form-group">
                <label htmlFor="country">Local Government</label>
                {/* input country name */}
                <input type="text" id="country" placeholder="Nigeria" name='country' onChange={(e) => handleInputChange(e)}/>
            </div>
          
            <div className="form-group">
                <label htmlFor="state">State</label>
                <select className="form-control" id="state" name='state' onChange={(e) => handleInputChange(e)}>
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