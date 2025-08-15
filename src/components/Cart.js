import React from 'react';
import { useCart } from '../context/CartContext';

const Cart = ({ onClose }) => {
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Cart is Empty</h2>
            <p className="text-gray-600 mb-6">Add some products to get started!</p>
            <button
              onClick={onClose}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800">CART</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
          >
            ×
          </button>
        </div>

        {/* Cart Header */}
        <div className="grid grid-cols-12 gap-4 py-4 border-b-2 border-gray-200 font-semibold text-gray-700 mb-4">
          <div className="col-span-6">ITEM</div>
          <div className="col-span-2 text-center">PRICE</div>
          <div className="col-span-2 text-center">QUANTITY</div>
          <div className="col-span-2 text-center">TOTAL</div>
        </div>

        {/* Cart Items */}
        {cartItems.map((item) => (
          <div key={item.id} className="grid grid-cols-12 gap-4 py-4 border-b border-gray-100 items-center">
            <div className="col-span-6 flex items-center space-x-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 object-cover rounded-lg"
              />
              <div>
                <h3 className="font-semibold text-gray-800">{item.name}</h3>
                <p className="text-sm text-gray-500 capitalize">{item.category}</p>
              </div>
            </div>
            
            <div className="col-span-2 text-center text-gray-700">
              ${item.price.toFixed(2)}
            </div>
            
            <div className="col-span-2 flex items-center justify-center space-x-2">
              <button
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                className="w-8 h-8 bg-gray-200 text-gray-700 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors"
              >
                -
              </button>
              <span className="w-12 text-center font-semibold">{item.quantity}</span>
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="w-8 h-8 bg-gray-200 text-gray-700 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors"
              >
                +
              </button>
            </div>
            
            <div className="col-span-2 text-center font-semibold text-gray-800">
              ${(item.price * item.quantity).toFixed(2)}
            </div>
          </div>
        ))}

        {/* Cart Footer */}
        <div className="mt-6 pt-6 border-t-2 border-gray-200">
          <div className="flex justify-between items-center mb-6">
            <button
              onClick={clearCart}
              className="text-red-600 hover:text-red-700 font-semibold"
            >
              Clear Cart
            </button>
            <div className="text-right">
              <div className="text-2xl font-bold text-gray-800">
                Total: ${getTotalPrice().toFixed(2)}
              </div>
              <p className="text-sm text-gray-500">Free shipping on orders over $50</p>
            </div>
          </div>
          
          <div className="flex justify-end space-x-4">
            <button
              onClick={onClose}
              className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              Continue Shopping
            </button>
            <button className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;