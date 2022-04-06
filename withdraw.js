function Withdraw(){
    const [show, setShow]         = React.useState(true);
    const [status, setStatus]     = React.useState('');
    const [withdrawAmount, setWithdrawAmount]         = React.useState('');
   
   

    const ctx = React.useContext(UserContext);  
    var bal = ctx.users[0].balance;

    function validate(field, label){
      var w = withdrawAmount;
      console.log('w = ' + w);
        if (!field) {
          setStatus('Error: ' + label);
          setTimeout(() => setStatus(''),3000);
          return false;
        }
        else if (isNaN(w)){
          setStatus('Error: No special characters or letters accepted');
          setTimeout(() => setStatus(''),3000);
          return false;
        }
        else if (w < 0) {
          setStatus('Error: Must enter positive value ' );
          setTimeout(() => setStatus(''),3000);
          return false;
        }
        else if (w > bal) {
          setStatus('ERROR: Withdraw amount cannot exceed account balance');
          setTimeout(() => setStatus(''),3000);
          return false;
        }

        return true;
    }

    const handleWithdraw = (event) => {
     // console.log(withdrawAmount);
     var withd = withdrawAmount ;
      if (!validate(withdrawAmount,     'Must enter amount to withdraw,(no special characters or negative values accepted)')) {   return

      };
      let newTotal = +bal - +withd;
      ctx.users[0].balance = newTotal;
      console.log(newTotal);
ctx.users.push({withdrawAmount, balance});
      setShow(false);

    };
 
  

    function clearForm(){
      setWithdrawAmount('');

      setShow(true);
    }
  
    return (
      <Card
        bgcolor="primary"
        header="Withdraw"
        status={status}
        body={ show ? ( 
                <>

                 Balance
                <br/> 
                <br/>
                Your Current Balance is: ${bal}.00
               <br/>
               <br/>
               
             
                Withdraw Amount<br/>
                <input type="input" className="form-control" id="withdrawAmount" placeholder="Withdraw Amount" value={withdrawAmount} onChange={e => setWithdrawAmount(e.currentTarget.value)} /><br/>
              
                <button type="submit" className="btn btn-light" onClick={handleWithdraw}>Withdraw Amount</button>
                </>
              ):(
                <>
                <h5>Success</h5>
                <button type="submit" className="btn btn-light" onClick={clearForm}>Withdraw more</button>
                </>
              )}
      />
    )
  }



  const ATMDeposit = ({ onChange, isDeposit, isValid }) => {
    const choice = ['Deposit', 'Cash Back'];
    console.log(`ATM isDeposit: ${isDeposit}`);
    return (
      <label className="label huge">
        <h3> {choice[Number(!isDeposit)]}</h3>
        <input id="number-input" type="number" width="200" onChange={onChange}></input>
        <input type="submit" disabled={!isValid} width="200" value="Submit" id="submit-input"></input>
      </label>
    );
  };
  
  const Account = () => {
    // let deposit = 0; // state of this transaction
    const [deposit, setDeposit] = React.useState(0);
    const [totalState, setTotalState] = React.useState(0);
    const [isDeposit, setIsDeposit] = React.useState(true);
    const [atmMode, setAtmMode] = React.useState('');
    const [validTransaction, setValidTransaction] = React.useState(false);
  
    let status = `Account Balance $ ${totalState} `;
    console.log(`Account Rendered with isDeposit: ${isDeposit}`);
    const handleChange = (event) => {
      console.log(Number(event.target.value));
      if (Number(event.target.value) <= 0) {
        return setValidTransaction(false);
      }
      if (atmMode === 'Cash Back' && Number(event.target.value) > totalState) {
        setValidTransaction(false);
      } else {
        setValidTransaction(true);
      }
      setDeposit(Number(event.target.value));
    };
    const handleSubmit = (event) => {
      let newTotal = isDeposit ? totalState + deposit : totalState - deposit;
      setTotalState(newTotal);
      setValidTransaction(false);
      event.preventDefault();
    };
  
    const handleModeSelect = (event) => {
      console.log(event.target.value);
      setAtmMode(event.target.value);
      setValidTransaction(false);
      if (event.target.value === 'Deposit') {
        setIsDeposit(true);
      } else {
        setIsDeposit(false);
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <>
          <h2 id="total">{status}</h2>
          <label>Select an action below to continue</label>
          <select onChange={(e) => handleModeSelect(e)} name="mode" id="mode-select">
            <option id="no-selection" value=""></option>
            <option id="deposit-selection" value="Deposit">
              Deposit
            </option>
            <option id="cashback-selection" value="Cash Back">
              Cash Back
            </option>
          </select>
          {atmMode && (
            <ATMDeposit
              onChange={handleChange}
              isDeposit={isDeposit}
              isValid={validTransaction}
            ></ATMDeposit>
          )}
        </>
      </form>
    );
  };