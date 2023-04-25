import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Cart.css";



const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const [cartKey, setCartKey] = useState(0);
  const username = user.username;

  // Fetch cart items on mount
  useEffect(() => {
    const fetchCartItems = async () => {
        if (!user) {
            window.alert("Please close this window and login again!");
            return navigate("/login");
          }
      try {
        const response = await fetch(
          `http://localhost:3001/api/cart/getAllItemsInCart/${username}`
        );
        const data = await response.json();
        setCartItems(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCartItems();
  }, [username]);

  // Calculate total price of cart items
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price,
    0
  );

  const updateCartItems = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

  // Remove an item from the cart
  const removeFromCart = async (productId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to remove this item from your cart?"
    );
    if (confirmDelete) {
      try {
        await fetch(
          `http://localhost:3001/api/cart/dropFromCart/${username}/${productId}`,
          { method: "DELETE" }
        );

        setCartItems((prevItems) =>
          prevItems.filter((item) => item.id !== productId)
        );
        updateCartItems(productId);
        window.alert("This item has been removed from your cart successfully!");

      } catch (error) {
        console.error(error);
      }
    }
  };

  const hangleSellProduct = () =>{
    navigate("/sellproducts");
  }

  const handleLogout = () =>{
    localStorage.setItem('user', null);
    navigate("/login");
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
              <a href="/products">Products</a>
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
                  <a onClick={() => handleLogout()}>Logout</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Cart</a>
            </li>
          </ul>
        </nav>
      </header>
    <div className="cart-container">
  <table className="cart">
    <thead>
      <tr>
        <th>Product</th>
        <th>Description</th>
        <th>Price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {cartItems.map((item) => (
        <tr className="cart-item" key={item.id}>
          <td>{item.name}</td>
          <td>{item.description}</td>
          <td>${item.price.toFixed(2)}</td>
          <td>
            <button onClick={() => removeFromCart(item._id)}>
              Remove from Cart
            </button>
          </td>
        </tr>
      ))}
    </tbody>
    <tfoot>
      <tr>
        <td colSpan="2">Total:</td>
        <td colSpan="2">${totalPrice.toFixed(2)}</td>
      </tr>
    </tfoot>
  </table>
</div>
<footer>
    <div className="copyright">
      <center><b><i><p>Copyright © 2023 Team Errors</p></i></b></center>
    </div>
  </footer>
</>
  );
};

export default Cart;
