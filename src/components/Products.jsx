/* eslint-disable react/prop-types */
import './Products.css'
import { AddToCartIcon } from './Icons'

export function Products({ products }) {
  return (
    <main className='products'>
      <ul>
        {products.slice(0, 10).map((products) => (
          <li key={products.id}>
            <img src={products.thumbnail} alt={products.title} />
            <div>
              <strong>{products.title}</strong> - ${products.price}
            </div>
            <div>
              <button>
                <AddToCartIcon />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  )
}
