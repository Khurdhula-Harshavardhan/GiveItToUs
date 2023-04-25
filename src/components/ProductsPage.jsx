import React, { useState, useEffect } from "react";
import "./ProductsPage.css";
import { useNavigate } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [priceRange, setPriceRange] = useState({ min: "", max: "" });
  const navigate = useNavigate();

  
  useEffect(() => {

    


    fetch("http://localhost:3001/api/products/get-products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setCategories(Array.from(new Set(data.map((p) => p.category))));
        setPriceRange({
          min: Math.min(...data.map((p) => p.price)),
          max: Math.max(...data.map((p) => p.price)),
        });
      })
      .catch((error) => console.error(error));
  }, []);

  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) {
    window.alert("Please close this window and login again!");
    return navigate("/login");
  }


  const handleCategoryChange = (category) => {
    const filteredProducts =
      category === "all"
        ? products
        : products.filter((p) => p.category === category);
    setProducts(filteredProducts);
  };

  const handlePriceRangeChange = (minPrice, maxPrice) => {
    const filteredProducts = products.filter(
      (p) => p.price >= minPrice && p.price <= maxPrice
    );
    setProducts(filteredProducts);
  };

  const handleLogout = () =>{
    localStorage.setItem('user', null);
    navigate("/login");
  }

  const hangleSellProduct = () =>{
    navigate("/sellproducts");
  }

  return (
    <>
      <header>
        <div className="logo">
          <h2>GiveIToUs</h2>
        </div>
        <nav>
          <ul>
            <li>
              <a href="#">Products</a>
            </li>
            <li className="account">
              <a href="#">My Account</a>
              <ul className="account-dropdown">
                <li>
                  <a href="ordhis.html">Order History</a>
                </li>
                <li>
                  <a onClick={() => hangleSellProduct()}>Sell Product</a>
                </li>
                <li>
                  <a href="#" onClick={() => handleLogout()}>Logout</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="cart.html">Cart</a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <div className="left-card">
          <h3>Filters</h3>
          <div className="filter-section">
            <h4>Category</h4>
            <div className="category-filters">
              <label>
                <input
                  type="radio"
                  name="category"
                  value="all"
                  checked={categories.length === 0}
                  onChange={() => handleCategoryChange("all")}
                />
                All
              </label>
              {categories.map((category) => (
                <label key={category}>
                  <input
                    type="radio"
                    name="category"
                    value={category}
                    onChange={() => handleCategoryChange(category)}
                  />
                  {category}
                </label>
              ))}
            </div>
          </div>
          <div className="filter-section">
            <h4>Price Range</h4>
            <div className="price-range">
              <label>
                Min:
                <input
                  type="number"
                  value={priceRange.min}
                  onChange={(event) =>
                    setPriceRange({
                      ...priceRange,
                      min: event.target.value,
                    })
                  }
                />
              </label>
              <label>
                Max:
                <input               type="number"
              value={priceRange.max}
              onChange={(event) =>
                setPriceRange({
                  ...priceRange,
                  max: event.target.value,
                })
              }
            />
          </label>
          <button
            onClick={() =>
              handlePriceRangeChange(priceRange.min, priceRange.max)
            }
          >
            Apply
          </button>
        </div>
      </div>
    </div>
    <section className="products">
      {products.map((product) => (
        <div className="product" key={product.id}>
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <button>Add to cart</button>
        </div>
      ))}
    </section>
  </main>

  <footer>
    <div className="copyright">
      <center><b><i><p>Copyright © 2023 Team Errors</p></i></b></center>
    </div>
  </footer>
</>
);
}

export default Products;