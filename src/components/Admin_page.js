import './Admin_page.css'
import { BrowserRouter as Router, Routes, Route, Switch, Link } from 'react-router-dom';


function Admin_page(){
    return(<div id ='admin_page'>
        
        
        <header>
          <h1>Admin Page</h1>
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
          <h4>Welcome, Admin</h4>
          <p>Select an option from the menu to manage your e-commerce website.</p>
        </main>
        <footer>
          <p>GiveItToUs E-commerce Website.</p>
        </footer>
      </div>
      );
}
export default Admin_page;
