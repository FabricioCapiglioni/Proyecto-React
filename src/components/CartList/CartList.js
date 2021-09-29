import CartItem from '../CartItem/CartItem';
import './CartList.css'



const CartList = ({cart}) => {

    return (
        <div className="productsContainer row">
            {cart.map(product => (
                <CartItem key={product.id} product={product} />
        )
        )} </div>
    );
}

  
export default CartList;