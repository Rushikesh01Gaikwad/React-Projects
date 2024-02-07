import './App.css';
import Navbar from './component/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import TextForm from './component/TextForm';
import { useState } from 'react';

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
    <div className="container">
    <TextForm title = "Enter your Name: "title_2 ="Enter some Text here: " mode={mode}></TextForm>
    </div>
    </>
  );
}

export default App;
