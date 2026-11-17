import { Routes, Route, Navigate } from 'react-router-dom'
import { Leaf } from 'lucide-react'
import AboutUs from './components/AboutUs.jsx'
import ProductList from './components/ProductList.jsx'
import CartItem from './components/CartItem.jsx'

function Home() {
  return (
    <main className="landing-page">
      <div className="landing-overlay" />
      <section className="landing-content">
        <div className="brand-mark"><Leaf size={28} /> <span>PARADISE NURSERY</span></div>
        <p className="eyebrow">A little more green. A lot more life.</p>
        <h1>Bring the beauty<br />of nature <em>home.</em></h1>
        <p className="landing-copy">
          Discover thoughtfully selected houseplants that make every corner feel a little more alive.
        </p>
        <a className="primary-button" href="/plants">Get Started <span aria-hidden="true">→</span></a>
        <p className="landing-note">GROW YOUR OWN LITTLE PARADISE</p>
      </section>
      <div className="landing-bottom">PLANTS FOR EVERY SPACE · CARE FOR EVERYONE</div>
    </main>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/plants" element={<ProductList />} />
      <Route path="/cart" element={<CartItem />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}