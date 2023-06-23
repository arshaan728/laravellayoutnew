import axios from 'axios';
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Detailedtransactions = () => {

    const [studentstasks, setstudents] = useState([]);
    const [subdetails,setsubdetails] = useState([]);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = (id) => {
        setShow(true);
        fetch("http://148.251.225.118:3200/api/detailed-transaction")
        .then(res=>{return res.json()})
        .then(response=>{
            console.log(response.transaction.transaction_list[id]);
            setsubdetails(response.transaction.transaction_list[id-1]);

           
        })
        .catch(error=>{console.log(error)});

    } 
    useEffect(()=>{
        const getlist = () =>{
            fetch("http://148.251.225.118:3200/api/detailed-transaction")
            .then(res=>{return res.json()})
            .then(response=>{
                console.log(response.transaction)
                setstudents(response.transaction.transaction_list)
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
          <th>id</th>
          <th>paymentMode</th>
          <th>custMobile</th>
          <th>view</th>
       
        
        </tr>
      </thead>
      <tbody>
     {
        studentstasks?.map((pdata,index)=>(
            <tr key={index}>
                <td>{pdata.id}</td>
                <td>{pdata.paymentMode}</td>
                <td>{pdata.custMobile}</td>
                {/* <td><button onClick={()=>disp(pdata.id)}>view</button></td> */}
                <td> <Button variant="primary" onClick={()=>handleShow(pdata.id)}>
        view
      </Button></td>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p>
            id:{subdetails.id}
            </p>
            <p>
                custMobile: {subdetails.custMobile}
            </p>
            <p>
                paymentMode: {subdetails.paymentMode}
            </p>
            <p>
                cardLabel:{subdetails.cardLabel}
            </p>
            <p>
                invoiceNo:{subdetails.invoiceNo}
            </p>
            <p>
                amount:{subdetails.amount}
            </p>
            <p>
                currency:{subdetails.currency}
            </p>
            <p>
                pan:{subdetails.pan}
            </p>
            <p>
                dateTime:{subdetails.dateTime}
            </p>
           
            </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
                
              
            </tr>
        ))
     }
      </tbody>
    </Table>
    </div>
)
}
export default Detailedtransactions;