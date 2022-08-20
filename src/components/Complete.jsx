

function Complete() {
  return (
    <div>
        {/* tick icon */}
        <div className="tick">
            <img src="https://img.icons8.com/color/48/000000/checkmark.png" alt="tick"/>
        </div>
        <h1>Purchase Complete</h1>
        <p>Please check your email for details concerning this transaction</p>
        {/* link to go back to home */}
        <a href="/">Return Home</a>
    </div>
  )
}

export default Complete