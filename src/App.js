import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-md">
        <nav className="max-w-6xl mx-auto px-4 py-4">
          <ul className="flex items-center justify-between mb-4">
            <div className="flex space-x-8">
              <li><a href="#" className="text-lg font-semibold text-blue-600">HOME</a></li>
              <li><a href="#" className="text-lg font-semibold text-gray-700 hover:text-blue-600">STORE</a></li>
              <li><a href="#" className="text-lg font-semibold text-gray-700 hover:text-blue-600">ABOUT</a></li>
            </div>
            <li>
              <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
                <span>cart</span>
                <span className="bg-white text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">0</span>
              </a>
            </li>
          </ul>
          <h1 className="text-4xl font-bold text-center text-gray-800">The Generics</h1>
        </nav>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Music Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">MUSIC</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Album 1', price: 12.99, image: '/img/Album 1.png' },
              { name: 'Album 2', price: 14.99, image: '/img/Album 2.png' },
              { name: 'Album 3', price: 9.99, image: '/img/Album 3.png' },
              { name: 'Album 4', price: 19.99, image: '/img/Album 4.png' }
            ].map((album, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">{album.name}</h3>
                  <div className="mb-4">
                    <img 
                      className="w-full h-48 object-cover rounded-lg" 
                      src={album.image} 
                      alt={album.name}
                    />
                  </div>
                  <div className="flex flex-col items-center space-y-3">
                    <span className="text-2xl font-bold text-blue-600">${album.price.toFixed(2)}</span>
                    <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                      ADD TO CART
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Merchandise Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">MERCH</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { name: 'T-Shirt', price: 19.99, image: '/img/Shirt.png' },
              { name: 'Coffee Cup', price: 6.99, image: '/img/Cofee.png' }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">{item.name}</h3>
                  <div className="mb-4">
                    <img 
                      className="w-full h-48 object-cover rounded-lg" 
                      src={item.image} 
                      alt={item.name}
                    />
                  </div>
                  <div className="flex flex-col items-center space-y-3">
                    <span className="text-2xl font-bold text-blue-600">${item.price.toFixed(2)}</span>
                    <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                      ADD TO CART
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;