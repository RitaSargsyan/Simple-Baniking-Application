function AllData(){
  const ctx = React.useContext(UserContext);

//strinify data
var data = JSON.stringify(ctx.users);
console.log(data);
//remove quotes
var dataA = data.replace(/"/g, '');
//add space after colons
var dataB = dataA.replace(/:/g, ': ');
//new array of data created
var data2 = dataB.split(",");
console.log(data2)
  
  return (
  
   
    <Card
      txtcolor="white"
      bgcolor="primary"
      header="All User Data"
      title="Account Information:"
      text=" "
      id="demo"
      body={<>
         Current User: <br/>
      Name: {ctx.users[0].name}<br/>
      Email: {ctx.users[0].email}<br/>
      Password: {ctx.users[0].password}<br/>
      Balance: ${ctx.users[0].balance}.00<br/>
      <br/> ALL USERS: <br/>
            {data2[0]}<br/>
            {data2[1]}<br/>
            {data2[2]}<br/>
            {data2[3]}<br/>
            {data2[4]}<br/>
            {data2[5]}<br/>
            {data2[6]}<br/>
            {data2[7]}<br/>
            {data2[8]}<br/>
            {data2[9]}<br/>
            {data2[10]}<br/>
            {data2[11]}<br/>
            {data2[12]}<br/>
            {data2[13]}<br/>
            {data2[14]}<br/>
            {data2[15]}<br/>
      </>}
    />    
  );  

      }
  


   
  
