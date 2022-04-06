function Deposit(){
  const [show, setShow]         = React.useState(true);
    const [status, setStatus]     = React.useState('');
    const [depositAmount, setDepositAmount]         = React.useState(0);
 


    const ctx = React.useContext(UserContext);  
    var bal = ctx.users[0].balance ;


    function validate(field, label){
      var d = depositAmount;
      console.log('d = ' + d);
        if (!field) {
          setStatus('Error: ' + label);
          setTimeout(() => setStatus(''),3000);
          return false;
        }
        else if (isNaN(d)){
          setStatus('Error: No special characters or letters accepted');
          setTimeout(() => setStatus(''),3000);
          return false;
        }
        else if (d < 0) {
          setStatus('Error: Must enter positive value ' );
          setTimeout(() => setStatus(''),3000);
          return false;
        }

        return true;
    }
     
    const handleDeposit = (event) => {
      var depo = depositAmount;
      if (!validate(depositAmount,  'Must enter amount to withdraw,(no special characters or negative values accepted)')){
      return
      };
      let newTotal = +bal + +depo;
      ctx.users[0].balance = newTotal;
      console.log(newTotal);

      ctx.users.push({depositAmount,balance});
      setShow(false);
    };
         
     
        function clearForm(){
          setDepositAmount('');
          setShow(true);
        }

    return (
          <Card
            bgcolor="primary"
            header="Deposit"
            status={status}
            body={show ? (  
                    <>
                    Balance
                <br/> 
                <br/>
                Your Current Balance is: ${bal}.00
               <br/>
               <br/>
                   DepositAmount<br/>
                    <input type="input" className="form-control" id="depositAmount" placeholder="Deposit Amount" value={depositAmount} onChange={e => setDepositAmount(e.currentTarget.value)} /><br/>
                 
                    <button type="submit" className="btn btn-light" onClick={handleDeposit}>Deposit Amount</button>
                    </>
                  ):(
                    <>
                    <h5>Success</h5>
                    <button type="submit" className="btn btn-light" onClick={clearForm}>Deposit more</button>
                    </>
                  )}
          />
        )
      }
    



  
 