import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './About';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";



function App() {
  const [mode, setmode] = useState('light'); //WhetherDark Mode Enable or Not
const [alert, setalert] = useState(null)

const showAlert = (message, type)=>{
       setalert ({
         msg: message,
         type: type
       })
}


  const toggleMode = ()=>{
    if(mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor ='#11648bbf';
      showAlert("Dark Mode has been Enable","Success");

    } else {
      setmode('light');
      document.body.style.backgroundColor ='#0b0a0ab5';
      showAlert("Light Mode has been Enable","Success");
    }
  }
  return (
    <>
  <Router>
   <Navbar title ="MyReactClass" about="About Us" mode={mode} toggleMode={toggleMode} />
   {/* <Alert alert={alert} />
 {   <div className='container my-3'>
    <TextForm heading="Enter the Text Field"/>
   </div> } */}
   <div className='container my-3'>
   <Routes>
    <Route path="/about" element={ <About />} />
    <Route path="/" element={ <TextForm />} />
  </Routes>
   
    </div> 
    
    </Router>
   
    </>
  );
}

export default App;
