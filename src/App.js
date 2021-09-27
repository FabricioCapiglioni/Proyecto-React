import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import AboutUs from './components/AboutUs/AboutUs.js';
import Contact from './components/Contact/Contact.js';
import Cart from './components/Cart/Cart.js'
import {CartProvider} from './Context/CartContext'
import Error404 from './components/Error404/Error404'

function App() {

  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
        <header className="App-header">
          <NavBar/>
        </header>
        <div>
          <Switch> 
            <Route exact path='/about' component={AboutUs} />
            <Route exact path='/contact'component={Contact} />
            <Route exact path="/" component={ItemListContainer} />             
            <Route exact path="/category/:brand" component={ItemListContainer} /> 
            <Route exact path="/item/:id" component={ItemDetailContainer} /> 
            <Route exact path="/Cart" component={Cart} /> 
            <Route path="*" component={Error404} /> 
          </Switch>
        </div>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
