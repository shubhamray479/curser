import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const Header = () => {
  const { cartItems } = useContext(CartContext);
  const location = useLocation();
  
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="bg-white shadow-md">
      <nav className="max-w-6xl mx-auto px-4 py-4">
        <ul className="flex items-center justify-between mb-4">
          <div className="flex space-x-8">
            <li>
              <Link 
                to="/" 
                className={`text-lg font-semibold hover:text-blue-600 transition-colors ${
                  location.pathname === '/' ? 'text-blue-600' : 'text-gray-700'
                }`}
              >
                HOME
              </Link>
            </li>
            <li>
              <Link 
                to="/store" 
                className={`text-lg font-semibold hover:text-blue-600 transition-colors ${
                  location.pathname === '/store' ? 'text-blue-600' : 'text-gray-700'
                }`}
              >
                STORE
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className={`text-lg font-semibold hover:text-blue-600 transition-colors ${
                  location.pathname === '/about' ? 'text-blue-600' : 'text-gray-700'
                }`}
              >
                ABOUT
              </Link>
            </li>
          </div>
          <li>
            <Link 
              to="/store#cart" 
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
            >
              <span>cart</span>
              <span className="bg-white text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                {cartItemCount}
              </span>
            </Link>
          </li>
        </ul>
        <h1 className="text-4xl font-bold text-center text-gray-800">The Generics</h1>
      </nav>
    </header>
  );
};

export default Header;