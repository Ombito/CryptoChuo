import Navbar from '../Navbar/navbar.jsx';
import "../Cart/styles.css";


const Cart = ({ cart }) => {
    return (
        <div>
            <Navbar />
            <div id="cart">
                <h1>Shopping Cart</h1>
                <div>
                    {cart.map(item => (
                    <div key={item.id}>{item.name} - ${item.price}</div>
                    ))}
                </div>
            </div>
        </div>
    )   
}
export default Cart;