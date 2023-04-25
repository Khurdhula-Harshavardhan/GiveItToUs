import React, { useState, useEffect } from 'react';
import Login from './components/Login';
import ProductsPage from './components/ProductsPage';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.session && user != null) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, []);

  return (
    <>
      {loggedIn ? <ProductsPage /> : <Login />}
    </>
  );
}

export default App;
