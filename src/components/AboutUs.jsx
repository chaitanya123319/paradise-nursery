import { Link } from 'react-router-dom'
import Navbar from './Navbar.jsx'

export default function AboutUs() {
  return (
    <>
      <Navbar />
      <main className="page-shell">
        <section className="about-panel">
          <div>
            <p className="eyebrow">OUR STORY</p>
            <h1>Helping you grow a happier home.</h1>
            <p>Paradise Nursery was created around a simple idea: everyone deserves a little more nature in their everyday life. We curate beautiful, approachable houseplants for new plant parents and experienced growers alike.</p>
            <p>From leafy statement plants to small desk companions, our goal is to make choosing and caring for greenery joyful, simple, and inspiring. We believe that a greener space can help make every day feel brighter.</p>
            <Link to="/plants" className="solid-button">Explore our plants →</Link>
          </div>
          <img src="https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=1000&q=85" alt="Sunlit collection of green houseplants" />
        </section>
      </main>
      <footer className="site-footer">Paradise Nursery · Bring nature home</footer>
    </>
  )
}