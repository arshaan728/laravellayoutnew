import axios from 'axios';
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom'; 
const Displaytm = () => {

const [studentstasks, setstudents] = useState([]);
  
        useEffect(()=>{
            const getlist = () =>{
                fetch("http://127.0.0.1:8000/api/students")
                .then(res=>{return res.json()})
                .then(response=>{
                    console.log(response.students)
                    setstudents(response.students)
                })
                .catch(error=>{console.log(error)});

            }
            getlist();
        },[]);

        const deleteProduct = (id) => {
            axios.delete(`http://127.0.0.1:8000/api/students/${id}/delete`).then(function(response){
                console.log(response.data);
            });
        }

        const filterProduct = (msg) => {
            axios.get(`http://127.0.0.1:8000/api/students/search/${msg}/`).then(function(response){
                console.log(response.data)
                setstudents(response.data);
            })
        }

    
return (
    <div>
<button onClick={()=>filterProduct('no')}>filter incompleted tasks</button>
 <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>id</th>
          <th>title</th>
          <th>description</th>
          <th>duedates</th>
          <th>completionstatus</th>
          <th>edit</th>
          <th>delete</th>
        
        </tr>
      </thead>
      <tbody>
     {
        studentstasks.map((pdata,index)=>(
            <tr key={index}>
                <td>{pdata.id}</td>
                <td>{pdata.title}</td>
                <td>{pdata.description}</td>
                <td>{pdata.duedates}</td>
                <td>{pdata.completionstatus}</td>
                <td><button onClick={()=>deleteProduct(pdata.id)}>delete</button></td>
                <td><Link to={`/edittasks/${pdata.id}/edit`}>edit</Link></td>
              
            </tr>
        ))
     }
      </tbody>
    </Table>
    </div>
)
}

export default Displaytm;