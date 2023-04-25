import './Cust.css'
import { BrowserRouter as Router, Routes, Route, Switch, Link } from 'react-router-dom';

function Cust(){
    return(<div id="cust">
        <title>Customers</title>
        <link rel="stylesheet" type="text/css" href="Cust.css" />
        <header>
          <h1>Customers</h1>
          <nav>
            <ul>
            <li>
              <Link to="/Admin_page">Home</Link>
            </li>
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
          <div className="customer-table-container">
            <table>
              <thead>
                <tr>
                  <th>Customer Name</th>
                  <th>Order Details</th>
                  <th>Number of Orders</th>
                  <th>Total Order Value</th>
                  <th>Reviews</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>John Doe</td>
                  <td>Product A, Product B, Product C</td>
                  <td>5</td>
                  <td>$500</td>
                  <td>
                    <ul>
                      <li>"Great products, fast shipping!"</li>
                      <li>
                        "I had an issue with one product, but customer service
                        resolved it quickly."
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>Jane Smith</td>
                  <td>Product D, Product E, Product F</td>
                  <td>3</td>
                  <td>$300</td>
                  <td>
                    <ul>
                      <li>"Very happy with my purchases."</li>
                      <li>"The products were exactly as described."</li>
                      <li>"Will definitely shop here again."</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>
        <footer>
          <p>GiveItToUs E-commerce Website.</p>
        </footer>
      </div>
      );
}

export default Cust;
