import './Seller_post.css'
import { useState } from 'react';

function Seller_post() {
  const [rememberMe, setRememberMe] = useState(false);
  

  function handleRememberMeChange(event) {
    setRememberMe(event.target.checked);
  }
  
  const [previewImages, setPreviewImages] = useState([]);

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
  
  
    return(
        
  
  <div className="container">
    <div className="post">
      <h1>POST HERE</h1>
    </div>
    <div className="product-details">
      <h1>Product Details</h1>
     
        <div className="field1">
          <p>Title:</p>
          <input type="text" id="fname" name="firstname" placeholder="" />
        </div>
        <div className="field2">
          <p htmlFor="lname">Description:</p>
          <input type="text" id="lname" name="lastname" placeholder="" />
        </div>
      
      <div className="category">
        <p>Select Category: </p>
        <select>
          <option>select a category</option>
          <option>Footwear</option>
          <option>Accesories</option>
          <option>Clothes</option>
        </select>
      </div>
    
      <form>
        
        <input type="radio" id="sell" />
        <span>Sell</span>
        <input type="radio" id="give-away"/>
        <span>Give away</span>
      </form>
    </div>
    <div className="price">
      <h1>Set Price</h1>
      <span>$</span>
      <input type="value" placeholder=" " />
    </div>
    <div className="images">
      <h1>Upload Images</h1>
      <form >
      <p for="file-upload">Choose a file:</p>
        <input
          type="file"
          id="file-upload"
          accept="image/*"
          multiple
          onChange={handleFileInputChange}
        />
        <div>
        {[...defaultImages.slice(0, 6 - previewImages.length), ...previewImages].map((previewImage, index) => (
          <img
            key={index}
            src={previewImage}
            alt={`Preview image ${index}`}
            style={{ width: '100px', height: '100px', objectFit: 'cover' }}
          />
        ))}
        </div>
      </form>
    </div>
    <div className="contact">
      <h1>Contact Details</h1>
      <p>Address line 1:</p>
      <input type="text" placeholder=" " />
      <p>Address line 2:</p>
      <input type="text" placeholder=" " />
    </div>
    <p className="tc">
      Accept <a href='/tc'>terms and conditions</a>
      <input type="checkbox"
                name="rememberMe"
                checked={rememberMe}
                onChange={handleRememberMeChange} />
      <span className="checkmark" />
    </p>
    <div className="submit">
      <button>Submit</button>
    </div>
  </div>



    );
}

export default Seller_post;