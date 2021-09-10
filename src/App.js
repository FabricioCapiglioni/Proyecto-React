import { useState } from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import NavBar from './components/NavBar/NavBar';
import Carousel from './components/Carousel/Carousel.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
//import Counter from './components/Counter/Counter';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {

  const [ count , setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <NavBar count={count} />
        <Carousel/> 
      </header>
      <body>
        <main>
          <ItemListContainer/>
         {/*  <Counter stok="5" initial="1"/> */}
         <ItemDetailContainer count={count} setCount={setCount} />
        </main>
      </body>
    </div>
  );
}

export default App;
