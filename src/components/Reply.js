import './Reply.css'
import { BrowserRouter as Router, Routes, Route, Switch, Link } from 'react-router-dom';

function Reply(){
    return(<>
        <title>Settings</title>
        <link rel="stylesheet" type="text/css" href="Reply.css" />
        <header>
          <h1>Settings</h1>
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
          <div className="response-page-container">
            <h2>Customer Query Response</h2>
            <div className="form-container">
              <label htmlFor="customer-select">Select a Customer:</label>
              <select id="customer-select">
                <option value="">--Select a Customer--</option>
                <option value="John Doe">John Doe</option>
                <option value="Jane Smith">Jane Smith</option>
                <option value="Bob Johnson">Bob Johnson</option>
                {/* Add more options for additional customers */}
              </select>
              <label htmlFor="subject-input">Subject:</label>
              <input type="text" id="subject-input" />
              <label htmlFor="message-input">Message:</label>
              <textarea id="message-input" defaultValue={""} />
              <button id="send-button">Send Response</button>
            </div>
          </div>
        </main>
        <footer>
          <p>GiveItToUs E-commerce Website.</p>
        </footer>
      </>
      );


}


export default Reply;
