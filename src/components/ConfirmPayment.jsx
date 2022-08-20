import Buttons from "./Buttons"

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
    </div>
  )
}

export default ConfirmPayment