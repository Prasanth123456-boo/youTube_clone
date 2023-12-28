
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Video from './components/video';
import Btnflex from './components/Btnflex';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="container-fluid  ">
        <div className="row">
          <div className="col-md-1 "><Sidebar/> </div>
          <div className="col ">
            <div><Btnflex/></div>
            <div className='vide'>
            <Video/>
            </div>
            
            </div>
        </div>
          
      </div>
     

      

      
      
    </div>
  );
}

export default App;
