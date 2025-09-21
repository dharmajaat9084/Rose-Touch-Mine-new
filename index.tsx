import React, { useState, useMemo } from 'react';
import ReactDOM from 'react-dom/client';
import { CATEGORIES, PRODUCTS } from './constants';
import { Category } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductCard from './components/ProductCard';

const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');

  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'All') {
      return PRODUCTS;
    }
    return PRODUCTS.filter(product => product.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="bg-[#fdfaf7]">
      <Header />

      <section id="home" className="relative h-[60vh] bg-cover bg-center" style={{ backgroundImage: "url('https://beeimg.com/images/s15464960163.jpg')" }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 container mx-auto px-6 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold font-display leading-tight">Pure Softness, Pure Comfort</h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl">Discover the gentle touch of Rose Touch products, crafted with care for your everyday needs.</p>
        </div>
      </section>

      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-gray-800 font-display mb-6">About Rose Touch</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed" aria-labelledby="about-heading">
              At Rose Touch, we believe in providing unparalleled quality and comfort. Our products are designed with the finest materials to ensure a soft, luxurious feel with every use. From our plush napkins to our absorbent towels, we are dedicated to bringing a touch of elegance and practicality to your home and business.
            </p>
        </div>
      </section>

      <main id="products" className="container mx-auto px-6 py-20" aria-labelledby="products-heading">
        <h2 id="products-heading" className="text-4xl font-bold text-center text-gray-800 font-display mb-12">Our Products</h2>

        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12" role="tablist" aria-label="Product Categories">
          {CATEGORIES.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 text-sm md:text-base rounded-full font-semibold transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#004d40] ${
                selectedCategory === category
                  ? 'bg-[#004d40] text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-200'
              }`}
              role="tab"
              aria-selected={selectedCategory === category}
              aria-controls="product-grid"
            >
              {category}
            </button>
          ))}
        </div>

        <div id="product-grid" className="grid grid-cols-2 gap-4 md:gap-8" role="tabpanel">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);