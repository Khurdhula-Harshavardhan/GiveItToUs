import React, { useState, useEffect } from "react";
import "./ProductsPage.css";
import { useNavigate } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [priceRange, setPriceRange] = useState({ min: "", max: "" });
  const navigate = useNavigate();
  const [displayedProducts, setDisplayedProducts] = useState([]);

  
  useEffect(() => {

    


    fetch("http://localhost:3001/api/products/get-products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setDisplayedProducts(data);
        
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
    setDisplayedProducts(filteredProducts);
  };
  
  const handlePriceRangeChange = (minPrice, maxPrice) => {
    const filteredProducts = products.filter(
      (p) => p.price >= minPrice && p.price <= maxPrice
    );
    setDisplayedProducts(filteredProducts);
  };

  const handleAddToCart = async (productid) => {
    console.log(user.username, productid);
    try {
      const response = await fetch("http://localhost:3001/api/cart/addToCart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: user.username, // replace with actual username
          productId: productid,
        }),
      });
  
      if (response.ok) {
        // Handle success
        window.alert("This product has been added to your cart successfully!");
        console.log("Product added to cart!");
      } else {
        // Handle error
        window.alert("Failed to add this product to your cart, sorry!");
        console.error("Failed to add product to cart");
      }
    } catch (error) {
      console.error(error);
    }
  };
  

  const handleLogout = () =>{
    localStorage.setItem('user', null);
    navigate("/login");
  }

  const hangleSellProduct = () =>{
    navigate("/sellproducts");
  }

  const handleCart = () => {
    navigate("/cart");
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
                  <a href="#">Order History</a>
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
              <a onClick={() => handleCart()}>Cart</a>
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
    {displayedProducts.map((product) => (
  <div className="product" key={product.id}>
    {product.images.length > 0 && (
      <img
      src={`http://localhost:3001/uploads/${product.images[0]}`}
      alt={product.name}
    />
    )}
    <center><h3>{product.name}</h3></center>
    <small><p>Seller: {product.seller}</p>
    <p>Condition: {product.condition}</p></small>
    <p>$ {product.price}</p>
    <button onClick={() => handleAddToCart(product._id)}>Add to Cart</button>
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