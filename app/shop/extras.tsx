import React from 'react';

export default function Extras() {
    return (
        <aside className="sidebar">
          <h3>Filters</h3>
          <div className="filter-section">
            <h4>Category</h4>
            <ul>
              <li><input type="checkbox" /> Emerald</li>
              <li><input type="checkbox" /> Diamond</li>
              <li><input type="checkbox" /> Ruby</li>
              <li><input type="checkbox" /> Sapphire</li>
            </ul>
          </div>
          <div className="filter-section">
             <h4>Price</h4>
             <input
               type="range"
               min="0"
               max="1000"
              //  value={filters.priceRange[1]}
              //  onChange={handlePriceChange}
             />
             {/* <p>Max Price: ${filters.priceRange[1]}</p> */}
           </div>
          <div className="filter-section">
            <h4>Size</h4>
            <ul>
              <li><input type="checkbox" /> Small</li>
              <li><input type="checkbox" /> Medium</li>
              <li><input type="checkbox" /> Large</li>
            </ul>
          </div>
          <button className='filterButton'>Apply filters</button>
        </aside>
    );
}

//<aside className="sidebar">
//           <h3>Filters</h3>
//           <div className="filter-section">
//             <h4>Category</h4>
//             <ul>
//               <li>
//                 <input
//                   type="checkbox"
//                   onChange={() => handleCategoryChange('Emerald')}
//                 />{' '}
//                 Emerald
//               </li>
//               <li>
//                 <input
//                   type="checkbox"
//                   onChange={() => handleCategoryChange('Clothing')}
//                 />{' '}
//                 Clothing
//               </li>
//               <li>
//                 <input
//                   type="checkbox"
//                   onChange={() => handleCategoryChange('Accessories')}
//                 />{' '}
//                 Accessories
//               </li>
//             </ul>
//           </div>
//           <div className="filter-section">
//             <h4>Price</h4>
//             <input
//               type="range"
//               min="0"
//               max="1000"
//               value={filters.priceRange[1]}
//               onChange={handlePriceChange}
//             />
//             <p>Max Price: ${filters.priceRange[1]}</p>
//           </div>
//           <button className='filterButton'>Apply filters</button>
//         </aside>