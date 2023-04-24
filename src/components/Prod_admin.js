import './Prod_admin.css'
import { BrowserRouter as Router, Routes, Route, Switch, Link } from 'react-router-dom';

function Prod_admin(){
    return(<>
        <title>Products</title>
        <link rel="stylesheet" type="text/css" href="Prod_admin.css />
        <header>
          <h1>Products</h1>
          <nav>
            <ul>
            <li>
              <Link to="/Dashboard">Dashboard</Link>
              </li>
              <li>
              <Link to="/Prod_admin">Products</Link>
              </li>
              <li>
              <Link to="/Orders">Orders</Link>
              </li>
              <li>
              <Link to="/Cust">Customers</Link>
              </li>
              <li>
              <Link to="/Reply">Customer queries</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <h2>Products</h2>
          <div className="product-grid">
            <div className="product-tile">
              <img src="https://via.placeholder.com/250x250" alt="Product 1" />
              <h3>Product 1</h3>
              <p>$50</p>
            </div>
            <div className="product-tile">
              <img src="https://via.placeholder.com/250x250" alt="Product 2" />
              <h3>Product 2</h3>
              <p>$75</p>
            </div>
            <div className="product-tile">
              <img src="https://via.placeholder.com/250x250" alt="Product 3" />
              <h3>Product 3</h3>
              <p>$100</p>
            </div>
            <div className="product-tile">
              <img src="https://via.placeholder.com/250x250" alt="Product 4" />
              <h3>Product 4</h3>
              <p>$125</p>
            </div>
            <div className="product-tile">
              <img src="https://via.placeholder.com/250x250" alt="Product 5" />
              <h3>Product 5</h3>
              <p>$150</p>
            </div>
            <div className="product-tile">
              <img src="https://via.placeholder.com/250x250" alt="Product 6" />
              <h3>Product 6</h3>
              <p>$175</p>
            </div>
          </div>
        </main>
        <footer>
          <p>GiveItToUs E-commerce Website.</p>
        </footer>
      </>
      );
}

export default Prod_admin;
