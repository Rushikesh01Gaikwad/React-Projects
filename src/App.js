import './App.css';
import Navbar from './component/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import TextForm from './component/TextForm';

function App() {
  return (
    <>
      <Navbar></Navbar>
    <div className="container">
    <TextForm title = "Enter your Name: "title_2 ="Enter some Text here: "></TextForm>
    </div>
    </>
  );
}

export default App;
