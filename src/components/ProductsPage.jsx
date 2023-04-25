import React from 'react';
import { Navbar, Nav, Form, FormControl, Button, Container, Row, Col, Card } from 'react-bootstrap';
import './ProductsPage.css';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ProductsPage = () => {

  const navigate = useNavigate();
  
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) {
      navigate('/login');
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    
    navigate("/");
  }
  

  const products = [
    { id: 1, title: 'Product 1', price: 29.99, image: 'https://via.placeholder.com/150' },
    { id: 2, title: 'Product 2', price: 49.99, image: 'https://via.placeholder.com/150' },
    { id: 3, title: 'Product 3', price: 19.99, image: 'https://via.placeholder.com/150' },
    // Add more products here in the same format.
  ];

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">giveItToUs</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#profile">Profile</Nav.Link>
              <Nav.Link href="#orders">Orders</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
            <Nav.Link href="#cart" className="ms-3">
              Cart
            </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="products-page">
        <h1 className="giveItToUs-title text-center mb-4">Our Products</h1>
        <Row>
          {products.map((product) => (
            <Col sm={12} md={6} lg={4} xl={3} key={product.id}>
              <Card className="product-card mb-4">
                <Card.Img variant="top" src={product.image} />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>Price: ${product.price}</Card.Text>
                  <Button variant="primary" className="add-to-cart-btn">
                    Add to Cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Button onClick={handleLogout}>logout</Button>
    </>
  );
};

export default ProductsPage;
