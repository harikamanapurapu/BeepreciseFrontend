import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Homepage from './Components/HomePage';

function App() {




  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Register />}></Route>
          <Route path='/Login' element={<Login />}></Route>
          <Route path='/homepage' element={<Homepage/>}></Route>
        </Routes>
     </BrowserRouter>
  );
}

export default App;

