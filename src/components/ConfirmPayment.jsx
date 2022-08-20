
function ConfirmPayment() {
  return (
    <div className="card">
        {/* table with two columns */}
        <table className="table">
            <thead>
                <tr>
                    <th>Item Name</th>
                    <th>N Price</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Data science and usability</td>
                    <td>50,000.00</td>
                </tr>
                <tr>
                    <td>Shipping</td>
                    <td>0.00</td>
                </tr>
                <hr/>
                <tr className="total">
                    <td>Total</td>
                    <td>50,000.00</td>
                </tr>
            </tbody>
        </table>
        <div className="buttons">
                {/* button next and cancel payment */}
            <button className="btn">next</button>
            <button className="btn">cancel payment</button>
        </div>
    </div>
  )
}

export default ConfirmPayment