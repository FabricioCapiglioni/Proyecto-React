import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import NavBar from './components/NavBar/NavBar';
import Carousel from './components/Carousel/Carousel.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
//import Counter from './components/Counter/Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <Carousel/> 
      </header>
      <body>
        <main>
          <ItemListContainer/>
         {/*  <Counter stok="5" initial="1"/> */}
        </main>
      </body>
    </div>
  );
}

export default App;
