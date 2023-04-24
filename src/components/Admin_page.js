import './Admin_page.css'
import { BrowserRouter as Router, Routes, Route, Switch, Link } from 'react-router-dom';


function Admin_page(){
    return(<>
        <title>Admin Page</title>
        <link rel="stylesheet" type="text/css" href="Admin_page.css" />
        <header>
          <h1>Admin Page</h1>
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
          <h2>Welcome, Admin</h2>
          <p>Select an option from the menu to manage your e-commerce website.</p>
        </main>
        <footer>
          <p>GiveItToUs E-commerce Website.</p>
        </footer>
      </>
      );
}
export default Admin_page;
