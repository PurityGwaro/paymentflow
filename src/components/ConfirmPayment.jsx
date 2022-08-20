function ConfirmPayment() {
  return (
    <div className="confirm-pay">
      <div className="contain-pay">
        <div className="table-header flex flex-row">
            <span>Item Name</span>
            <span>N Price</span>
          </div>

          <div className="table-body flex flex-row">
            <span>Data science and usability</span>
            <span>50,000.00</span>
          </div>
          <div className="flex flex-row">
            <span>Shipping</span>
            <span>0.00</span>
          </div>
          <div style={{padding: '0 2rem 0 2rem'}} >
            <hr />
          </div>
          <div className="flex-row">
            <div className="total flex">
                <span>Total</span>
                <span>50,000.00</span>
            </div>
          </div>
      </div>
    </div>
  );
}

export default ConfirmPayment;
