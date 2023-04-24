import './Dashboard.css'
import { BrowserRouter as Router, Routes, Route, Switch, Link } from 'react-router-dom';

function Dashboard(){


    return(<>
        <title>Dashboard</title>
        <link rel="stylesheet" type="text/css" href="Dashboard.css" />
        <header>
          <h1>Dashboard</h1>
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
          <div>
            <canvas id="salesChart" />
          </div>
          <table>
            <tbody>
              <tr>
                <th>Month</th>
                <th>Orders</th>
                <th>Sales</th>
                <th>Most Bought Products</th>
              </tr>
              <tr>
                <td>January</td>
                <td>100</td>
                <td>$10,000</td>
                <td>Product A</td>
              </tr>
              <tr>
                <td>February</td>
                <td>120</td>
                <td>$12,000</td>
                <td>Product B</td>
              </tr>
              <tr>
                <td>March</td>
                <td>150</td>
                <td>$15,000</td>
                <td>Product C</td>
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

export default Dashboard;
