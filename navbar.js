function NavBar(){
  return(
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light ">
      <a className="navbar-brand" href="#" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Welcome to BadBank">BadBank</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#/CreateAccount/"data-bs-toggle="tooltip" data-bs-placement="bottom" title="Create Your Account"  >Create Account</a>
           
            
          </li>
        
          <li className="nav-item">
            <a className="nav-link" href="#/deposit/" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Add money to your account">Deposit</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/withdraw/" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Wiithdraw money from your account">Withdraw</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/alldata/" data-bs-toggle="tooltip" data-bs-placement="bottom" title="View all information">AllData</a>
          </li>          
        </ul>
      </div>
    </nav>
    </>
  );
}