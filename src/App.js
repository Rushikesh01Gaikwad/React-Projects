import './App.css';
import Navbar from './component/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import TextForm from './component/TextForm';
import { useState } from 'react';
import Abous from './component/Abous';
// import pageerror from './component/pageerror';
import Home from './component/Home';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';


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
    <Navbar mode={mode} toggleMode={ToggleMode}></Navbar>
    <TextForm title = "Enter your Name: "title_2 ="Enter some Text here: " mode={mode}></TextForm>
    {/* <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/navbar' element={<Navbar mode={mode} toggleMode={ToggleMode}></Navbar>}></Route>
        <Route path='/textedit' element={<TextForm title = "Enter your Name: "title_2 ="Enter some Text here: " mode={mode}></TextForm>}></Route>
        <Route path='/about' element={<Abous></Abous>}></Route>
        <Route path='*' element={pageerror}></Route>
      </Routes>
    </BrowserRouter> */}
    
    </>
  );
}

export default App;
