import logo from './logo.svg';
import './App.css';
import Login from './Login';
import { BrowserRouter , Route , Routes} from "react-router-dom";
import Addproduct from './Addproduct';
import Displaytm from './Displaytm';
import Addtasks from './Addtasks';
import Edittasks from './Edittasks';
import Detailedtransactions from './Detailedtransactions';
import Transactionsummary from './Transactionsummary';

function App() {
  return (
    // <div className="App">
    //  <Route path='/' element={<Login/>}/>
     
    // </div>
    <BrowserRouter>
    <Routes>
    
     <Route path='/' element={<Login/>}/>
     <Route path='/add' element={<Addproduct/>}/>
     <Route path='/displaytm' element={<Displaytm/>}/>
     <Route path='/Addtasks' element={<Addtasks/>}/>
     <Route path="edittasks/:id/edit" element={<Edittasks/>}/>
     <Route path="/displaytrans" element={<Detailedtransactions/>}/>
     <Route path="/transactionsummary" element={<Transactionsummary/>}/>
     
   </Routes>
    </BrowserRouter>
  );
}

export default App;
