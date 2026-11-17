import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Navbar from './Navbar.jsx'
import { plantCategories } from '../data/plants.js'
import { addItem } from '../redux/CartSlice.jsx'

export default function ProductList() {
  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cart.items)
  const addedIds = new Set(cartItems.map((item) => item.id))

  return (
    <>
      <Navbar />
      <main className="page-shell">
        <header className="page-heading">
          <p className="eyebrow">THE INDOOR COLLECTION</p>
          <h1>Find your new favourite plant.</h1>
          <p>Thoughtfully chosen greenery for every room, routine, and level of plant confidence.</p>
        </header>

        {plantCategories.map((category) => (
          <section className="category-section" key={category.name}>
            <h2 className="category-title">{category.name}</h2>
            <p className="page-heading"><span>{category.description}</span></p>
            <div className="plant-grid">
              {category.plants.map((plant) => {
                const isAdded = addedIds.has(plant.id)
                return (
                  <article className="plant-card" key={plant.id}>
                    <img className="plant-image" src={plant.image} alt={plant.name} loading="lazy" />
                    <div className="plant-info">
                      <h3>{plant.name}</h3>
                      <p>{plant.description}</p>
                      <div className="plant-card-footer">
                        <span className="price">${plant.price.toFixed(2)}</span>
                        <button
                          className="add-button"
                          type="button"
                          disabled={isAdded}
                          onClick={() => dispatch(addItem(plant))}
                        >
                          {isAdded ? 'Added to Cart' : 'Add to Cart'}
                        </button>
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>
          </section>
        ))}
        <div style={{ textAlign: 'center', marginTop: 42 }}>
          <Link to="/cart" className="solid-button">View shopping cart →</Link>
        </div>
      </main>
      <footer className="site-footer">Paradise Nursery · Grow something good</footer>
    </>
  )
}