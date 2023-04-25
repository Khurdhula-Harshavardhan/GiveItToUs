import './SellProducts.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SellProducts() {
  const [isChecked, setisChecked] = useState(false);
  const [previewImages, setPreviewImages] = useState([]);
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [condition, setCondition] = useState('');
  const [category, setCategory] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  function handleisCheckedChange(event) {
    setisChecked(event.target.checked);
  }

  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) {
    window.alert("Please close this window and login again!");
    return navigate("/login");
  }
  
  const defaultImages = [
    'https://www.allstate.com/resources/Allstate/images/allstate-benefits/icons/uploadicon.png?v=13d72a4f-3f0a-4d4e-2c6f-5b1ccd06c986.jpg',
    'https://www.allstate.com/resources/Allstate/images/allstate-benefits/icons/uploadicon.png?v=13d72a4f-3f0a-4d4e-2c6f-5b1ccd06c986.jpg',
    'https://www.allstate.com/resources/Allstate/images/allstate-benefits/icons/uploadicon.png?v=13d72a4f-3f0a-4d4e-2c6f-5b1ccd06c986.jpg',
    'https://www.allstate.com/resources/Allstate/images/allstate-benefits/icons/uploadicon.png?v=13d72a4f-3f0a-4d4e-2c6f-5b1ccd06c986.jpg',
    'https://www.allstate.com/resources/Allstate/images/allstate-benefits/icons/uploadicon.png?v=13d72a4f-3f0a-4d4e-2c6f-5b1ccd06c986.jpg',
    'https://www.allstate.com/resources/Allstate/images/allstate-benefits/icons/uploadicon.png?v=13d72a4f-3f0a-4d4e-2c6f-5b1ccd06c986.jpg',
  ];

  const handleFileInputChange = (event) => {
    const files = event.target.files;
    if (files.length > 6) {
      alert('Only up to 6 files can be uploaded!');
      return;
    }
    
    const newPreviewImages = [];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();
      reader.onload = () => {
        newPreviewImages.push(reader.result);
        setPreviewImages([...previewImages, ...newPreviewImages]);
      };
      reader.readAsDataURL(file);
    }
    
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!title || !price || !description ||!category ||!condition) {
      setError('Please fill in all required fields.');
      return;
    }
   
    if (!isChecked) {
      setError('Please check the box to submit.');
      return;
    }

   

    setTitle('');
    setPrice('');
    setDescription('');
    setCategory('');
    setCondition('');
    setisChecked(false);
    setError('');
  
  };
  
  const handleLogout = () =>{
    localStorage.setItem('user', null);
    navigate("/login");
  }

  const nagivateToProducts = () => {
    navigate("/products");
  }


return(
<>
    <header>
    <div className="logo">
      <h2>GiveIToUs</h2>
    </div>
    <nav>
      <ul>
        <li>
          <a onClick={() => nagivateToProducts()}>Products</a>
        </li>
        <li className="account">
          <a href="#">My Account</a>
          <ul className="account-dropdown">
            <li>
              <a href="#">Order History</a>
            </li>
            <li>
              <a href="#">Sell Product</a>
            </li>
            <li>
              <a href="#" onClick={() => handleLogout()}>Logout</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="cart.html">Cart</a>
        </li>
      </ul>
    </nav>
  </header>
  <form onSubmit={handleSubmit}>
  <div className="container">
  
    <div className="post">
      <h1>POST HERE</h1>
    </div>
    <div className="product-details">
      <h2>Product Details</h2>
        <div className="field1">
          <p>Title:</p>
          <input  type="text" id="title" value={title} name="title" required onChange={(e) => setTitle(e.target.value)}/>
        </div>
        <div className="field2">
          <p >Description:</p>
          <input type="text" id="description" name="description" value={description} onChange={(e) => setDescription(e.target.value)} required/>
        </div>
      
      <div className="category">
      <form>
        <h2>Select Category: </h2>
        <select id="category" value={category} onChange={(e) => setCategory(e.target.value)} required>
          <option value="">select a category</option>
          <option value="Footwear">Footwear</option>
          <option value="Clothes">Clothes</option>
          <option value="Accessories">Accessories</option>
          <option value="Books">Books</option>
          <option value="Electronics">Electronics</option>
          <option value="Furniture">Furniture</option>
        </select>
      
      <h2>Product Condition:</h2>
      <select id="condition" value={condition} onChange={(e) => setCondition(e.target.value)} required>
          <option value="">select the Condition</option>
          <option value="New">New</option>
          <option value="Old">Old</option>
          <option value="Used fair">Used fair</option>
      </select>
      </form>
      </div>
      <form>
        <input type="radio" id="sell" name="sellOrgiveaway" required/>
        <span>Sell</span>
        <input type="radio" id="give_away" name="sellOrgiveaway" required/>
        <span>Give away</span>
      </form>
    </div>
    <div className="price">
      <h2>Set Price</h2>
      <span>$</span>
      <input type="value" id="price" name="price" value={price} onChange={(e) => setPrice(e.target.value)} required />
    </div>
    <div className="images">
      <h2>Upload Images</h2>
      <form >
        <input type="file" id="file-upload" accept="image/*" multiple onChange={handleFileInputChange} required/>
        <div>
        {[...defaultImages.slice(0, 6 - previewImages.length), ...previewImages].map((previewImage, index) => (
        <img key={index} src={previewImage} alt={`Preview image ${index}`} style={{ width: '100px', height: '100px', objectFit: 'cover' }}/>))}
        </div>
       </form>
    </div>
    
    <div className="tc">
      <span className="middle">
      Accept <a href='/tc'>terms and conditions</a>
      </span>
      <input type="checkbox" name="isChecked" checked={isChecked} onChange={handleisCheckedChange} />
      <span className="checkmark" />
      {error && <div style={{ color: 'red' , textAlign: 'center'}}>{error}</div>}
    </div>
    <div className="submit">
      <button>Submit</button>
    </div>
 
  </div>
  </form>
  </>
);
}

export default SellProducts; 