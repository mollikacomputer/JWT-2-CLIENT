import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About';
import Login from './Components/Login';
import Order from './Components/Order';
import Navbar from './Components/Navbar';
function App() {
  return (
    <div>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='login' element={<Login/>} />
          <Route path='order' element={<Order/>} />
        </Routes>
    </div>
  );
}

export default App;
