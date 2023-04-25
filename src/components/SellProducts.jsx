import './SellProducts.css'
import { useState, useEffect } from 'react';
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
  const [sellOrGiveAway, setSellOrGiveAway] = useState('');
  const [uploadedFiles, setUploadedFiles] = useState([]);


  useEffect(() => {
    console.log("previewImages length:", previewImages.length);
    console.log("previewImages content:", previewImages);
    console.log("Files: ",uploadedFiles)
  }, [previewImages, uploadedFiles]);
  function handleisCheckedChange(event) {
    setisChecked(event.target.checked);
  }

  const handleSellOrGiveAwayChange = (event) => {
    setSellOrGiveAway(event.target.value);
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

  const handleFileInputChange = async (event) => {
    const files = event.target.files;
    if (files.length > 6) {
      alert('Only up to 6 files can be uploaded!');
      return;
    }
  
    const newPreviewImages = [];
    const newUploadedFiles = [];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      newUploadedFiles.push(file);
      const reader = new FileReader();
  
      // Create a Promise that resolves when the image is loaded
      const loadPromise = new Promise((resolve) => {
        reader.onload = () => {
          console.log(`Processing image ${i} completed`);
          resolve(reader.result);
        };
      });
  
      reader.readAsDataURL(file);
      const result = await loadPromise; // Wait for the Promise to resolve
      newPreviewImages.push(result);
      
    }
  
    
    setPreviewImages(prevImages => [...prevImages, ...newPreviewImages]);
  setUploadedFiles(prevFiles => [...prevFiles, ...newUploadedFiles]); // Update the uploadedFiles state
  };
  
  
  
  
  

  const handleSubmit = async (event) => {
    event.preventDefault();
    previewImages.forEach((image, index) => {
        console.log(image, index)
      });
    if (!title || !price || !description ||!category ||!condition) {
      setError('Please fill in all required fields.');
      return;
    }
   
    if (!isChecked) {
      setError('Please check the box to submit.');
      return;
    }

    // Prepare the form data
  const formData = new FormData();
  formData.append("name", title);
  formData.append("seller", user.username);
  formData.append("price", price);
  formData.append("description", description);
  formData.append("category", category);
  formData.append("condition", condition);
  uploadedFiles.forEach((file, index) => {
    formData.append('images', file, file.name); // Make sure to use 'images' as the field name
});
   // Append each image individually
  formData.append("available", true);
  formData.append("choice", sellOrGiveAway);
  console.log("Form Data:", formData);
  try {
    // Send the POST request to the server
    const response = await fetch("http://localhost:3001/api/products/sell", {
      method: "POST",
      body: formData,
    });
    

    if (response.ok) {
      // Redirect the user to the products page
      navigate("/products");
    } else {
      // Display an error message if the request fails
      setError("Failed to submit the form. Please try again later.");
    }
  } catch (error) {
    console.error(error);
    setError("An unexpected error occurred. Please try again later.");
  }
   

    setTitle('');
    setPrice('');
    setDescription('');
    setCategory('');
    setCondition('');
    setisChecked(false);
    setError('');
    setPreviewImages([]);
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
          <a href="/cart">Cart</a>
        </li>
      </ul>
    </nav>
  </header>
  <center>
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
      
      </div>
      
      <div className="sell-or-giveaway">
      <input type="radio" id="sell" name="sellOrgiveaway" value="sell" checked={sellOrGiveAway === 'sell'} onChange={handleSellOrGiveAwayChange} required />
      <label>Sell</label>

      <input type="radio" id="giveaway" name="sellOrgiveaway" value="giveaway" checked={sellOrGiveAway === 'giveaway'} onChange={handleSellOrGiveAwayChange} required />
      <label>Give away</label>
    </div>
      
    </div>
    <div className="price">
      <h2>Set Price</h2>
      <span>$</span>
      <input type="value" id="price" name="price" value={price} onChange={(e) => setPrice(e.target.value)} required />
    </div>
    <div className="images">
  <h2>Upload Images</h2>

  <input type="file" id="file-upload" accept="image/*" multiple onChange={handleFileInputChange} required/>
  <div>
    {previewImages.map((previewImage, index) => (
      <img key={index} src={previewImage} alt={`Preview image ${index}`} style={{ width: '100px', height: '100px' }}/>
    ))}
  </div>
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
  </center>
  </>
);
}

export default SellProducts; 