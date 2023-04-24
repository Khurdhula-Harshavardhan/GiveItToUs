import './Seller_post.css'
import { useState } from 'react';
import axios from 'axios';
function Seller_post() {
  const [rememberMe, setRememberMe] = useState(false);
  const [previewImages, setPreviewImages] = useState([]);
 

  function handleRememberMeChange(event) {
    setRememberMe(event.target.checked);
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

  const [emessage,setemessage] = useState("");
  function handleSubmit(event) {
    event.preventDefault();

    // Get values from input fields
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const price = document.getElementById('price').value;
    

    // Check if any required fields are empty
    if(title===""||description===""||price===""){
      setemessage('All fields are required');
    } else{
      
              const data = {
                  "title":title,
                  "description":description,
              };
              

axios.put('http://localhost:3000/Seller_post', data)
.then(response => {
  
  window.location.href = '/login';
  setemessage(response.data.message);
})

}
}

  
  
  
    return(
        
  
  <div className="container">
    <div className="post">
      <h1>POST HERE</h1>
    </div>
    <div className="product-details">
      <h2>Product Details</h2>
      
        <div className="field1">
          <p>Title:</p>
          <input  type="text"
              id="title"
              name="title"
              placeholder=""
              />
        </div>
        <div className="field2">
          <p >Description:</p>
          <input type="text"
              id="description"
              name="description"
              placeholder=""
              />
        </div>
      
      <div className="category">
        <h2>Select Category: </h2>
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
        <input type="radio" id="give_away"/>
        <span>Give away</span>
      </form>
    </div>
    <div className="price">
      <h2>Set Price</h2>
      <span>$</span>
      <input type="value" id="price" name="price"  placeholder=" " />
    </div>
    <div className="images">
      <h2>Upload Images</h2>
      <form >
      
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
      <h2>Contact Details</h2>
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
      <button onClick={handleSubmit}>Submit</button>
    </div>
  </div>



    );
}

export default Seller_post; 