import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import ViewEmployees from './Components/ViewEmployees';

function App() {
  return (
    <>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/employees' element={<ViewEmployees/>}/>


  
  </Routes>     
    </>
  );
}

export default App;
