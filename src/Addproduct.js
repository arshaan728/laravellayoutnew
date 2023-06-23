import {useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';

const Addproduct = () => {
    const [destinations , setdestiations] = useState([]);
    useEffect(()=>{
        const getdetails = () => {
            fetch("http://148.251.225.118:3200/api/detailed-transaction")
            .then(res=>{return res.json()})
            .then(response=>{
                var x = sessionStorage.getItem("id")
                console.log(sessionStorage.getItem("jwttoken"))
                console.log(response.transaction.transaction_list)
                var num = response.transaction.count

              
                console.log(num);

                for (let i =0;i < num;i++) {
                   
                    var id = response.transaction.transaction_list[i].id;
                    console.log(id,i);
                    if (x==id) {
                        console.log(response.transaction.transaction_list[i]);
                        setdestiations(response.transaction.transaction_list[i]);
                        
                    }
                }
                
            })
            .catch(error=>{console.log(error)})
            
        }
        getdetails();

    },[]);
return (
  <div>
    {JSON.stringify(destinations)}
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>id</th>
          <th>paymentmode</th>
          <th>custmobile</th>
          <th>cardlabel</th>
          <th>invoiceno</th>
          <th>amount</th>
          <th>currency</th>
          <th>pan</th>
          <th>datetime</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>  {JSON.stringify(destinations.id)}
          </td>
          <td> {JSON.stringify(destinations.paymentMode)} </td>
          <td>{JSON.stringify(destinations.custMobile)}</td>
          <td>{JSON.stringify(destinations.cardLabel)}</td>
          <td>{JSON.stringify(destinations.invoiceNo)}</td>
          <td>{JSON.stringify(destinations.amount)}</td>
          <td>{JSON.stringify(destinations.currency)}</td>
          <td>{JSON.stringify(destinations.pan)}</td>
          <td>{JSON.stringify(destinations.dateTime)}</td>
        </tr>
       
      </tbody>
    </Table>
 
  </div>
);
}
export default Addproduct;