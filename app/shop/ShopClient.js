'use client';

import { useState } from 'react';
import Link from 'next/link';
import "../styles/shop.css";

export default function ShopClient({ products }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    category: [],
    priceRange: [0, 1000],
  });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 30;

  // Filter products based on search & category
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.category.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory = filters.category.length
      ? filters.category.includes(product.category)
      : true;

    const matchesPrice = product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1];

    return matchesSearch && matchesCategory && matchesPrice;
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleCategoryChange = (category) => {
    setFilters((prev) => {
      const updatedCategories = prev.category.includes(category)
        ? prev.category.filter((cat) => cat !== category)
        : [...prev.category, category];
      return { ...prev, category: updatedCategories };
    });
  };

  const handlePriceChange = (e) => {
    setFilters((prev) => ({
      ...prev,
      priceRange: [0, parseInt(e.target.value, 10)],
    }));
  };

  const handleResetFilters = () => {
    setFilters({
      category: [],
      priceRange: [0, 5000],
    });
    setSearchQuery('');
    setCurrentPage(1);
  };

  return (
    <div>
      <header className="search-bar">
        <input
          type="text"
          placeholder="Search for products..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
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
            <button onClick={handleResetFilters} className="filterButton">Remove Filters</button>
          </div>
         </aside>

        <main className="product-list">
          <h2 className="shopHeading">Shop Products</h2>
          <div className="products">
            {currentProducts.map((product) => (
              <div className="product-card" key={product.id}>
                <img src="https://via.placeholder.com/150" alt="Product" />
                <h3>{product.category}</h3>
                <p>${product.price}</p>
                <Link href={`/shop/${product.id}`}><button>View</button></Link>
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="pagination">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              >
                Previous
              </button>
              <span>Page {currentPage} of {totalPages}</span>
              <button
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
