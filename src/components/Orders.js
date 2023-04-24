import './Orders.css'
import { BrowserRouter as Router, Routes, Route, Switch, Link } from 'react-router-dom';

function Orders(){
    return(<>
        <title>Orders Page</title>
        <link rel="stylesheet" type="text/css" href="order.css" />
        <header>
          <h1>Orders</h1>
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
          <h2>All Orders</h2>
          <table>
            <thead>
              <tr>
                <th>Order Number</th>
                <th>Customer Name</th>
                <th>Products Ordered</th>
                <th>Order Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>001</td>
                <td>John Smith</td>
                <td>Product A, Product B</td>
                <td className="new">New</td>
              </tr>
              <tr>
                <td>002</td>
                <td>Jane Doe</td>
                <td>Product C, Product D</td>
                <td className="in-process">In Process</td>
              </tr>
              <tr>
                <td>003</td>
                <td>Bob Johnson</td>
                <td>Product E, Product F</td>
                <td className="dispatched">Dispatched</td>
              </tr>
              <tr>
                <td>004</td>
                <td>Mary Thompson</td>
                <td>Product G, Product H</td>
                <td className="delivered">Delivered</td>
              </tr>
              <tr>
                <td>005</td>
                <td>Tom Lee</td>
                <td>Product I, Product J</td>
                <td className="cancelled">Cancelled</td>
              </tr>
            </tbody>
          </table>
        </main>
        <footer>
          <p>GiveItToUs E-commerce Website.</p>
        </footer>
      </>
      );
}

export default Orders;