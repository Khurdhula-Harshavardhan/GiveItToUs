import { BrowserRouter as Router, Routes, Route, Switch, Link } from 'react-router-dom';
import Gmail from './components/Gmail';
import Login from "./components/Login";
import Register from "./components/Register";
import Seller from "./components/Seller";
import Admin from "./components/Admin";
import Seller_post from "./components/Seller_post";

function App() {
  return (
    <Router>
    <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/admin" element={<Admin/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/gmail" element={<Gmail/>} />
          <Route path="/seller" element={<Seller/>} />
          <Route path="/seller_post" element={<Seller_post/>} />
    </Routes>
  </Router>
  );
}

export default App;
