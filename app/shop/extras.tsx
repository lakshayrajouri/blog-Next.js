import React from 'react';

export default function Extras() {
    return (
        <aside className="sidebar">
          <h3>Filters</h3>
          <div className="filter-section">
            <h4>Category</h4>
            <ul>
              <li><input type="checkbox" /> Electronics</li>
              <li><input type="checkbox" /> Clothing</li>
              <li><input type="checkbox" /> Accessories</li>
            </ul>
          </div>
          <div className="filter-section">
            <h4>Price</h4>
            <input type="range" min="0" max="1000" />
          </div>
          <div className="filter-section">
            <h4>Color</h4>
            <ul>
              <li><input type="checkbox" /> Red</li>
              <li><input type="checkbox" /> Blue</li>
              <li><input type="checkbox" /> Green</li>
            </ul>
          </div>
          <div className="filter-section">
            <h4>Size</h4>
            <ul>
              <li><input type="checkbox" /> Small</li>
              <li><input type="checkbox" /> Medium</li>
              <li><input type="checkbox" /> Large</li>
            </ul>
          </div>
        </aside>
    );
}