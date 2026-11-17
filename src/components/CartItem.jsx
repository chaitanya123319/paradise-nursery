import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { ArrowLeft, Minus, Plus, Trash2, ShoppingBag } from 'lucide-react'
import Navbar from './Navbar.jsx'
import { removeItem, updateQuantity } from '../redux/CartSlice.jsx'

export default function CartItem() {
  const dispatch = useDispatch()
  const items = useSelector((state) => state.cart.items)
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)
  const totalAmount = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const handleCheckout = () => window.alert('Thank you for shopping with Paradise Nursery! Checkout is Coming Soon.')

  return (
    <>
      <Navbar />
      <main className="page-shell">
        <header className="page-heading">
          <p className="eyebrow">YOUR SELECTION</p>
          <h1>Shopping Cart</h1>
          <p>{totalItems} {totalItems === 1 ? 'item' : 'items'} ready to bring home.</p>
        </header>

        {items.length === 0 ? (
          <section className="empty-cart">
            <ShoppingBag size={42} color="#52745b" />
            <h2>Your cart is waiting to grow.</h2>
            <p>You haven't added any plants yet. Find a green companion for your space.</p>
            <Link to="/plants" className="solid-button">Continue Shopping</Link>
          </section>
        ) : (
          <div className="cart-layout">
            <section className="cart-list" aria-label="Cart items">
              {items.map((item) => (
                <article className="cart-row" key={item.id}>
                  <img src={item.image} alt={item.name} />
                  <div>
                    <h3>{item.name}</h3>
                    <p>Unit price: ${item.price.toFixed(2)}</p>
                    <div className="quantity-control" aria-label={`Quantity for ${item.name}`}>
                      <button type="button" aria-label="Decrease quantity" onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}><Minus size={15} /></button>
                      <strong>{item.quantity}</strong>
                      <button type="button" aria-label="Increase quantity" onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}><Plus size={15} /></button>
                    </div>
                    <button className="delete-button" type="button" onClick={() => dispatch(removeItem(item.id))}><Trash2 size={13} style={{ verticalAlign: 'middle' }} /> Remove</button>
                  </div>
                  <div className="line-total">${(item.price * item.quantity).toFixed(2)}</div>
                </article>
              ))}
              <Link to="/plants" className="secondary-button"><ArrowLeft size={14} style={{ verticalAlign: 'middle' }} /> Continue Shopping</Link>
            </section>

            <aside className="summary-card">
              <h2>Order Summary</h2>
              <div className="summary-line"><span>Items ({totalItems})</span><span>${totalAmount.toFixed(2)}</span></div>
              <div className="summary-line"><span>Delivery</span><span>Calculated at checkout</span></div>
              <div className="summary-line summary-total"><span>Total</span><span>${totalAmount.toFixed(2)}</span></div>
              <button type="button" className="solid-button full-button" onClick={handleCheckout}>Checkout</button>
              <p style={{ fontSize: 11, color: '#819084', textAlign: 'center', lineHeight: 1.5 }}>Coming Soon · Secure checkout will be available soon.</p>
            </aside>
          </div>
        )}
      </main>
      <footer className="site-footer">Paradise Nursery · Thank you for choosing green</footer>
    </>
  )
}