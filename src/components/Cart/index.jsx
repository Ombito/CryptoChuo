import Navbar from '../Navbar/navbar.jsx';
import "../Cart/styles.css";


const Cart = ({ cart }) => {
    return (
        <div>
            <Navbar />
            <div id="cart" class="container">
                <h1>Shopping Cart</h1>
                <div id="cart-hero">
                    {cart.map(item => (
                        <div key={item.id} id="cart-card">
                            <img src={item.image} alt="item" />
                            <h5>{item.name}</h5>
                            <div className='cart-card-btns'>
                                <button>+</button>
                                <p></p>
                                <button>-</button>
                            </div>
                            <h4>{item.price}</h4>
                            <button id="remove-btn">Remove</button>
                        </div>
                    ))}
                    <div>
                        <h4>Total Amount Of Your Cart</h4>
                        <h2></h2>
                    </div>
                    <button>Proceed to Checkout</button>
                </div>
            </div>
        </div>
    )   
}
export default Cart;