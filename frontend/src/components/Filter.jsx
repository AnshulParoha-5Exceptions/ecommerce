import React, { useState} from 'react';

const Filter = ({ handleSortOptionChange, handleCategoryChange, handleBrandChange, searchQuery, setSearchQuery }) => {
  const [sortOption, setSortOption] = useState("none");
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');

  const handleOptionChange = (event) => {
    const selectedOption = event.target.value;
    setSortOption(selectedOption);
    handleSortOptionChange(selectedOption);
  };

  const handleCategorySelection = (event) => {
    const selectedCategory = event.target.value;
    setSelectedCategory(selectedCategory);
    handleCategoryChange(selectedCategory);
  };

  const handleBrandSelection = (event) => {
    const selectedBrand = event.target.value;
    setSelectedBrand(selectedBrand);
    handleBrandChange(selectedBrand);
  };

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light bg-gradient border rounded">
      <div>
        <select className="form-select" value={selectedCategory} onChange={handleCategorySelection}>
          <option value="">Category : All</option>
          <option value="mobiles">Mobiles</option>
          <option value="laptops">Laptops</option>
        </select>
      </div>
      <div>
        <select className="form-select" value={selectedBrand} onChange={handleBrandSelection}>
          <option value="">Brand : All</option>
          <option value="Apple">Apple</option>
          <option value="Samsung">Samsung</option>
          <option value="Mi">Mi</option>
          <option value="OnePlus">Oneplus</option>
          <option value="HP">HP</option>
          <option value="Dell">Dell</option>
          <option value="Lenovo">Lenovo</option>
        </select>
      </div>
      
      <div className='form-outline d-flex justify-content-center align-items-center flex-grow-1'>
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={handleSearch}
        />
        
      </div>

      <div className='d-flex justify-content-end'>
        <select
          className="form-select"
          value={sortOption}
          onChange={handleOptionChange}
        >
          <option value="none">Sort</option>
          <option value="lowToHigh">Price: Low to High</option>
          <option value="highToLow">Price: High to Low</option>
        </select>
      </div>
    </nav>
  );
};

export default Filter;
