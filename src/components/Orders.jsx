import { useEffect, useState } from "react";
import "./Orders.css";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const user = JSON.parse(localStorage.getItem("user"));
  const username = user.username;

  async function fetchProductDetails(productId) {
    try {
      const response = await fetch(`http://localhost:3001/api/products/getproduct?productId=${productId}`);
      const product = await response.json();
      return product;
    } catch (error) {
      console.error('Error fetching product details:', error);
    }
  }

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch(
          `http://localhost:3001/api/orders/getOrders/${username}`
        );
        const data = await response.json();
        const ordersWithDetails = await Promise.all(
          data.orders.map(async (order) => {
            const product = await fetchProductDetails(order.productId);
            return { ...order, product };
          })
        );
        setOrders(ordersWithDetails);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    fetchOrders();
  }, [username]);

  const totalPrice = Array.isArray(orders) ? orders.reduce(
    (total, order) => total + order.product.price,
    0
  ) : 0;

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="orders-container">
      <table className="orders">
        <thead>
          <tr>
            <th>Product</th>
            <th>Date of Purchase</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          
        </tbody>
        <tfoot>
          
        </tfoot>
      </table>
    </div>
  );
};

export default Orders;
