import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Login';
import Users from './Users';
import CreateUsers from './createUser'; // Updated component name
import UpdateUsers from './updateUser'; // Updated component name

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/Users' element={<Users />} />
          <Route path='/create' element={<CreateUsers />} />
          <Route path='/update/:id' element={<UpdateUsers />} />
        </Routes>
      </BrowserRouter>
    </div> 
  );
}

export default App;
