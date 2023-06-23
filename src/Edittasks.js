import { FusedConv2D } from "@tensorflow/tfjs";
import axios from "axios";
import React,{useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { wait } from "@testing-library/user-event/dist/utils";

const Edittasks = () => {

    const {id} = useParams();
    console.log(id);
    const [inputs,setInputs] = useState('');
    const [txttitle, settitle] = useState('');
    const [txtdescription,setdescriptions] = useState('');
    const [txtduedates , setduedates] = useState('');
    const [txtcompletionstatus, setcompletionstaus] = useState('');
 

    const uploadstuff = async()=>{
        const formData = new FormData();
        formData.append("_method",'PUT');
        formData.append('title',txttitle);
        formData.append('description',txtdescription);
        formData.append('duedates',txtduedates);
        formData.append('completionstatus',txtcompletionstatus);
        console.log(txtcompletionstatus,txttitle);

        const response= await axios.post(`http://127.0.0.1:8000/api/students/${id}/edit`,formData, {
            headers:{'Content-Type':"multipart/form-data"},
        });
        console.log(response);
    }

    const handleSubmit = async(e) =>{
        e.preventDefault();
        await uploadstuff();
    }

    useEffect(()=>{
        gettasks();
    },[]);

    function gettasks() {
        axios.get(`http://127.0.0.1:8000/api/students/${id}/edit`).then(function(response) {
           console.log(response.data.message);
           setInputs(response.data.message);
        });
    }
return (
    <div>
          <Form onSubmit={handleSubmit} >
      <Form.Group as={Row} className="mb-3" >
        <Form.Label column sm="2">
          title
        </Form.Label>
        <Col sm="10">
          <Form.Control placeholder={inputs.title} type='text' name='title' onChange={(e)=>settitle(e.target.value)}/>
        </Col>
      </Form.Group>

     
      <Form.Group as={Row} className="mb-3" >
        <Form.Label column sm="2">
          description
        </Form.Label>
        <Col sm="10">
          <Form.Control placeholder={inputs.description} type="text" name='description' onChange={(e)=>setdescriptions(e.target.value)}/>
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" >
        <Form.Label column sm="2">
          duedates
        </Form.Label>
        <Col sm="10">
          <Form.Control placeholder={inputs.duedates} type="text" name='duedates'   onChange={(e)=>setduedates(e.target.value)}/>
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" >
        <Form.Label column sm="2">
          completionstatus
        </Form.Label>
        <Col sm="10">
          <Form.Control placeholder={inputs.completionstatus} type="text"  name='completionstatus'   onChange={(e)=>setcompletionstaus(e.target.value)}/>
        </Col>
      </Form.Group>
      
      <Button type='submit' variant="primary">Submit</Button>
    </Form>
    </div>
)
}
export default Edittasks;