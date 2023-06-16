import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faShoppingCart, faBolt, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { AuthContext } from './AuthContext';
import Filter from './Filter';

const Products = () => {
  const { handleNavigation } = useContext(AuthContext);

  const [allProducts, setAllProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOption, setSortOption] = useState('none');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const itemsPerPage = 8;

  const shuffle = (array) => {
    const shuffledArray = [...array];

    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  useEffect(() => {
    axios
      .get('http://localhost/projects/ecomm/backend/products.php')
      .then((response) => {
        if (Array.isArray(response.data)) {
          const shuffledProducts = shuffle(response.data);
          setAllProducts(shuffledProducts);
        } else {
          console.log('Invalid response format: expected an array');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    // Filter products based on selected category and brand
    let filteredProducts = [...allProducts];
    if (selectedCategory !== '') {
      filteredProducts = filteredProducts.filter((product) => product.category === selectedCategory);
    }
    if (selectedBrand !== '') {
      filteredProducts = filteredProducts.filter((product) => product.brand === selectedBrand);
    }
    if (searchQuery !== '') {
      filteredProducts = filteredProducts.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
  
    // Sort the products based on the selected option
    let sortedProducts = [...filteredProducts];
    if (sortOption === "lowToHigh") {
      sortedProducts = filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortOption === "highToLow") {
      sortedProducts = filteredProducts.sort((a, b) => b.price - a.price);
    }
  
    setFilteredProducts(sortedProducts);
  }, [sortOption, selectedCategory, selectedBrand, searchQuery, allProducts]);
  

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedProducts = filteredProducts.slice(startIndex, endIndex);

  const handleSortOptionChange = (selectedOption) => {
    setSortOption(selectedOption);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleBrandChange = (brand) => {
    setSelectedBrand(brand);
  };

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="container mt-2">
      <Filter
        handleSortOptionChange={handleSortOptionChange}
        handleCategoryChange={handleCategoryChange}
        handleBrandChange={handleBrandChange}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <div className="row">
        {displayedProducts.length > 0 ? (
          displayedProducts.map((product) => (
            <div className="col-md-6" key={product.id}>
              <div className="card mb-3 alert alert-light">
                <div className="row g-0">
                  <div className="col-md-4">
                    <div className="image-container">
                      <img src={product.image} alt="iphone13" className="product-image" />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{product.name}</h5>
                      <p className="card-text">{product.brand}</p>
                      <p className="card-text">₹ {product.price}</p>
                      <div className="product-rating  justify-content-center">
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                      </div>
                      <div className="d-flex justify-content-between mt-3">
                        <button className="btn btn-warning">
                          <FontAwesomeIcon icon={faShoppingCart} className="me-2" />
                          Add to Cart
                        </button>
                        <button className="btn btn-danger"
                         onClick={() => handleNavigation('checkout', product)}>
                          <FontAwesomeIcon icon={faBolt} className="me-2" />
                          Buy Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-md-12 alert alert-danger">
            <h1>No Products!!</h1>
          </div>
        )}
      </div>
      <div className="row mt-3">
        <div className="col-md-4 d-flex justify-content-start">
          <button
            className="btn btn-secondary me-2"
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
          >
            <FontAwesomeIcon icon={faArrowLeft} className="me-2" />
            Previous
          </button>
        </div>
        <div className="col-md-4 d-flex justify-content-center">
          <p className="text-dark fs-4 align-self-center">{currentPage}</p>
        </div>
        <div className="col-md-4 d-flex justify-content-end">
          <button
            className="btn btn-secondary ms-2"
            onClick={goToNextPage}
            disabled={endIndex >= allProducts.length}
          >
            Next
            <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
