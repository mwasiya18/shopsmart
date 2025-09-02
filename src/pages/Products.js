// src/pages/Products.js
import ProductCard from '../components/ProductCard';

const products = [
  { name: 'Smart Watch', price: 2999, image: '/images/watch.jpg' },
  { name: 'Wireless Earbuds', price: 1999, image: '/images/earbuds.jpg' },
  { name: 'Bluetooth Speaker', price: 1499, image: '/images/speaker.jpg' },
];

function Products({ addToCart }) {
  return (
    <main className="container">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} addToCart={addToCart} />
      ))}
    </main>
  );
}

export default Products;