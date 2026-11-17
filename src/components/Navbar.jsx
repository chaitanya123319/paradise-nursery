import { Link, NavLink } from 'react-router-dom'
import { Leaf, ShoppingBag } from 'lucide-react'
import { useSelector } from 'react-redux'

export default function Navbar() {
  const items = useSelector((state) => state.cart.items)
  const cartCount = items.reduce((total, item) => total + item.quantity, 0)

  return (
    <header className="site-header">
      <Link to="/" className="site-logo"><Leaf size={23} /><span>PARADISE NURSERY</span></Link>
      <nav className="site-nav" aria-label="Main navigation">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/plants">Plants</NavLink>
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/cart" className="cart-link"><ShoppingBag size={18} /> Cart <span className="cart-count">{cartCount}</span></NavLink>
      </nav>
    </header>
  )
}