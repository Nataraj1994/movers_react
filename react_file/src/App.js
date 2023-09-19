
import './App.css';
import Nav from '../src/components_js/nav'
import Home from '../src/components_js/home'
import About from '../src/components_js/about'
import {Login} from '../src/components_js/login'
import Signup from '../src/components_js/signup'
import Contact from './components_js/contctus'
// import AuthDetails from './components_js/userlogin';


import { BrowserRouter, Route, Routes ,Switch} from 'react-router-dom';
// import AuthDetails from './components_js/userlogin';
function App() {
  return ( 
    <div className="App">
      <BrowserRouter>
     <Nav />
          
       <Routes>
          <Route path='/' element={<h2>< Home /></h2>}/>
          <Route path='/about' element={<h2>< About /></h2>}/>
          <Route path='/login' element={<h2>< Login /></h2>}/>
          <Route path='/contact' element={<h2>< Contact /></h2>}/>
          <Route path='/signup' element={<h2>< Signup /></h2>}/>
          {/* <Route path='/userlogin' element={<h2>< AuthDetails /></h2>}/> */}
          
               
        
    


       </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;