# E-Commerce Website - React + Tailwind CSS

A modern, responsive e-commerce website built with React and Tailwind CSS, featuring a music store with albums and merchandise.

## 🚀 Features

- **Modern React Architecture**: Built with functional components and hooks
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Shopping Cart**: Full cart functionality with state management
- **Product Catalog**: Music albums and merchandise sections
- **Routing**: React Router for seamless navigation
- **Context API**: Global state management for cart functionality

## 🛠️ Tech Stack

- **Frontend**: React 18
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **State Management**: React Context API + useReducer
- **Build Tool**: Create React App

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.js          # Navigation header with cart
│   ├── Home.js            # Landing page
│   ├── Store.js           # Product catalog and cart
│   ├── Cart.js            # Shopping cart modal
│   └── About.js           # About page
├── context/
│   └── CartContext.js     # Cart state management
├── App.js                 # Main app component
└── index.js               # App entry point
```

## 🎵 Products

### Music Albums
- Album 1 - $12.99
- Album 2 - $14.99
- Album 3 - $9.99
- Album 4 - $19.99

### Merchandise
- T-Shirt - $19.99
- Coffee Cup - $6.99

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ecom-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🛒 Cart Functionality

- Add products to cart
- Update quantities
- Remove items
- View total price
- Clear entire cart
- Persistent cart state during session

## 🎨 Styling

The website uses Tailwind CSS for:
- Responsive grid layouts
- Modern color schemes
- Hover effects and transitions
- Mobile-first design
- Consistent spacing and typography

## 📱 Responsive Design

- **Mobile**: Single column layout with optimized touch targets
- **Tablet**: Two-column grid for better space utilization
- **Desktop**: Full four-column grid for optimal viewing

## 🔧 Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App

## 🌟 Key Features

1. **Header Navigation**: Clean navigation with active state indicators
2. **Product Grid**: Responsive product display with hover effects
3. **Shopping Cart**: Modal-based cart with quantity controls
4. **State Management**: Efficient cart state management with Context API
5. **Routing**: Seamless navigation between pages
6. **Responsive Images**: Optimized product images with proper aspect ratios

## 🚀 Deployment

To build for production:
```bash
npm run build
```

The build folder contains the production-ready files that can be deployed to any static hosting service.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🆘 Support

For support or questions, please open an issue in the repository.