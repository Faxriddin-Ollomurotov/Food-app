import './App.css';
import Maxsulotlar from './Components/Vazifa-2/Maxsulotlar/maxsulotlar';
import Navbar from './Components/Vazifa-2/navbar/Navbar';
import Sidebar from './Components/Vazifa-2/Sidebar/Sidebar';
function App() {
  return (
    <div className="App">
      <Sidebar/>
      <div className='container'>
         <Navbar/>
         <Maxsulotlar/>
      </div>
    
    </div>
  );
}

export default App;
