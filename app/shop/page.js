// 'use client';
// import { useEffect, useState } from 'react';
// import Link from 'next/link';
// import React from 'react';
// import "../styles/shop.css";

// export default function Shop() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchShop = async () => {
//       const response = await fetch('/api/shop');
//       const data = await response.json();
//       setProducts(data);
//     };

//     fetchShop();
//   }, []);

//     return (
//         <div>
//           <hr />
//             <header className="search-bar">
//     <input type="text" placeholder="Search for products..." className="search-input" />
//     <button className="search-button">Search</button>
//   </header>

//   <div className="container">
//     <aside className="sidebar">
//       <h3>Filters</h3>
//       <div className="filter-section">
//         <h4>Category</h4>
//         <ul>
//           <li><input type="checkbox" /> Electronics</li>
//           <li><input type="checkbox" /> Clothing</li>
//           <li><input type="checkbox" /> Accessories</li>
//         </ul>
//       </div>
//       <div className="filter-section">
//         <h4>Price</h4>
//         <input type="range" min="0" max="1000" />
//       </div>
//       <div className="filter-section">
//         <h4>Color</h4>
//         <ul>
//           <li><input type="checkbox" /> Red</li>
//           <li><input type="checkbox" /> Blue</li>
//           <li><input type="checkbox" /> Green</li>
//         </ul>
//       </div>
//       <div className="filter-section">
//         <h4>Size</h4>
//         <ul>
//           <li><input type="checkbox" /> Small</li>
//           <li><input type="checkbox" /> Medium</li>
//           <li><input type="checkbox" /> Large</li>
//         </ul>
//       </div>
//     </aside>
//     <main className="product-list">
//       <h2  className="shopHeading">Shop Products</h2>

      
//       <div className="products">
//         {products.map((product) => (
//         <div className="product-card" key={product.id}>
//           <img src="https://via.placeholder.com/150" alt="Product" />
//           <h3>{product.category}</h3>
//           <p>${product.price}</p>
//           <Link href={`/shop/${product.id}`}><button>View</button></Link>
//         </div>))}
//       </div>
//     </main>
//   </div>
//         </div>
//     )};


'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import React from 'react';
import "../styles/shop.css";
import Extras from './extras';

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchShop = async () => {
      const response = await fetch('/api/shop');
      const data = await response.json();
      setProducts(data);
      setFilteredProducts(data); // Initialize filtered products with all products
    };

    fetchShop();
  }, []);

  // Filter products based on the search query
  useEffect(() => {
    const lowerCaseQuery = searchQuery.toLowerCase();
    const results = products.filter((product) =>
      product.category.toLowerCase().includes(lowerCaseQuery) &&
      product.price.toString().includes(lowerCaseQuery)
    );
    setFilteredProducts(results);
  }, [searchQuery, products]);

  return (
    <div>
      <hr />
      <header className="search-bar">
        <input
          type="text"
          placeholder="Search for products..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="search-button">Search</button>
      </header>

      <div className="container">
        <Extras />
        <main className="product-list">
          <h2 className="shopHeading">Shop Products</h2>
          <div className="products">
            {filteredProducts.map((product) => (
              <div className="product-card" key={product.id}>
                <img src="https://via.placeholder.com/150" alt="Product" />
                <h3>{product.category}</h3>
                <p>${product.price}</p>
                <Link href={`/shop/${product.id}`}><button>View</button></Link>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
