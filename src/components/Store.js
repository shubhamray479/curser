import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import Cart from './Cart';

const Store = () => {
  const { addToCart } = useCart();
  const [showCart, setShowCart] = useState(false);

  const musicProducts = [
    {
      id: 'album1',
      name: 'Album 1',
      price: 12.99,
      image: '/img/Album 1.png',
      category: 'music'
    },
    {
      id: 'album2',
      name: 'Album 2',
      price: 14.99,
      image: '/img/Album 2.png',
      category: 'music'
    },
    {
      id: 'album3',
      name: 'Album 3',
      price: 9.99,
      image: '/img/Album 3.png',
      category: 'music'
    },
    {
      id: 'album4',
      name: 'Album 4',
      price: 19.99,
      image: '/img/Album 4.png',
      category: 'music'
    }
  ];

  const merchProducts = [
    {
      id: 't-shirt',
      name: 'T-Shirt',
      price: 19.99,
      image: '/img/Shirt.png',
      category: 'merch'
    },
    {
      id: 'coffee-cup',
      name: 'Coffee Cup',
      price: 6.99,
      image: '/img/Cofee.png',
      category: 'merch'
    }
  ];

  const handleAddToCart = (product) => {
    addToCart(product);
    setShowCart(true);
  };

  useEffect(() => {
    const hash = window.location.hash;
    if (hash === '#cart') {
      setShowCart(true);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Music Section */}
        <section id="music" className="mb-16">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">MUSIC</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {musicProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">{product.name}</h3>
                  <div className="image-container mb-4">
                    <img 
                      className="w-full h-48 object-cover rounded-lg" 
                      src={product.image} 
                      alt={product.name}
                    />
                  </div>
                  <div className="flex flex-col items-center space-y-3">
                    <span className="text-2xl font-bold text-blue-600">
                      ${product.price.toFixed(2)}
                    </span>
                    <button 
                      className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                      onClick={() => handleAddToCart(product)}
                    >
                      ADD TO CART
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Merchandise Section */}
        <section id="merch" className="mb-16">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">MERCH</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {merchProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">{product.name}</h3>
                  <div className="image-container mb-4">
                    <img 
                      className="w-full h-48 object-cover rounded-lg" 
                      src={product.image} 
                      alt={product.name}
                    />
                  </div>
                  <div className="flex flex-col items-center space-y-3">
                    <span className="text-2xl font-bold text-blue-600">
                      ${product.price.toFixed(2)}
                    </span>
                    <button 
                      className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                      onClick={() => handleAddToCart(product)}
                    >
                      ADD TO CART
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Cart Section */}
        {showCart && (
          <Cart onClose={() => setShowCart(false)} />
        )}
      </div>
    </div>
  );
};

export default Store;