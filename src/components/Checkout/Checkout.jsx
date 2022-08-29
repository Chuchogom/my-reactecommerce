import ItemCart from '../ItemCart/ItemCart'
import { NavLink } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext'
import {addDoc, collection, getFirestore} from 'firebase/firestore';
import './Checkout.css'

const Checkout = () => {

    const { cart, totalPrice } = useCartContext();

    const order = {
        buyer: {
            name: 'Jesus',
            email: 'example@email.com',
            phone: '42423431',
            address: 'shjkf'
        },
        items: cart.map(product => ({ id: product.id, title: product.title, price: product.price, quantity: product.quantity })),
        total: totalPrice(),
    }

    const handleClick = () => {
        const db = getFirestore();
        const orderCollection = collection(db, 'orders')
        addDoc(orderCollection, order)
            .then(({ id }) => console.log(id))
    }

    return (
        <div className='checkout'>
            <div className="checkout-container">
                <div className="checkout-info">
                    <h3 className='checkout-title'>Checkout</h3>
                    {
                        cart.map(product =>
                            <ItemCart key={product.id}
                                product={product} />)
                    }
                    <div className="checkout-price">
                        <p>Total:</p>
                        <p>$ {(totalPrice()).toFixed(2)}</p>
                    </div>
                </div>
                <div className='checkout-payment'>
                    <form className='checkout-form'>
                        <input className='checkout-card visa'  type="button" name="card" defaultValue />
                        <input className='checkout-card mastercard' type="button" name="card" defaultValue />
                        <label>Credit Card Number</label>
                        <input className='checkout-cardnumber' type="text" pattern="[0-9]{13,16}" name="cardnumber" requierd="true" placeholder="0123-4567-8901-2345" />
                        <label>Card Holder</label>
                        <input className='checkout-cardholder' type="text" name="name" requierd="true" maxLength={50} placeholder="Cardholder" />
                        <label>Expiration Date</label>
                        <label className='checkout-cvv'>CVC/CVV</label>
                        <div className='checkout-left'>
                            <select name="month" className='month' size={1}>
                                <option value="00">MM</option>
                                <option value="01">01</option>
                                <option value="02">02</option>
                                <option value="03">03</option>
                                <option value="04">04</option>
                                <option value="05">05</option>
                                <option value="06">06</option>
                                <option value="07">07</option>
                                <option value="08">08</option>
                                <option value="09">09</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                            </select>
                            <p>/</p>
                            <select name="year" className='year' size={1}>
                                <option value="00">YY</option>
                                <option value="01">22</option>
                                <option value="02">23</option>
                                <option value="03">24</option>
                                <option value="04">25</option>
                                <option value="05">26</option>
                                <option value="06">27</option>
                                <option value="07">28</option>
                                <option value="08">29</option>
                                <option value="09">30</option>
                                <option value="10">31</option>
                            </select>
                        </div>
                        <input className='checkoutinput-cvv' type="text" placeholder="Cvc/Cvv" maxLength={3} />
                        <NavLink to='/checkout'>
                            <input className='checkout-button' type="button" name="purchase" defaultValue="Purchase"
                            onClick={handleClick} />
                        </NavLink>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Checkout