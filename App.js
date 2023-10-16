import logo from './kl logo.png';
import './App.css'; 
import ResponsiveAppBar from './ui/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import clg from './ui/clg';

function App() { 
  return ( 
    <BrowserRouter>
    <div> 
      <ResponsiveAppBar/>
      <clg>
      <Routes>
      
        <Route path='CSE-H' elements={<clg/>}/>
       
      </Routes>
      </clg>
    </div> 
    </BrowserRouter>
  ); 
} 
 
export default App;