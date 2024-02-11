import './App.css';
import Navbar from './component/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import TextForm from './component/TextForm';
import { useState } from 'react';
import Abous from './component/Abous';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  const [mode, setmode] = useState('light');
  const ToggleMode=()=>
  {
    if (mode==='light')
    {
      setmode('dark');
      document.body.style.backgroundColor='#042743';
    }
    else
    {
      setmode('light');
      document.body.style.backgroundColor='white';
    }
    
    
  }
  return (
    <>
    <BrowserRouter>
    <Navbar mode={mode} toggleMode={ToggleMode}></Navbar>
      <Routes>  
        <Route path='/' element={<TextForm title = "Enter your Name: "title_2 ="Enter some Text here: " mode={mode}></TextForm>}></Route>
        <Route path='/about' element={<Abous></Abous>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
