import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

import axios from 'axios';

const Addtasks = () => {

    const [txttitle, settitle] = useState('');
    const [txtdescription,setdescriptions] = useState('');
    const [txtduedates , setduedates] = useState('');
    const [txtcompletionstatus, setcompletionstaus] = useState('');

    const uploadstuff = async() => {
        const formData  = new FormData();
        formData.append('title',txttitle);
        formData.append('description',txtdescription);
        formData.append('duedates',txtduedates);
        formData.append('completionstatus',txtcompletionstatus);

        const response = await axios.post("http://127.0.0.1:8000/api/students",formData,{
            headers:{'Content-Type':"multipart/form-data"},
        });
        if (response) {
            console.log(response);
        }
    }

    const handleSubmit = async(e)=>{
        e.preventDefault();
        await uploadstuff();
    }
return (
    <div>
         <Form onSubmit={handleSubmit}>
      <Form.Group as={Row} className="mb-3" >
        <Form.Label column sm="2">
          title
        </Form.Label>
        <Col sm="10">
          <Form.Control   type='text' onChange={(e)=>settitle(e.target.value)}/>
        </Col>
      </Form.Group>

     
      <Form.Group as={Row} className="mb-3" >
        <Form.Label column sm="2">
          description
        </Form.Label>
        <Col sm="10">
          <Form.Control type="text" onChange={(e)=>setdescriptions(e.target.value)} />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" >
        <Form.Label column sm="2">
          duedates
        </Form.Label>
        <Col sm="10">
          <Form.Control type="text" onChange={(e)=>setduedates(e.target.value)}  />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" >
        <Form.Label column sm="2">
          completionstatus
        </Form.Label>
        <Col sm="10">
          <Form.Control type="text"  onChange={(e)=>setcompletionstaus(e.target.value)} />
        </Col>
      </Form.Group>
      
      <Button type='submit' variant="primary">Submit</Button>
    </Form>
    </div>
)
}
export default Addtasks;