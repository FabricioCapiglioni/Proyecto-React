import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { CartContextProvider } from './context/CartContext'
import { NotificationContextProvider } from './context/NotificationContext'

import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';

import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Contact from './components/Contact/Contact.js';
import Cart from './components/Cart/Cart.js'
import Error404 from './components/Error404/Error404'
import ShippingForm from './components/ShippingForm/ShippingForm'
import Notification from './components/Notification/Notification';
import Footer from './components/Footer/Footer'


function App() {

	return (
		<div className="App">
			<NotificationContextProvider>
				<CartContextProvider>
					<BrowserRouter>
						<header className="App-header">
							<NavBar />
						</header>
						<main>
							<Notification />
							<Switch>
								<Route exact path='/contact' component={Contact} />
								<Route exact path='/shipping' component={ShippingForm} />
								<Route exact path="/" component={ItemListContainer} />
								<Route exact path="/category/:brand" component={ItemListContainer} />
								<Route exact path="/item/:id" component={ItemDetailContainer} />
								<Route exact path="/Cart" component={Cart} />
								<Route path="*" component={Error404} />
							</Switch>
						</main>
						<Footer className="App-footer" />
					</BrowserRouter>
				</CartContextProvider>
			</NotificationContextProvider>
		</div>
	);
}

export default App;
