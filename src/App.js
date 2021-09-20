import { useState } from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Carousel from './components/Carousel/Carousel.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import AboutUs from './components/AboutUs/AboutUs.js';


function App() {

  const [ count , setCount] = useState(0);


  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <NavBar count={count} />
          <Carousel/> 
        </header>
        <div>
          <Switch> 
            <main>
              <Route exact path='/about'>
                <AboutUs />
              </Route>
              <Route exact path="/"> 
                <ItemListContainer/>
              </Route>
              <Route exact path="/category/:brand"> 
                <ItemListContainer/>
              </Route>
              <Route exact path="/item/:id"> 
                <ItemDetailContainer count={count} setCount={setCount} />
              </Route>
            </main>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
