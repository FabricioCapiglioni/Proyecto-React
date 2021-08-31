import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import NavBar from './components/NavBar/NavBar';
import Carousel from './components/Carousel/Carousel.js';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <NavBar/>
        <Carousel/> 
        
        
      </header>
    </div>
  );
}

export default App;
