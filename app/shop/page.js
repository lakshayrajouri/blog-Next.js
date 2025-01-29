'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import React from 'react';
import "../styles/shop.css";

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filters, setFilters] = useState({
    category: [],
    priceRange: [0, 1000],
  });

  useEffect(() => {
    const fetchShop = async () => {
      try {
        const response = await fetch('/api/shop');
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data); // Initialize filtered products with all products
      } catch (error) {
        console.error("Error fetching shop data:", error);
      }
    };

    fetchShop();
  }, []);

  // Apply search and filters
  const handleSearch = () => {
    let results = products.filter((product) => 
      product.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Apply filters
    results = results.filter((product) => {
      const matchesCategory = filters.category.length
        ? filters.category.includes(product.category)
        : true;
      const matchesPrice =
        product.price >= filters.priceRange[0] &&
        product.price <= filters.priceRange[1];
      return matchesCategory && matchesPrice;
    });

    setFilteredProducts(results);
  };

  // Toggle category filters
  const handleCategoryChange = (category) => {
    setFilters((prev) => {
      const updatedCategories = prev.category.includes(category)
        ? prev.category.filter((cat) => cat !== category)
        : [...prev.category, category];
      return { ...prev, category: updatedCategories };
    });
  };

  // Handle price range
  const handlePriceChange = (e) => {
    setFilters((prev) => ({
      ...prev,
      priceRange: [0, parseInt(e.target.value, 10)],
    }));
  };

  // Reset all filters
  const handleResetFilters = () => {
    setFilters({
      category: [],
      priceRange: [0, 5000],
    });
    setSearchQuery('');
    setFilteredProducts(products);
  };

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
        <button onClick={handleSearch} className="search-button">Search</button>
      </header>

      <div className="Container">
        <aside className="sidebar">
          <h3>Filters</h3>
          <div className="filter-section">
            <h4>Category</h4>
            <ul>
              <li><input type='checkbox' checked={filters.category.includes('Emerald')} onChange={() => handleCategoryChange('Emerald')}/>{' '} Emerald</li>
              <li><input type='checkbox' checked={filters.category.includes('Diamond')} onChange={() => handleCategoryChange('Diamond')}/>{' '} Diamond</li>
              <li><input type='checkbox' checked={filters.category.includes('Ruby')} onChange={() => handleCategoryChange('Ruby')}/>{' '} Ruby</li>
              <li><input type='checkbox' checked={filters.category.includes('Sapphire')} onChange={() => handleCategoryChange('Sapphire')}/>{' '} Sapphire</li>
            </ul>
          </div>
          <div className="filter-section">
            <h4>Price</h4>
            <input
              type="range"
              min="0"
              max="5000"
              value={filters.priceRange[1]}
              onChange={handlePriceChange}
            />
            <p>Max Price: ${filters.priceRange[1]}</p>
          </div>
          <div className='filterButtons'>
            <button onClick={handleSearch} className="filterButton">Apply Filters</button>
            <button onClick={handleResetFilters} className="filterButton">Remove Filters</button>
          </div>
         </aside>

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