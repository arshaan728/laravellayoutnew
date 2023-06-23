import Table from 'react-bootstrap/Table';
import { useEffect, useState } from 'react';

const Transactionsummary = () => {
    
    const [studentstasks, setstudents] = useState([]);
    useEffect(()=>{
        const getlist = () =>{
            fetch("http://148.251.225.118:3200/api/transaction-summary")
            .then(res=>{return res.json()})
            .then(response=>{
                console.log(response.summery)
                setstudents(response.summery)
            })
            .catch(error=>{console.log(error)});

        }
        getlist();
    },[]);
return (
    <div>
         <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>totalTransactionCount</th>
          <th>totalRevenue</th>
          <th>totalCardTransaction</th>
          <th>totalCashTransaction</th>
          <th>totalQrTransaction</th>
         
        
        </tr>
      </thead>
      <tbody>
        <tr>
            <td>{JSON.stringify(studentstasks.totalTransactionCount)}</td>
            <td>{JSON.stringify(studentstasks.totalRevenue)}</td>
            <td>{JSON.stringify(studentstasks.totalCardTransaction)}</td>
            <td>{JSON.stringify(studentstasks.totalCashTransaction)}</td>
            <td>{JSON.stringify(studentstasks.totalQrTransaction)}</td>
        </tr>
     {/* {
        studentstasks?.map((pdata,index)=>(
            <tr key={index}>
                <td>{pdata.totalTransactionCount}</td>
                <td>{pdata.totalRevenue}</td>
                <td>{pdata.totalCardTransaction}</td>
                <td>{pdata.totalCashTransaction}</td>
                <td>{pdata.totalQrTransaction}</td>
              
            </tr>
        ))
     } */}
      </tbody>
    </Table>
    </div>
)
}

export default Transactionsummary;